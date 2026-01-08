export const useFormatCurrency = () => {
  const formatCurrency = (amount, currencyCode) => {
    if (amount === undefined || amount === null) {
      return "—";
    }
    try {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currencyCode.toUpperCase(),
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      return formatter.format(amount);
    } catch (error) {
      console.error("Error formatting currency:", error);
      return `$${amount.toLocaleString()}`;
    }
  };

  return formatCurrency;
};
