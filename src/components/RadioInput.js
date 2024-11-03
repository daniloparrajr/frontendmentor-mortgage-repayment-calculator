export default function RadioInput({title, name, options}) {
  return (
    <fieldset className="grid gap-150">
      <legend className="text-slate-700 block mb-150">
        {title}
      </legend>

      {options !== undefined && options.map(({id, label, value, onChange, checked}) => (
        <div key={id} className="flex gap-200 px-200 py-150 border border-slate-500 rounded overflow-hidden">
          <input
            type="radio"
            name={name}
            id={id}
            value={value}
            checked={checked}
            onChange={onChange}
          />
          <label htmlFor={id} className="text-slate-900 text-md font-bold">
            {label}
          </label>
        </div>
      ))}
    </fieldset>
  )
}