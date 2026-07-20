"use client";
import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "./page.module.css";
import CustomItem from "./CustomItem";
import AboutInvoice from "./AboutInvoice";
import AllItems from "./AllItems";
import AddItem from "./AddItem";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const createInvoiceItem = ({
  serviceItemId,
  title,
  description = "",
  quantity = 1,
  unitPrice = 0,
  custom = false,
  itemType = "service",
  costTracking: incomingCostTracking = undefined,
}) => {
  const safeQuantity = Number(quantity || 0);
  const safeUnitPrice = Number(unitPrice || 0);

  return {
    localId:
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`,

    serviceItemId,
    title,
    description,
    quantity: safeQuantity,
    unitPrice: safeUnitPrice,
    total: Number((safeQuantity * safeUnitPrice).toFixed(2)),
    custom,
    itemType,

    costTracking: incomingCostTracking || {
      enabled: false,
      supplier: "",
      unitCost: 0,
      totalCost: 0,
      markupRate: 0,
    },
  };
};

export default function InvoiceCreate() {
  const { id } = useParams();
  const router = useRouter();

  const [serviceItems, setServiceItems] = useState([]);
  const [invoiceItems, setInvoiceItems] = useState([]);

  const [invoiceMeta, setInvoiceMeta] = useState({
    currency: "CAD",
    dueDate: "",
    title: "",
    description: "",
    notes: "",
    taxRate: 14,
  });

  const [customItem, setCustomItem] = useState({
    title: "",
    description: "",
    unitPrice: "",
    costTracking: {
      enabled: false,
      supplier: "",
      unitCost: "",
      totalCost: 0,
      markupRate: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [servicesLoading, setServicesLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const token = localStorage.getItem("token");

    const loadServiceItems = async () => {
      try {
        setServicesLoading(true);

        const response = await fetch(`${API_URL}/api/service-items`, {
          headers: token
            ? {
                Authorization: `Bearer ${token}`,
              }
            : {},
          signal: controller.signal,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Could not load service items.");
        }

        setServiceItems(data.items || []);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to load service items:", error);
        }
      } finally {
        setServicesLoading(false);
      }
    };

    loadServiceItems();

    return () => controller.abort();
  }, []);

  const updateInvoiceItem = (index, updates) => {
    setInvoiceItems((currentItems) =>
      currentItems.map((item, itemIndex) => {
        if (itemIndex !== index) return item;

        const updatedCostTracking = {
          ...item.costTracking,
          ...(updates.costTracking || {}),
        };

        const updatedItem = {
          ...item,
          ...updates,
          costTracking: updatedCostTracking,
        };

        const quantity = Number(updatedItem.quantity || 0);
        const unitPrice = Number(updatedItem.unitPrice || 0);

        updatedItem.total = Number((quantity * unitPrice).toFixed(2));

        if (updatedCostTracking.enabled) {
          // prefer an explicitly provided unitCost; if only totalCost provided, derive unitCost
          const providedTotalCost = Number(updatedCostTracking.totalCost || 0);
          let unitCost = Number(updatedCostTracking.unitCost || 0);

          if ((!unitCost || unitCost === 0) && providedTotalCost) {
            unitCost = Number((providedTotalCost / (quantity || 1)).toFixed(2));
            updatedCostTracking.unitCost = unitCost;
          }

          // ensure totalCost is consistent with unitCost * qty
          updatedCostTracking.totalCost = Number((unitCost * quantity).toFixed(2));

          // compute markupRate when possible (based on unitPrice and unitCost)
          if (unitCost > 0 && unitPrice > 0) {
            updatedCostTracking.markupRate = Number(
              ((unitPrice / unitCost - 1) * 100).toFixed(2),
            );
          } else {
            updatedCostTracking.markupRate = Number(
              updatedCostTracking.markupRate || 0,
            );
          }
        } else {
          updatedCostTracking.totalCost = 0;
        }

        updatedItem.costTracking = updatedCostTracking;

        return updatedItem;
      }),
    );
  };

  const removeInvoiceItem = (index) => {
    setInvoiceItems((currentItems) =>
      currentItems.filter((_, itemIndex) => itemIndex !== index),
    );
  };

  const addServiceItem = (serviceItem) => {
    const price = Number(serviceItem.defaultPrice ?? serviceItem.price ?? 0);

    setInvoiceItems((currentItems) => [
      ...currentItems,
      createInvoiceItem({
        serviceItemId: serviceItem._id,
        title: serviceItem.name || serviceItem.title || "Service",
        description: serviceItem.description || "",
        quantity: 1,
        unitPrice: price,
        custom: false,
        itemType: "service",
      }),
    ]);
  };

  const addCustomItem = () => {
    const title = customItem.title.trim();
    const description = customItem.description.trim();
    const unitPrice = Number(customItem.unitPrice || 0);

    if (!title) {
      alert("Add a title for the custom item.");
      return;
    }

    if (unitPrice < 0) {
      alert("Unit price cannot be negative.");
      return;
    }

    setInvoiceItems((currentItems) => [
      ...currentItems,
      createInvoiceItem({
        title,
        description,
        quantity: 1,
        unitPrice,
        custom: true,
        itemType: "other",
        costTracking: {
          enabled: Boolean(customItem.costTracking?.enabled),
          supplier: customItem.costTracking?.enabled
            ? customItem.costTracking.supplier || ""
            : "",
          unitCost: customItem.costTracking?.enabled
            ? Number(customItem.costTracking.unitCost || 0)
            : 0,
          totalCost: customItem.costTracking?.enabled
            ? Number(customItem.costTracking.totalCost || 0)
            : 0,
          markupRate: customItem.costTracking?.enabled
            ? Number(customItem.costTracking.markupRate || 0)
            : 0,
        },
      }),
    ]);

    setCustomItem({
      title: "",
      description: "",
      unitPrice: "",
      costTracking: {
        enabled: false,
        supplier: "",
        unitCost: "",
        totalCost: 0,
        markupRate: "",
      },
    });
  };

  const subtotal = useMemo(() => {
    return Number(
      invoiceItems
        .reduce((sum, item) => sum + Number(item.total || 0), 0)
        .toFixed(2),
    );
  }, [invoiceItems]);

  const taxRate = Number(invoiceMeta.taxRate || 0);

  const tax = useMemo(() => {
    return Number((subtotal * (taxRate / 100)).toFixed(2));
  }, [subtotal, taxRate]);

  const total = useMemo(() => {
    return Number((subtotal + tax).toFixed(2));
  }, [subtotal, tax]);

  const trackedCosts = useMemo(() => {
    return Number(
      invoiceItems
        .reduce((sum, item) => {
          if (!item.costTracking?.enabled) return sum;

          return sum + Number(item.costTracking.totalCost || 0);
        }, 0)
        .toFixed(2),
    );
  }, [invoiceItems]);

  const grossMarginAfterTrackedCosts = useMemo(() => {
    return Number((subtotal - trackedCosts).toFixed(2));
  }, [subtotal, trackedCosts]);

  const handleCreate = async () => {
    if (!invoiceItems.length) {
      alert("Add at least one invoice item.");
      return;
    }

    const invalidItem = invoiceItems.find(
      (item) =>
        !item.title?.trim() ||
        Number(item.quantity) <= 0 ||
        Number(item.unitPrice) < 0,
    );

    if (invalidItem) {
      alert(
        "Each invoice item needs a title, a quantity greater than zero, and a valid price.",
      );
      return;
    }

    setLoading(true);

    const token = localStorage.getItem("token");

    try {
      const body = {
        clientId: id,
        currency: invoiceMeta.currency,
        dueDate: invoiceMeta.dueDate || undefined,
        title: invoiceMeta.title.trim() || undefined,
        description: invoiceMeta.description.trim() || undefined,
        notes: invoiceMeta.notes.trim() || undefined,
        taxRate,

        lineItems: invoiceItems.map((item) => ({
          serviceItemId: item.serviceItemId || undefined,
          description:
            item.title?.trim() || item.description?.trim() || "Invoice item",
          quantity: Number(item.quantity || 1),
          unitPrice: Number(item.unitPrice || 0),
          total: Number(item.total || 0),
          custom: Boolean(item.custom),
          itemType: item.itemType || "service",

          costTracking: (() => {
            const ct = item.costTracking || {};
            const enabled = Boolean(ct.enabled);
            if (!enabled) return { enabled: false, supplier: "", unitCost: 0, totalCost: 0, markupRate: 0 };

            const quantity = Number(item.quantity || 1);
            const unitPrice = Number(item.unitPrice || 0);
            let unitCost = Number(ct.unitCost || 0);
            const providedTotalCost = Number(ct.totalCost || 0);

            if ((!unitCost || unitCost === 0) && providedTotalCost) {
              unitCost = Number((providedTotalCost / (quantity || 1)).toFixed(2));
            }

            const totalCost = Number((unitCost * quantity).toFixed(2));

            let markupRate = Number(ct.markupRate || 0);
            if (unitCost > 0 && unitPrice > 0) {
              markupRate = Number(((unitPrice / unitCost - 1) * 100).toFixed(2));
            }

            return {
              enabled: true,
              supplier: ct.supplier?.trim() || "",
              unitCost,
              totalCost,
              markupRate,
            };
          })(),
        })),

        subtotal,
        tax,
        total,
      };

      const response = await fetch(`${API_URL}/api/invoices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token
            ? {
                Authorization: `Bearer ${token}`,
              }
            : {}),
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create invoice.");
      }

      router.push(`/clientdashboard/${id}/invoices/${data.invoice._id}`);
    } catch (error) {
      alert(error.message || "Could not create invoice.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <button
          type="button"
          className={styles.back}
          onClick={() => router.back()}
        >
          Back
        </button>

        <div>
          <span className={styles.eyebrow}>Create Invoice</span>
          <h1>New Invoice</h1>
        </div>

      </div>
      <div style={{ display: "flex" }}>
        <section className={styles.inlineForm}>
          <AboutInvoice
            invoiceMeta={invoiceMeta}
            setInvoiceMeta={setInvoiceMeta}
            taxRate={taxRate}
            tax={tax}
          />
          <AddItem
            servicesLoading={servicesLoading}
            addServiceItem={addServiceItem}
            serviceItems={serviceItems}
            customItem={customItem}
            setCustomItem={setCustomItem}
            addCustomItem={addCustomItem}
          />

          <div className={styles.customItem}>
            <CustomItem
              invoiceItems={invoiceItems}
              updateInvoiceItem={updateInvoiceItem}
              invoiceMeta={invoiceMeta}
              setInvoiceMeta={setInvoiceMeta}
            />
          </div>
        </section>

        <aside>
          <AllItems
            invoiceMeta={invoiceMeta}
            taxRate={taxRate}
            total={total}
            handleCreate={handleCreate}
            invoiceItems={invoiceItems}
            subtotal={subtotal}
            tax={tax}
            loading={loading}
            trackedCosts={trackedCosts}
            grossMarginAfterTrackedCosts={grossMarginAfterTrackedCosts}
          />
        </aside>
      </div>
    </main>
  );
}
