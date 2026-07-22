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
  costTracking: incomingCostTracking,
}) => {
  const safeQuantity = Number(quantity ?? 1);
  const safeUnitPrice = Number(unitPrice ?? 0);

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

    costTracking: {
      enabled: false,
      supplier: "",
      unitCost: 0,
      totalCost: 0,

      supplierTaxLabel: "HST",
      supplierTaxRate: 14,
      supplierTax: 0,
      totalPaid: 0,

      markupRate: 0,
      grossProfit: 0,

      ...(incomingCostTracking || {}),
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

      supplierTaxLabel: "HST",
      supplierTaxRate: 14,
      supplierTax: "",
      totalPaid: 0,

      markupRate: "",
      grossProfit: 0,
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

        const quantity = Number(updatedItem.quantity ?? 0);
        const unitPrice = Number(updatedItem.unitPrice ?? 0);

        updatedItem.total = Number((quantity * unitPrice).toFixed(2));

        if (updatedCostTracking.enabled) {
          const providedTotalCost = Number(updatedCostTracking.totalCost ?? 0);

          let unitCost = Number(updatedCostTracking.unitCost ?? 0);

          if (unitCost === 0 && providedTotalCost > 0 && quantity > 0) {
            unitCost = Number((providedTotalCost / quantity).toFixed(2));
          }

          const totalCost = Number((unitCost * quantity).toFixed(2));

          const supplierTaxRate = Number(
            updatedCostTracking.supplierTaxRate ?? 14,
          );

          const supplierTaxWasEntered =
            updatedCostTracking.supplierTax !== undefined &&
            updatedCostTracking.supplierTax !== null &&
            updatedCostTracking.supplierTax !== "";

          const enteredSupplierTax = Number(updatedCostTracking.supplierTax);

          const supplierTax =
            supplierTaxWasEntered && Number.isFinite(enteredSupplierTax)
              ? Number(enteredSupplierTax.toFixed(2))
              : Number((totalCost * (supplierTaxRate / 100)).toFixed(2));

          const totalPaid = Number((totalCost + supplierTax).toFixed(2));

          const grossProfit = Number(
            (updatedItem.total - totalCost).toFixed(2),
          );

          const markupRate =
            totalCost > 0
              ? Number(((grossProfit / totalCost) * 100).toFixed(2))
              : 0;

          updatedCostTracking.unitCost = unitCost;
          updatedCostTracking.totalCost = totalCost;

          updatedCostTracking.supplierTaxLabel =
            updatedCostTracking.supplierTaxLabel || "HST";

          updatedCostTracking.supplierTaxRate = supplierTaxRate;

          updatedCostTracking.supplierTax = supplierTax;
          updatedCostTracking.totalPaid = totalPaid;
          updatedCostTracking.grossProfit = grossProfit;
          updatedCostTracking.markupRate = markupRate;
        } else {
          updatedCostTracking.unitCost = 0;
          updatedCostTracking.totalCost = 0;
          updatedCostTracking.supplierTax = 0;
          updatedCostTracking.totalPaid = 0;
          updatedCostTracking.grossProfit = 0;
          updatedCostTracking.markupRate = 0;
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
    const unitPrice = Number(customItem.unitPrice ?? 0);

    if (!title) {
      alert("Add a title for the custom item.");
      return;
    }

    if (!Number.isFinite(unitPrice) || unitPrice < 0) {
      alert("Unit price cannot be negative.");
      return;
    }

    const enabled = customItem.costTracking?.enabled === true;

    const unitCost = enabled
      ? Number(customItem.costTracking.unitCost ?? 0)
      : 0;

    const totalCost = enabled ? Number(unitCost.toFixed(2)) : 0;

    const supplierTaxRate = enabled
      ? Number(customItem.costTracking.supplierTaxRate ?? 14)
      : 14;

    const supplierTaxWasEntered =
      customItem.costTracking.supplierTax !== undefined &&
      customItem.costTracking.supplierTax !== null &&
      customItem.costTracking.supplierTax !== "";

    const enteredSupplierTax = Number(customItem.costTracking.supplierTax);

    const supplierTax = enabled
      ? supplierTaxWasEntered && Number.isFinite(enteredSupplierTax)
        ? Number(enteredSupplierTax.toFixed(2))
        : Number((totalCost * (supplierTaxRate / 100)).toFixed(2))
      : 0;

    const totalPaid = Number((totalCost + supplierTax).toFixed(2));

    const grossProfit = enabled
      ? Number((unitPrice - totalCost).toFixed(2))
      : 0;

    const markupRate =
      enabled && totalCost > 0
        ? Number(((grossProfit / totalCost) * 100).toFixed(2))
        : 0;

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
          enabled,

          supplier: enabled
            ? customItem.costTracking.supplier?.trim() || ""
            : "",

          unitCost,
          totalCost,

          supplierTaxLabel: customItem.costTracking.supplierTaxLabel || "HST",

          supplierTaxRate,
          supplierTax,
          totalPaid,

          markupRate,
          grossProfit,
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

        supplierTaxLabel: "HST",
        supplierTaxRate: 14,
        supplierTax: "",
        totalPaid: 0,

        markupRate: "",
        grossProfit: 0,
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

  const supplierTaxPaid = useMemo(() => {
    return Number(
      invoiceItems
        .reduce((sum, item) => {
          if (!item.costTracking?.enabled) {
            return sum;
          }

          return sum + Number(item.costTracking.supplierTax ?? 0);
        }, 0)
        .toFixed(2),
    );
  }, [invoiceItems]);

  const supplierTotalPaid = useMemo(() => {
    return Number((trackedCosts + supplierTaxPaid).toFixed(2));
  }, [trackedCosts, supplierTaxPaid]);

  const grossProfit = useMemo(() => {
    return Number((subtotal - trackedCosts).toFixed(2));
  }, [subtotal, trackedCosts]);

  const estimatedNetTax = useMemo(() => {
    return Number((tax - supplierTaxPaid).toFixed(2));
  }, [tax, supplierTaxPaid]);

  const handleCreate = async () => {
    if (!invoiceItems.length) {
      alert("Add at least one invoice item.");
      return;
    }

    const invalidItem = invoiceItems.find((item) => {
      const quantity = Number(item.quantity);
      const unitPrice = Number(item.unitPrice);

      return (
        !item.title?.trim() ||
        !Number.isFinite(quantity) ||
        quantity <= 0 ||
        !Number.isFinite(unitPrice) ||
        unitPrice < 0
      );
    });

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

        taxRate: Number(taxRate),
        taxLabel: "HST",

        lineItems: invoiceItems.map((item) => {
          const quantity = Number(item.quantity ?? 1);
          const unitPrice = Number(item.unitPrice ?? 0);

          const costTracking = item.costTracking || {};

          const enabled = costTracking.enabled === true;

          if (!enabled) {
            return {
              serviceItemId: item.serviceItemId || undefined,

              description:
                item.title?.trim() ||
                item.description?.trim() ||
                "Invoice item",

              quantity,
              unitPrice,

              custom: Boolean(item.custom),
              itemType: item.itemType || "service",

              costTracking: {
                enabled: false,
              },
            };
          }

          let unitCost = Number(costTracking.unitCost ?? 0);

          const providedTotalCost = Number(costTracking.totalCost ?? 0);

          if (unitCost === 0 && providedTotalCost > 0 && quantity > 0) {
            unitCost = Number((providedTotalCost / quantity).toFixed(2));
          }

          const totalCost = Number((unitCost * quantity).toFixed(2));

          const supplierTaxRate = Number(costTracking.supplierTaxRate ?? 14);

          const supplierTaxWasEntered =
            costTracking.supplierTax !== undefined &&
            costTracking.supplierTax !== null &&
            costTracking.supplierTax !== "";

          const enteredSupplierTax = Number(costTracking.supplierTax);

          const supplierTax =
            supplierTaxWasEntered && Number.isFinite(enteredSupplierTax)
              ? Number(enteredSupplierTax.toFixed(2))
              : Number((totalCost * (supplierTaxRate / 100)).toFixed(2));

          return {
            serviceItemId: item.serviceItemId || undefined,

            description:
              item.title?.trim() || item.description?.trim() || "Invoice item",

            quantity,
            unitPrice,

            custom: Boolean(item.custom),
            itemType: item.itemType || "service",

            costTracking: {
              enabled: true,

              supplier: costTracking.supplier?.trim() || undefined,

              unitCost,
              totalCost,

              supplierTaxLabel: costTracking.supplierTaxLabel || "HST",

              supplierTaxRate,
              supplierTax,
            },
          };
        }),
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
              removeInvoiceItem={removeInvoiceItem}
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
            grossProfit={grossProfit}
            estimatedNetTax={estimatedNetTax}
            supplierTotalPaid={supplierTotalPaid}
            supplierTaxPaid={supplierTaxPaid}
            trackedCosts={trackedCosts}
            // grossMarginAfterTrackedCosts={grossMarginAfterTrackedCosts}
          />
        </aside>
      </div>
    </main>
  );
}
