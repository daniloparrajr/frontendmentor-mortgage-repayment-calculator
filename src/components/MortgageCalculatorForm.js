import {formatCurrency, getNumberFromCurrency} from "@/utils";
import IconCalculator from "../../public/images/icon-calculator.svg";

import Input from "@/components/Input";
import NumberInput from "@/components/NumberInput";
import RadioInput from "@/components/RadioInput";

import {useId, useRef, useState} from "react";

export default function MortgageCalculatorForm({handleSubmit}) {
  const formRef = useRef(null);
  const [mortgageAmount, setMortgageAmount] = useState('');
  const [mortgageTerm, setMortgageTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [mortgageType, setMortgageType] = useState();

  const id = useId();

  function handleFormSubmit(e) {
    handleSubmit(e, formRef, {
      mortgageAmount: getNumberFromCurrency(mortgageAmount), mortgageTerm, interestRate, mortgageType
    });
  }

  return (
    <form ref={formRef} noValidate={true} onSubmit={handleFormSubmit}>
      <div className="flex flex-col gap-150 mb-300">
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
      <div className="grid grid-cols-2 gap-300 mb-300">
        <div className="flex flex-col gap-150">
          <NumberInput
            label="Mortgage Term"
            suffix="years"
            attributes={{
              name: "mortgage-term",
              id: `${id}-mortgageTerm`,
              value: mortgageTerm,
              required: true,
              min: 5,
              max: 30,
              onChange: (e) => setMortgageTerm(e.target.value)
            }}
          />
        </div>

        <div className="flex flex-col gap-150">
          <NumberInput
            label="Interest Rate"
            suffix="%"
            attributes={{
              id: `${id}-interestRate`,
              name: "interest-rate",
              value: interestRate,
              required: true,
              min: 5,
              max: 10,
              onChange: (e) => setInterestRate(e.target.value),
            }}
          />
        </div>
      </div>

      <RadioInput
        title="Mortgage Type"
        name="mortgage-type"
        options={[
          {
            id: `${id}-repayment`,
            label: "Repayment",
            value: "repayment",
            checked: mortgageType === "repayment",
            onChange: e => setMortgageType(e.target.value),
            required: true,
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

      <button className="mt-500 rounded-full bg-lime py-200 px-400 font-bold w-fit flex gap-150" type="submit">
        <IconCalculator/>
        <span>Calculate Repayments</span>
      </button>
    </form>
  )
}