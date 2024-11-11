// Function to format input as currency
export const formatCurrency = (input) => {
  // Remove any non-digit characters (e.g., commas)
  const numericValue = input.replace(/[^0-9]/g, '');

  // Add thousands separators
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export function calculateMonthlyMortgagePayment(mortgageAmount, annualInterestRate, mortgageTermYears) {
  const monthlyInterestRate = annualInterestRate / 100 / 12;
  const totalPayments = mortgageTermYears * 12;

  if (monthlyInterestRate === 0) { // Edge case for zero interest
    return mortgageAmount / totalPayments;
  }

  return mortgageAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
}

export function getNumberFromCurrency(currency) {
  return Number(currency.replace(/,/g, ''));
}