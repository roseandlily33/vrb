export const printInvoice = ({ isEditing }) => {
  if (isEditing) {
    alert("Please save or cancel your changes before printing.");
    return;
  }

  window.print();
};
