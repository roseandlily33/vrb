// "use client";
// import React, { useState, useEffect } from "react";
// // import Modal from "../../../../components/Modal/Modal";
// import styles from "./page.module.css";

// export default function AddAPayment({ open, onClose, invoice, apiUrl, onCreated }) {
//   const [paymentForm, setPaymentForm] = useState({
//     amount: invoice?.total || "",
//     currency: invoice?.currency || "CAD",
//     method: "card",
//     status: "pending",
//     date: "",
//     notes: "",
//   });
//   const [existingPayments, setExistingPayments] = useState([]);
//   const [selectedExisting, setSelectedExisting] = useState("new");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("token");

//     try {
//       if (selectedExisting && selectedExisting !== "new") {
//         // attach existing payment to this invoice
//         const res = await fetch(`${apiUrl}/api/payments/${selectedExisting}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ invoiceId: invoice._id }),
//         });

//         const data = await res.json();
//         if (!res.ok) throw new Error(data.error || "Failed to update payment");

//         onClose?.();
//         onCreated?.();
//       } else {
//         const body = {
//           ...paymentForm,
//           clientId: invoice.clientId?._id || invoice.clientId,
//           amount: Number(paymentForm.amount),
//           date: paymentForm.date || undefined,
//           invoiceId: invoice._id,
//         };

//         const res = await fetch(`${apiUrl}/api/payments`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(body),
//         });

//         const data = await res.json();

//         if (!res.ok) throw new Error(data.error || "Failed to create payment");

//         onClose?.();
//         onCreated?.();
//       }
//     } catch (err) {
//       console.error(err);
//       alert(err.message || "Error creating payment");
//     }
//   };

//   useEffect(() => {
//     if (!invoice || !apiUrl) return;
//     let mounted = true;

//     const token = localStorage.getItem("token");

//     fetch(`${apiUrl}/api/payments?clientId=${invoice.clientId?._id || invoice.clientId}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((r) => r.json())
//       .then((j) => {
//         if (!mounted) return;
//         const list = (j.payments || []).filter((p) => !p.invoiceId);
//         setExistingPayments(list);
//       })
//       .catch((err) => {
//         console.error(err);
//       });

//     return () => {
//       mounted = false;
//     };
//   }, [invoice, apiUrl]);


//   return (
//     <Modal open={open} title="Create Payment" onClose={onClose}>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <label>
//           Apply Existing Payment
//           <select
//             value={selectedExisting}
//             onChange={(e) => {
//               const val = e.target.value;
//               setSelectedExisting(val);
//               if (val === "new") {
//                 setPaymentForm({
//                   amount: invoice?.total || "",
//                   currency: invoice?.currency || "CAD",
//                   method: "card",
//                   status: "pending",
//                   date: "",
//                   notes: "",
//                 });
//               } else {
//                 const found = existingPayments.find((p) => p._id === val);
//                 if (found) {
//                   setPaymentForm({
//                     amount: found.amount || "",
//                     currency: found.currency || invoice?.currency || "CAD",
//                     method: found.method || "card",
//                     status: found.status || "pending",
//                     date: found.date ? String(found.date).split("T")[0] : "",
//                     notes: found.notes || "",
//                   });
//                 }
//               }
//             }}
//           >
//             <option value="new">Create new payment</option>
//             {existingPayments.map((p) => (
//               <option key={p._id} value={p._id}>
//                 {`${p.amount} — ${p.status || ""} — ${p.date ? new Date(p.date).toLocaleDateString() : ""}`}
//               </option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Amount
//           <input
//             required
//             type="number"
//             min="0"
//             step="0.01"
//             value={paymentForm.amount}
//             disabled={selectedExisting !== "new"}
//             onChange={(e) =>
//               setPaymentForm((prev) => ({ ...prev, amount: e.target.value }))
//             }
//           />
//         </label>

//         <label>
//           Currency
//           <select
//             value={paymentForm.currency}
//             onChange={(e) =>
//               setPaymentForm((prev) => ({ ...prev, currency: e.target.value }))
//             }
//           >
//             <option value="CAD">CAD</option>
//             <option value="USD">USD</option>
//           </select>
//         </label>

//         <label>
//           Method
//           <select
//             value={paymentForm.method}
//             onChange={(e) =>
//               setPaymentForm((prev) => ({ ...prev, method: e.target.value }))
//             }
//           >
//             <option value="card">Card</option>
//             <option value="bank_transfer">Bank transfer</option>
//             <option value="cash">Cash</option>
//             <option value="cheque">Cheque</option>
//             <option value="etransfer">E-transfer</option>
//           </select>
//         </label>

//         <label>
//           Status
//           <select
//             value={paymentForm.status}
//             onChange={(e) =>
//               setPaymentForm((prev) => ({ ...prev, status: e.target.value }))
//             }
//           >
//             <option value="pending">Pending</option>
//             <option value="completed">Completed</option>
//           </select>
//         </label>

//         <label>
//           Date
//           <input
//             type="date"
//             value={paymentForm.date}
//             onChange={(e) =>
//               setPaymentForm((prev) => ({ ...prev, date: e.target.value }))
//             }
//           />
//         </label>

//         <label>
//           Notes
//           <textarea
//             value={paymentForm.notes}
//             onChange={(e) =>
//               setPaymentForm((prev) => ({ ...prev, notes: e.target.value }))
//             }
//           />
//         </label>

//         <div className={styles.actions}>
//           <button type="submit" className={styles.print}>
//             Create
//           </button>
//         </div>
//       </form>
//     </Modal>
//   );
// }
