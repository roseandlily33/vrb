export const updateLineItem = (setEditable, index, field, value) => {
  setEditable((prev) => {
    if (!prev) return prev;

    const nextLineItems = (prev.lineItems || []).map((item, itemIndex) => {
      if (itemIndex !== index) return item;

      const updatedItem = {
        ...item,
        [field]:
          field === "quantity" || field === "unitPrice"
            ? Number(value || 0)
            : value,
      };

      const quantity = Number(updatedItem.quantity || 0);
      const unitPrice = Number(updatedItem.unitPrice || 0);

      return {
        ...updatedItem,
        total: Number((quantity * unitPrice).toFixed(2)),
      };
    });

    const subtotal = nextLineItems.reduce(
      (sum, item) => sum + Number(item.total || 0),
      0,
    );

    // Tax is currently disabled in UI, keep total equal to subtotal
    const total = subtotal;

    return {
      ...prev,
      lineItems: nextLineItems,
      subtotal: Number(subtotal.toFixed(2)),
      total: Number(total.toFixed(2)),
    };
  });
};
