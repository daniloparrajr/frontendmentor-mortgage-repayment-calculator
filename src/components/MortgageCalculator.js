export default function MortgageCalculator(props) {
  return (
    <section className="bg-white rounded-3xl w-[1008px] grid grid-cols-2 overflow-hidden">
      <div className="p-500">
        <div className="mb-500">
          <h2 className="font-bold text-lg text-slate-900">Mortgage Calculator</h2>
          <button>Clear All</button>
        </div>

        <form>
          <label htmlFor="mortgageAmount">Mortgage Amount</label>
          <input id="mortgageAmount" type="number"/>

          <label htmlFor="mortgageTerm">Mortgage Term</label>
          <input id="mortgageTerm" type="number"/>

          <label htmlFor="interestRate">Interest Rate</label>
          <input id="interestRate" type="number"/>


          <fieldset>
            <legend>
              Mortgage Type
            </legend>

            <input
              type="radio"
              name="repayment"
              id="repayment"
              value="yes"
            />
            <label htmlFor="repayment">
              Repayment
            </label>

            <input
              type="radio"
              name="interest-only"
              id="interestOnly"
              value="yes"
            />
            <label htmlFor="interestOnly">
              Interest Only
            </label>
          </fieldset>


          <button type="submit">Calculate Repayments</button>
        </form>
      </div>
      <div className="p-500 bg-slate-900 text-slate-300 rounded-bl-[80px]">
        <div className="text-center">
          <h3 className="text-lg text-white font-bold mb-200">Results shown here</h3>
          <p>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
        </div>

        <h3 className="text-lg text-white font-bold mb-200">Your results</h3>

        <p className="mb-500">Your results are shown below based on the information you provided. To adjust the results, edit the form and
          click “calculate repayments” again.</p>

        <div className="bg-black/25 p-400 rounded-lg border-t-4 border-lime">
          <p>Your monthly repayments</p>
          <p className="text-lime text-xl font-bold">£1,797.74</p>
          <div className="my-400 border-t border-slate-300/25"></div>
          <p className="mb-100">Total you&#39;ll repay over the term</p>
          <p className="text-white font-bold text-lg">£539,322.94</p>
        </div>
      </div>
    </section>
  );
}