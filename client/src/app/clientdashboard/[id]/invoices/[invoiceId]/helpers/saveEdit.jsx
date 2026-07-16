export const saveEdit = async ({ editable, invoice, setInvoice, setEditable, setIsEditing, API_URL }) => {
  if (!editable || !invoice?._id) return;

  const token = localStorage.getItem("token");

  try {
    const body = {
      currency: editable.currency,
      title: editable.title,
      description: editable.description,
      issuer: editable.issuer,
      terms: editable.terms,
      lineItems: (editable.lineItems || []).map((item) => ({
        description: item.description,
        serviceItemId: item.serviceItemId || undefined,
        quantity: Number(item.quantity || 0),
        unitPrice: Number(item.unitPrice || 0),
        custom: item.custom || false,
      })),
      tax: Number(editable.tax || 0),
      notes: editable.notes,
      dueDate: editable.dueDate || null,
      issuedAt: editable.issuedAt || null,
      status: editable.status,
    };

    const res = await fetch(`${API_URL}/api/invoices/${invoice._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to update invoice");
    }

    setInvoice(data.invoice);
    setEditable(null);
    setIsEditing(false);
  } catch (err) {
    console.error(err);
    alert(err.message || "Save failed");
  }
};