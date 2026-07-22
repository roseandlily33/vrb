export const addLineItem = ({ setEditable, setIsEditing }) => {
    setEditable((prev) => {
      if (!prev) return prev;

      const next = { ...(prev || {}) };
      next.lineItems = next.lineItems || [];
      next.lineItems.push({
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
      });
      return next;
    });

    setIsEditing(true);
  };
                