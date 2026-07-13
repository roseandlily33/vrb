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
      });
      return next;
    });

    setIsEditing(true);
  };
                