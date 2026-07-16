"use client";
import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "./page.module.css";

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
        const unitCost = Number(updatedCostTracking.unitCost || 0);

        updatedItem.total = Number((quantity * unitPrice).toFixed(2));

        updatedItem.costTracking.totalCost = updatedCostTracking.enabled
          ? Number((quantity * unitCost).toFixed(2))
          : 0;

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

          costTracking: {
            enabled: Boolean(item.costTracking?.enabled),

            supplier: item.costTracking?.enabled
              ? item.costTracking.supplier?.trim() || ""
              : "",

            unitCost: item.costTracking?.enabled
              ? Number(item.costTracking.unitCost || 0)
              : 0,

            totalCost: item.costTracking?.enabled
              ? Number(item.costTracking.totalCost || 0)
              : 0,

            markupRate: item.costTracking?.enabled
              ? Number(item.costTracking.markupRate || 0)
              : 0,
          },
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

        <div style={{ minWidth: 220 }} />
      </div>

      <section className={styles.inlineForm}>
        <div className={styles.invoiceMeta}>
          <label>
            Currency
            <select
              value={invoiceMeta.currency}
              onChange={(event) =>
                setInvoiceMeta((current) => ({
                  ...current,
                  currency: event.target.value,
                }))
              }
            >
              <option value="CAD">CAD</option>
              <option value="USD">USD</option>
            </select>
          </label>

          <label>
            Due Date
            <input
              type="date"
              value={invoiceMeta.dueDate}
              onChange={(event) =>
                setInvoiceMeta((current) => ({
                  ...current,
                  dueDate: event.target.value,
                }))
              }
            />
          </label>

          <label>
            Tax Rate %
            <div>
              <input
                type="number"
                min="0"
                step="0.01"
                value={invoiceMeta.taxRate}
                onChange={(event) =>
                  setInvoiceMeta((current) => ({
                    ...current,
                    taxRate: Number(event.target.value || 0),
                  }))
                }
              />
            </div>
          </label>

          <div className={styles.taxPill}>
            HST {taxRate}%: <strong>${tax.toFixed(2)}</strong>
          </div>
        </div>

        <div className={styles.invoiceGrid}>
          <div className={styles.invoicePanel}>
            <div className={styles.invoiceDetails}>
              <h4>Invoice Details</h4>

              <label>
                Invoice Title
                <input
                  type="text"
                  placeholder="Website design, print order, monthly services..."
                  value={invoiceMeta.title}
                  onChange={(event) =>
                    setInvoiceMeta((current) => ({
                      ...current,
                      title: event.target.value,
                    }))
                  }
                />
              </label>

              <label>
                Description
                <textarea
                  placeholder="Optional invoice description"
                  value={invoiceMeta.description}
                  onChange={(event) =>
                    setInvoiceMeta((current) => ({
                      ...current,
                      description: event.target.value,
                    }))
                  }
                />
              </label>
            </div>

            <div className={styles.serviceSection}>
              <h4>Services</h4>

              {servicesLoading ? (
                <p>Loading services...</p>
              ) : (
                <div className={styles.serviceList}>
                  {serviceItems.map((serviceItem) => (
                    <div key={serviceItem._id} className={styles.serviceItem}>
                      <div>
                        <strong>{serviceItem.name || serviceItem.title}</strong>

                        <span>
                          {serviceItem.category || "Service"} · $
                          {Number(
                            serviceItem.defaultPrice ?? serviceItem.price ?? 0,
                          ).toFixed(2)}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => addServiceItem(serviceItem)}
                        className={styles.createSmall}
                      >
                        Add
                      </button>
                    </div>
                  ))}

                  {!serviceItems.length && <p>No saved service items found.</p>}
                </div>
              )}
            </div>

            <div className={styles.customItem}>
              <h4>Custom Item</h4>

              <div className={styles.customGrid}>
                <input
                  placeholder="Title"
                  value={customItem.title}
                  onChange={(event) =>
                    setCustomItem((current) => ({
                      ...current,
                      title: event.target.value,
                    }))
                  }
                />

                <input
                  placeholder="Description"
                  value={customItem.description}
                  onChange={(event) =>
                    setCustomItem((current) => ({
                      ...current,
                      description: event.target.value,
                    }))
                  }
                />

                <input
                  placeholder="Unit price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={customItem.unitPrice}
                  onChange={(event) =>
                    setCustomItem((current) => ({
                      ...current,
                      unitPrice: event.target.value,
                    }))
                  }
                />

                <label style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  <input
                    type="checkbox"
                    checked={customItem.costTracking?.enabled || false}
                    onChange={(event) => {
                      const enabled = event.target.checked;
                      setCustomItem((current) => ({
                        ...current,
                        costTracking: {
                          ...current.costTracking,
                          enabled,
                          unitCost: enabled
                            ? current.costTracking?.unitCost || ""
                            : "",
                          markupRate: enabled
                            ? current.costTracking?.markupRate || ""
                            : "",
                          supplier: enabled
                            ? current.costTracking?.supplier || ""
                            : "",
                        },
                      }));
                    }}
                  />
                  <span>Track supplier cost</span>
                </label>

                {customItem.costTracking?.enabled && (
                  <div className={styles.costTrackingFields} style={{ gridColumn: "1 / -1" }}>
                    <input
                      placeholder="Supplier"
                      value={customItem.costTracking.supplier || ""}
                      onChange={(event) =>
                        setCustomItem((current) => ({
                          ...current,
                          costTracking: {
                            ...current.costTracking,
                            supplier: event.target.value,
                          },
                        }))
                      }
                    />

                    <input
                      placeholder="Unit cost"
                      type="number"
                      min="0"
                      step="0.01"
                      value={customItem.costTracking.unitCost || ""}
                      onChange={(event) =>
                        setCustomItem((current) => {
                          const unitCost = event.target.value;
                          const markup = Number(
                            current.costTracking.markupRate || 0,
                          );
                          const unitPriceFromMarkup = markup
                            ? Number(
                                (
                                  Number(unitCost || 0) *
                                  (1 + markup / 100)
                                ).toFixed(2),
                              )
                            : current.unitPrice;

                          return {
                            ...current,
                            unitPrice: current.unitPrice || unitPriceFromMarkup,
                            costTracking: {
                              ...current.costTracking,
                              unitCost,
                              totalCost: Number(
                                (
                                  (current.quantity || 1) *
                                  Number(unitCost || 0)
                                ).toFixed(2),
                              ),
                            },
                          };
                        })
                      }
                    />

                    <input
                      placeholder="Markup %"
                      type="number"
                      min="0"
                      step="0.01"
                      value={customItem.costTracking.markupRate || ""}
                      onChange={(event) => {
                        const markupRate = event.target.value;
                        setCustomItem((current) => {
                          const unitCost = Number(
                            current.costTracking.unitCost || 0,
                          );
                          const unitPrice = Number(
                            (
                              unitCost *
                              (1 + Number(markupRate || 0) / 100)
                            ).toFixed(2),
                          );

                          return {
                            ...current,
                            unitPrice,
                            costTracking: {
                              ...current.costTracking,
                              markupRate,
                              totalCost: Number(
                                ((current.quantity || 1) * unitCost).toFixed(2),
                              ),
                            },
                          };
                        });
                      }}
                    />

                    <div className={styles.internalValue}>
                      <span>Total supplier cost</span>
                      <strong>
                        $
                        {Number(customItem.costTracking.totalCost || 0).toFixed(
                          2,
                        )}
                      </strong>
                    </div>

                    <div className={styles.internalValue}>
                      <span>Gross margin</span>
                      <strong>
                        $
                        {Number(
                          Number(customItem.unitPrice || 0) -
                            Number(customItem.costTracking.totalCost || 0),
                        ).toFixed(2)}
                      </strong>
                    </div>
                  </div>
                )}

                <div style={{ gridColumn: "1 / -1", marginTop: "0.5rem" }}>
                  <button
                    type="button"
                    onClick={addCustomItem}
                    className={styles.createSmall}
                  >
                    Add Custom
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.customItem}>
              <h4>Invoice Items</h4>

              <div className={styles.invoiceItems}>
                {!invoiceItems.length && (
                  <p>No invoice items have been added yet.</p>
                )}

                {invoiceItems.map((item, index) => (
                  <div key={item.localId} className={styles.invoiceItemWrap}>
                    <div className={styles.invoiceItem}>
                      <div className={styles.itemDescription}>
                        <label>
                          Description
                          <input
                            value={item.title}
                            onChange={(event) =>
                              updateInvoiceItem(index, {
                                title: event.target.value,
                              })
                            }
                          />
                        </label>
                      </div>

                      <div className={styles.itemQty}>
                        <label>
                          Qty
                          <input
                            type="number"
                            min="1"
                            step="1"
                            value={item.quantity}
                            onChange={(event) =>
                              updateInvoiceItem(index, {
                                quantity: Number(event.target.value || 0),
                              })
                            }
                          />
                        </label>
                      </div>

                      <div className={styles.itemPrice}>
                        <label>
                          Unit Price
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={item.unitPrice}
                            onChange={(event) =>
                              updateInvoiceItem(index, {
                                unitPrice: Number(event.target.value || 0),
                              })
                            }
                          />
                        </label>
                      </div>

                      <div className={styles.itemTotal}>
                        <span>Total</span>
                        <strong>${Number(item.total || 0).toFixed(2)}</strong>
                      </div>

                      <div>
                        <button
                          type="button"
                          onClick={() => removeInvoiceItem(index)}
                          className={styles.delete}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className={styles.internalCostToggle}>
                      <label>
                        <input
                          type="checkbox"
                          checked={item.costTracking?.enabled || false}
                          onChange={(event) => {
                            const enabled = event.target.checked;

                            updateInvoiceItem(index, {
                              itemType: enabled
                                ? "product"
                                : item.custom
                                  ? "other"
                                  : "service",

                              costTracking: {
                                enabled,
                                supplier: enabled
                                  ? item.costTracking?.supplier || ""
                                  : "",
                                unitCost: enabled
                                  ? Number(item.costTracking?.unitCost || 0)
                                  : 0,
                                totalCost: 0,
                                markupRate: enabled
                                  ? Number(item.costTracking?.markupRate || 0)
                                  : 0,
                              },
                            });
                          }}
                        />
                        Track supplier cost
                      </label>
                    </div>

                    {item.costTracking?.enabled && (
                      <div className={styles.costTrackingFields}>
                        <label>
                          Supplier
                          <input
                            type="text"
                            placeholder="VistaPrint"
                            value={item.costTracking.supplier || ""}
                            onChange={(event) =>
                              updateInvoiceItem(index, {
                                costTracking: {
                                  supplier: event.target.value,
                                },
                              })
                            }
                          />
                        </label>

                        <label>
                          Unit Cost
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={item.costTracking.unitCost || ""}
                            onChange={(event) =>
                              updateInvoiceItem(index, {
                                costTracking: {
                                  unitCost: Number(event.target.value || 0),
                                },
                              })
                            }
                          />
                        </label>

                        <label>
                          Markup %
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={item.costTracking.markupRate || ""}
                            onChange={(event) => {
                              const markupRate = Number(
                                event.target.value || 0,
                              );

                              const unitCost = Number(
                                item.costTracking.unitCost || 0,
                              );

                              const unitPrice = Number(
                                (unitCost * (1 + markupRate / 100)).toFixed(2),
                              );

                              updateInvoiceItem(index, {
                                unitPrice,
                                costTracking: {
                                  markupRate,
                                },
                              });
                            }}
                          />
                        </label>

                        <div className={styles.internalValue}>
                          <span>Total supplier cost</span>
                          <strong>
                            $
                            {Number(item.costTracking.totalCost || 0).toFixed(
                              2,
                            )}
                          </strong>
                        </div>

                        <div className={styles.internalValue}>
                          <span>Gross margin</span>
                          <strong>
                            $
                            {Number(
                              Number(item.total || 0) -
                                Number(item.costTracking.totalCost || 0),
                            ).toFixed(2)}
                          </strong>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Left column totals removed — totals are shown on the right mini-invoice */}

            <div className={styles.invoiceNotes}>
              <label>
                Notes
                <textarea
                  placeholder="Payment terms, payment methods, or additional notes"
                  value={invoiceMeta.notes}
                  onChange={(event) =>
                    setInvoiceMeta((current) => ({
                      ...current,
                      notes: event.target.value,
                    }))
                  }
                />
              </label>
            </div>

            {/* actions intentionally empty; create button moved to right column */}
          </div>

          <aside>
            <div className={styles.invoicePanel}>
              <h4>Invoice Preview</h4>

              <div className={styles.miniInvoice}>
                <div className={styles.miniHeader}>
                  <strong>{invoiceMeta.title || "Invoice Preview"}</strong>
                </div>

                <div className={styles.miniItems}>
                  {invoiceItems.map((it) => (
                    <div key={it.localId} className={styles.miniItem}>
                      <div className={styles.miniDesc}>{it.title}</div>
                      <div className={styles.miniQty}>{it.quantity} ×</div>
                      <div className={styles.miniPrice}>
                        {Number(it.unitPrice || 0).toFixed(2)}
                      </div>
                      <div className={styles.miniTotal}>
                        ${Number(it.total || 0).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.miniTotals}>
                  <div>
                    <span>Subtotal</span>
                    <strong>${subtotal.toFixed(2)}</strong>
                  </div>

                  <div>
                    <span>HST ({taxRate}%)</span>
                    <strong>${tax.toFixed(2)}</strong>
                  </div>

                  <div className={styles.grandTotal}>
                    <span>Total</span>
                    <strong>${total.toFixed(2)}</strong>
                  </div>
                </div>

                <div className={styles.createWrapper}>
                  <button
                    type="button"
                    disabled={loading || !invoiceItems.length}
                    onClick={handleCreate}
                    className={styles.create}
                  >
                    {loading ? "Creating Invoice..." : "Create Invoice"}
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.invoicePanel}>
              <h4>Internal Cost Summary</h4>

              <p>
                This information is for your records and should not appear on
                the client-facing invoice.
              </p>

              <div className={styles.previewSummary}>
                <div>
                  <span>Tracked supplier costs</span>
                  <strong>${trackedCosts.toFixed(2)}</strong>
                </div>

                <div>
                  <span>Sales before HST</span>
                  <strong>${subtotal.toFixed(2)}</strong>
                </div>

                <div>
                  <span>Margin after tracked costs</span>
                  <strong>${grossMarginAfterTrackedCosts.toFixed(2)}</strong>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
