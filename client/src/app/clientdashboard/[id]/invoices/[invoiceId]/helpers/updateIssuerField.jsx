export const updateIssuerField = (setEditable, field, value) => {
  setEditable((prev) => {
    if (!prev) return prev;

    return {
      ...prev,
      issuer: {
        ...(prev.issuer || {}),
        [field]: value,
      },
    };
  });
};