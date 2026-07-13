export const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};