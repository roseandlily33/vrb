export const updateTax = (value) => {
  const tax = Number(value || 0);

  setEditable((prev) => {
    if (!prev) return prev;

    const subtotal = (prev.lineItems || []).reduce(
      (sum, item) => sum + Number(item.total || 0),
      0
    );

    return {
      ...prev,
      tax,
      subtotal: Number(subtotal.toFixed(2)),
      total: Number((subtotal + tax).toFixed(2)),
    };
  });
};
