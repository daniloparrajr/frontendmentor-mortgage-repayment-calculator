import MortgageCalculator from "@/components/MortgageCalculator";

export default function Home() {
  return (
    <main className="flex justify-center sm:p-500 xl:h-screen xl:items-center">
      <h1 className="sr-only">Frontend Mentor | Mortgage repayment calculator</h1>
      <MortgageCalculator />
    </main>
  );
}
