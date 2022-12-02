export const unixDateToString = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
