export const formatDate = (date) => {
  if (!date) return "";

  try {
    // If the input is a date-only string like "YYYY-MM-DD", treat it as
    // a local date (user-picked date) and construct a local Date.
    if (typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
      const [y, m, day] = date.split("-").map((p) => Number(p));
      const dLocal = new Date(y, m - 1, day);
      return dLocal.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }

    // If the server stored a UTC midnight value (e.g. ISO string ending
    // with Z or +00:00 and time 00:00:00), format using UTC so the date
    // reflects the stored day rather than shifting to local timezone.
    if (typeof date === "string" && /T00:00:00(?:\.000)?(?:Z|\+00:00)$/.test(date)) {
      const d = new Date(date);
      return d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      });
    }

    // Fallback: let the Date constructor handle it (shows local time)
    const d = new Date(date);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (err) {
    return String(date);
  }
};