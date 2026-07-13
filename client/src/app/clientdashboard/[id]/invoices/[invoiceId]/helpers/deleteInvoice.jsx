export const deleteInvoice = async () => {
  const confirmed = window.confirm(
    "Delete this invoice? This action cannot be undone."
  );

  if (!confirmed) return;

  const token = localStorage.getItem("token");

  try {
    const res = await fetch(`${API_URL}/api/invoices/${invoice._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Delete failed");
    }

    router.push(`/clientdashboard/${id}/invoices`);
  } catch (err) {
    console.error(err);
    alert(err.message || "Delete failed");
  }
};