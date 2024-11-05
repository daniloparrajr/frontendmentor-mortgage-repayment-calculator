"use client"

import IllustrationEmpty from "/public/images/illustration-empty.svg";
import IconCalculator from "/public/images/icon-calculator.svg";

import NumberInput from "@/components/NumberInput";
import RadioInput from "@/components/RadioInput";
import Input from "@/components/Input";

import {useId, useState} from "react";
import {formatCurrency} from "@/utils";

export default function MortgageCalculator(props) {
  const [mortgageAmount, setMortgageAmount] = useState('');
  const [mortgageTerm, setMortgageTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [mortgageType, setMortgageType] = useState();
  const [monthlyRepayments, setMonthlyRepayments] = useState();

  const id = useId();

  function handleResetForm() {
    setMortgageAmount('');
    setMortgageTerm('');
    setInterestRate('');
    setMortgageType(undefined);
    setMonthlyRepayments(undefined);
  }

  return (
    <section className="bg-white sm:rounded-3xl w-[1008px] lg:grid lg:grid-cols-2 overflow-hidden drop-shadow-3xl">
      <div className="px-300 py-400 sm:p-500">
        <div className="mb-500 flex justify-between items-center">
          <h2 className="font-bold text-lg">Mortgage Calculator</h2>
          <button onClick={handleResetForm} className="text-slate-700 underline underline-offset-4">Clear All</button>
        </div>

        <form className="grid gap-300">
          <div className="grid gap-150">
            <Input
              label="Mortgage Amount"
              prefix="£"
              attributes={{
                id: `${id}-mortgageAmount`,
                value: mortgageAmount,
                name: "mortgage-amount",
                type: "text",
                pattern: "^[0-9]{1,3}(,[0-9]{3})*$",
                required: true,
                onChange: (e) => setMortgageAmount(formatCurrency(e.target.value))
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-300">
            <div className="grid gap-150">
              <NumberInput
                label="Mortgage Term"
                name="mortgage-term"
                id={`${id}-mortgageTerm`}
                value={mortgageTerm}
                onChange={(e) => setMortgageTerm(e.target.value)}
                suffix="years"
              />
            </div>

            <div className="grid gap-150">
              <NumberInput
                label="Interest Rate"
                id={`${id}-interestRate`}
                name="interest-rate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                suffix="%"
                required={true}
              />
            </div>
          </div>

          <RadioInput
            title="Mortgage Type"
            name="mortgage-type"
            options={[
              {
                id:`${id}-repayment`,
                label: "Repayment",
                value: "repayment",
                checked: mortgageType === "repayment",
                onChange: e => setMortgageType(e.target.value),
              },
              {
                id: `${id}-interestOnly`,
                label: "Interest Only",
                value: "interest-only",
                checked: mortgageType === "interest-only",
                onChange: e => setMortgageType(e.target.value),
              }
            ]}
          />

          <button className="rounded-full bg-lime py-200 px-400 font-bold w-fit flex gap-150" type="submit">
            <IconCalculator />
            <span>Calculate Repayments</span>
          </button>
        </form>
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