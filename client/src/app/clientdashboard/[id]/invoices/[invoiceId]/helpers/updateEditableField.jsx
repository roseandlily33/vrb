export const updateEditableField = (setEditable, field, value) => {
  setEditable((prev) => {
    if (!prev) return prev;

    return {
      ...prev,
      [field]: value,
    };
  });
};
