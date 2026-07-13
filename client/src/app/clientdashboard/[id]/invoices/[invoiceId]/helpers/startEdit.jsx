export const startEdit = ({ invoice, setEditable, setIsEditing }) => {
  if (!invoice) return;

  const invoiceCopy = structuredClone
    ? structuredClone(invoice)
    : JSON.parse(JSON.stringify(invoice));

  setEditable({
    ...invoiceCopy,
    issuer: {
      name: invoiceCopy.issuer?.name || "VRB Web Design and Development",
      address: invoiceCopy.issuer?.address || "Halifax, Nova Scotia",
      email: invoiceCopy.issuer?.email || "victoria@vrbwebdesignanddev.com",
      phone: invoiceCopy.issuer?.phone || "(902) 817-1001",
      website: invoiceCopy.issuer?.website || "www.vrbwebdesignanddev.com",
    },
    lineItems: (invoiceCopy.lineItems || []).map((item) => ({
      ...item,
      quantity: Number(item.quantity || 0),
      unitPrice: Number(item.unitPrice || 0),
      total:
        Number(item.total) ||
        Number(item.quantity || 0) * Number(item.unitPrice || 0),
    })),
  });

  setIsEditing(true);
};
