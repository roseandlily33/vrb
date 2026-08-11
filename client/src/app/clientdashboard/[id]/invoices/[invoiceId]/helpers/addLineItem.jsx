export const addLineItem = ({ setEditable, setIsEditing }) => {
  setEditable((prev) => {
    const newItem = {
      description: "",
      quantity: 1,
      unitPrice: 0,
      total: 0,
      custom: true,
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
        grossMarginRate: 0,
      },
    };

    if (!prev) {
      return {
        issuer: {
          name: "VRB Web Design and Development",
          address: "Halifax, Nova Scotia",
          email: "victoria@vrbwebdesignanddev.com",
          phone: "(902) 817-1001",
          website: "www.vrbwebdesignanddev.com",
        },
        lineItems: [newItem],
      };
    }

    const next = { ...(prev || {}) };
    next.lineItems = [...(next.lineItems || []), newItem];
    return next;
  });

  setIsEditing(true);
};
                