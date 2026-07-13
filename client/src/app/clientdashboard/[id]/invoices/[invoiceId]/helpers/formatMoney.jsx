export const formatMoney = (value, invoice) => {
  return Number(value || 0).toLocaleString("en-CA", {
    style: "currency",
    currency: invoice?.currency || "CAD",
  });
};