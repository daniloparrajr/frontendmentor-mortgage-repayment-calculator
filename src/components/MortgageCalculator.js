"use client"

import IllustrationEmpty from "/public/images/illustration-empty.svg";

import {useState} from "react";
import MortgageCalculatorForm from "@/components/MortgageCalculatorForm";
import {calculateMonthlyMortgagePayment} from "@/utils";


export default function MortgageCalculator(props) {
  const [monthlyRepayments, setMonthlyRepayments] = useState();
  const [formKey, setFormKey] = useState(false);

  function handleResetForm() {
    setFormKey(!formKey);
    setMonthlyRepayments(undefined);
  }

  function handleSubmit(e, formRef, {mortgageAmount, mortgageTerm, interestRate}) {
    e.preventDefault();

    if (formRef.current.checkValidity()) {
      const total = calculateMonthlyMortgagePayment(mortgageAmount, interestRate, mortgageTerm);
      console.log(total);
      setMonthlyRepayments(total);
    } else {
      formRef.current.reportValidity();
    }
  }

  return (
    <section className="bg-white sm:rounded-3xl w-[1008px] lg:grid lg:grid-cols-2 overflow-hidden drop-shadow-3xl">
      <div className="px-300 py-400 sm:p-500">
        <div className="mb-500 flex justify-between items-center">
          <h2 className="font-bold text-lg">Mortgage Calculator</h2>
          <button onClick={handleResetForm} className="text-slate-700 underline underline-offset-4">Clear All</button>
        </div>

        <MortgageCalculatorForm key={formKey} handleSubmit={handleSubmit} />
      </div>
      <div className="p-500 bg-slate-900 text-slate-300 xl:rounded-bl-[80px]">
        {monthlyRepayments === undefined && (
          <div className="flex flex-col items-center justify-center gap-200 text-center h-full">
            <IllustrationEmpty/>
            <h3 className="text-lg text-white font-bold">Results shown here</h3>
            <p>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
          </div>
        )}

        {monthlyRepayments !== undefined && (
          <>
            <h3 className="text-lg text-white font-bold mb-200">Your results</h3>

            <p className="mb-500">Your results are shown below based on the information you provided. To adjust the
              results, edit the form and
              click “calculate repayments” again.</p>

            <div className="bg-black/25 p-400 rounded-lg border-t-4 border-lime">
              <p>Your monthly repayments</p>
              <p className="text-lime text-xl font-bold">£1,797.74</p>
              <div className="my-400 border-t border-slate-300/25"></div>
              <p className="mb-100">Total you&#39;ll repay over the term</p>
              <p className="text-white font-bold text-lg">£539,322.94</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}