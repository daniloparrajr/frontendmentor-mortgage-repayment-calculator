// Function to format input as currency
export const formatCurrency = (input) => {
  // Remove any non-digit characters (e.g., commas)
  const numericValue = input.replace(/[^0-9]/g, '');

  // Add thousands separators
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};