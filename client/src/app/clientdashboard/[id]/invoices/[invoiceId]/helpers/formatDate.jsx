export const formatDate = (date) => {
  if (!date) return "";

  try {
    // If we get a date-only string like "YYYY-MM-DD", append a local time
    // so the Date constructor interprets it in local time instead of UTC.
    const dateString =
      typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)
        ? `${date}T00:00:00`
        : date;

    const d = new Date(dateString);

    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (err) {
    return String(date);
  }
};