export const handlePaymentCreate = async (
  e,
  paymentForm,
  id,
  invoice,
  setOpenPayment,
  router,
  API_URL,
) => {
  e.preventDefault();

  const token = localStorage.getItem("token");

  try {
    const body = {
      ...paymentForm,
      clientId: id,
      amount: Number(paymentForm.amount),
      date: paymentForm.date || undefined,
      invoiceId: invoice._id,
    };

    const res = await fetch(`${API_URL}/api/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to create payment");
    }

    setOpenPayment(false);
    router.push(`/clientdashboard/${id}/payments`);
  } catch (err) {
    console.error(err);
    alert(err.message || "Error creating payment");
  }
};
