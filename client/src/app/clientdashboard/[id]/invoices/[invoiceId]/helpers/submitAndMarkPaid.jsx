export const submitAndMarkPaid = async ({
  invoice,
  payments,
  API_URL,
  setInvoice,
  fetchPayments,
}) => {
  if (!invoice) return;

  if (!invoice.issuedAt) {
    if (!confirm("Invoice has no issued date. Set issued date to today?"))
      return;
  }

  if (!invoice.dueDate) {
    if (!confirm("Invoice has no due date. Continue without due date?")) return;
  }

  const paidSoFar = payments.reduce((s, p) => s + Number(p.amount || 0), 0);
  const balance = Number((invoice.total || 0) - paidSoFar);
  const token = localStorage.getItem("token");

  try {
    if (balance > 0) {
      const payRes = await fetch(`${API_URL}/api/payments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          clientId: invoice.clientId._id,
          amount: balance,
          currency: invoice.currency || "CAD",
          method: "other",
          status: "completed",
          date: new Date(),
          invoiceId: invoice._id,
        }),
      });

      const pj = await payRes.json();
      if (!payRes.ok) throw new Error(pj.error || "Failed to create payment");
    }

    const body = { status: "paid" };
    if (!invoice.issuedAt) body.issuedAt = new Date();

    const res = await fetch(`${API_URL}/api/invoices/${invoice._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const j = await res.json();
    if (!res.ok) throw new Error(j.error || "Failed to update invoice");

    setInvoice(j.invoice);
    await fetchPayments();
    alert("Invoice marked as paid");
  } catch (err) {
    console.error(err);
    alert(err.message || "Failed to submit");
  }
};
