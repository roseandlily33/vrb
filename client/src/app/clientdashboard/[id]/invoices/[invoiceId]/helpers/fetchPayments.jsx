export const fetchPayments = async (invoice, setPayments, API_URL) => {
  if (!invoice || !invoice.clientId) return;
  const token = localStorage.getItem("token");

  try {
    const res = await fetch(
      `${API_URL}/api/payments?clientId=${invoice.clientId._id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    const j = await res.json();
    if (!res.ok) throw new Error(j.error || "Failed to load payments");

    const forInvoice = (j.payments || []).filter(
      (p) =>
        String(p.invoiceId) === String(invoice._id) && p.status === "completed",
    );
    setPayments(forInvoice);
  } catch (err) {
    console.error(err);
  }
};
