// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import { useParams, useRouter } from "next/navigation";
// import styles from "../../page.module.css";
// import ReceiptTemplate from "./receipt";

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// export default function ReceiptPage() {
//   const { id, invoiceId, receiptId } = useParams();
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [receipt, setReceipt] = useState(null);
//   const [invoice, setInvoice] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editable, setEditable] = useState(null);
//   const docRef = useRef(null);

//   useEffect(() => {
//     if (receiptId) fetchReceipt();
//     if (invoiceId) fetchInvoice();
//   }, [receiptId, invoiceId]);

//   const fetchReceipt = async () => {
//     setLoading(true);
//     const token = localStorage.getItem("token");
//     try {
//       const res = await fetch(`${API_URL}/api/receipts/${receiptId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Failed to load receipt");
//       setReceipt(data.receipt);
//       setEditable(null);
//       setIsEditing(false);
//     } catch (err) {
//       console.error(err);
//       alert(err.message || "Failed to load receipt");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchInvoice = async () => {
//     setLoading(true);
//     const token = localStorage.getItem("token");
//     try {
//       const res = await fetch(`${API_URL}/api/invoices/${invoiceId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Failed to load invoice");
//       setInvoice(data.invoice);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const startEdit = () => {
//     if (!receipt) return;
//     const copy = structuredClone
//       ? structuredClone(receipt)
//       : JSON.parse(JSON.stringify(receipt));
//     setEditable(copy);
//     setIsEditing(true);
//   };

//   const save = async () => {
//     if (!editable || !receipt._id) return;
//     const token = localStorage.getItem("token");
//     try {
//       const body = {
//         receiptNumber: editable.receiptNumber,
//         amount: Number(editable.amount || 0),
//         currency: editable.currency || "CAD",
//         issuedAt: editable.issuedAt || undefined,
//         notes: editable.notes || undefined,
//         paymentIds: (editable.paymentIds || [])
//           .map((p) => (typeof p === "string" ? p : p._id))
//           .filter(Boolean),
//       };

//       const res = await fetch(`${API_URL}/api/receipts/${receipt._id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(body),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Save failed");
//       setReceipt(data.receipt);
//       setIsEditing(false);
//       setEditable(null);
//     } catch (err) {
//       console.error(err);
//       alert(err.message || "Save failed");
//     }
//   };

//   const del = async () => {
//     if (!confirm("Delete this receipt? This cannot be undone.")) return;
//     const token = localStorage.getItem("token");
//     try {
//       const res = await fetch(`${API_URL}/api/receipts/${receipt._id}`, {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Delete failed");
//       router.push(`/clientdashboard/${id}/payments`);
//     } catch (err) {
//       console.error(err);
//       alert(err.message || "Delete failed");
//     }
//   };

//   const printDoc = () => {
//     if (isEditing) {
//       alert("Please save or cancel your changes before printing.");
//       return;
//     }
//     window.print();
//   };

//   const formatMoney = (v) => {
//     const n = Number(v || 0);
//     return `$${n.toFixed(2)}`;
//   };

//   const formatDate = (d) => {
//     if (!d) return "";
//     try {
//       return new Date(d).toLocaleDateString();
//     } catch {
//       return String(d);
//     }
//   };

//   if (loading) return <div className={styles.wrap}>Loading...</div>;
//   if (!receipt) return <div className={styles.wrap}>No receipt found.</div>;

//   return (
//     <main className={styles.wrap}>
//       <div className={styles.header}>
//         <button
//           className={styles.back}
//           onClick={() => router.push(`/clientdashboard/${id}/payments`)}
//         >
//           Back
//         </button>
//         <div className={styles.pageHeading}>
//           <span className={styles.eyebrow}>Receipt</span>
//           <h1>Receipt — {receipt.receiptNumber || receipt._id}</h1>
//         </div>

//         <div className={styles.headerActions}>
//           {!isEditing ? (
//             <>
//               <button className={styles.print} onClick={printDoc}>
//                 Print / Download
//               </button>
//               <button className={styles.view} onClick={startEdit}>
//                 Edit Receipt
//               </button>
//               <button className={styles.delete} onClick={del}>
//                 Delete Receipt
//               </button>
//             </>
//           ) : (
//             <>
//               <button className={styles.print} onClick={save}>
//                 Save
//               </button>
//               <button
//                 className={styles.delete}
//                 onClick={() => {
//                   setIsEditing(false);
//                   setEditable(null);
//                 }}
//               >
//                 Cancel
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {(() => {
//         const displayedReceipt = isEditing && editable ? editable : receipt;
//         const invoiceForTemplate = invoice || {};
//         const payments =
//           (displayedReceipt && displayedReceipt.paymentIds) ||
//           invoiceForTemplate.paymentIds ||
//           [];
//         return (
//           <ReceiptTemplate
//             invoice={invoiceForTemplate}
//             displayedInvoice={invoiceForTemplate}
//             receipt={displayedReceipt}
//             formatMoney={formatMoney}
//             formatDate={formatDate}
//             docRef={docRef}
//             payments={payments}
//           />
//         );
//       })()}

//       {isEditing && editable && (
//         <div style={{ padding: 16 }}>
//           <label>
//             Receipt Number
//             <input
//               value={editable.receiptNumber || ""}
//               onChange={(e) =>
//                 setEditable({ ...editable, receiptNumber: e.target.value })
//               }
//             />
//           </label>

//           <label>
//             Amount
//             <input
//               type="number"
//               value={editable.amount || 0}
//               onChange={(e) =>
//                 setEditable({ ...editable, amount: Number(e.target.value) })
//               }
//             />
//           </label>

//           <label>
//             Issued At
//             <input
//               type="date"
//               value={
//                 editable.issuedAt ? String(editable.issuedAt).split("T")[0] : ""
//               }
//               onChange={(e) =>
//                 setEditable({ ...editable, issuedAt: e.target.value })
//               }
//             />
//           </label>

//           <label>
//             Notes
//             <textarea
//               value={editable.notes || ""}
//               onChange={(e) =>
//                 setEditable({ ...editable, notes: e.target.value })
//               }
//             />
//           </label>
//         </div>
//       )}
//     </main>
//   );
// }
