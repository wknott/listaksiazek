export function compareObjects(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}

export function formatDateStringShort(dateString) {
  const dateOfRead = new Date(dateString);
  return dateOfRead.toLocaleDateString("pl-pl", {
    //weekday: 'short',
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
