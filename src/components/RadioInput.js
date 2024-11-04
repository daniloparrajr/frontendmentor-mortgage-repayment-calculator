export default function RadioInput({title, name, options}) {
  return (
    <fieldset className="grid gap-150">
      <legend className="text-slate-700 block mb-150">
        {title}
      </legend>

      {options !== undefined && options.map(({id, label, value, onChange, checked}) => (
        <div key={id}>
          <label
            htmlFor={id}
            className="cursor-pointer flex gap-200 items-center text-slate-900 text-md font-bold px-200 py-150 overflow-hidden transition-colors relative">
            <input
              type="radio"
              name={name}
              id={id}
              value={value}
              checked={checked}
              onChange={onChange}
              className="sr-only peer"
            />
            <span className="transition-colors absolute inset-0 border border-slate-500 peer-checked:border-lime peer-checked:bg-lime/10 rounded peer-checked:text-lime hover:border-lime"></span>
            <div className="w-[20px] h-[20px] border-2 border-slate-900 text-transparent peer-checked:text-lime peer-checked:border-lime flex items-center justify-center rounded-full">
              <span className="w-[10px] h-[10px] rounded-full bg-current transition-colors"></span>
            </div>
            <span className="text-slate-900">{label}</span>
          </label>
        </div>
      ))}
    </fieldset>
  )
}