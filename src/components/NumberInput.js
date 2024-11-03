export default function NumberInput({label, id, value, onChange, required, prefix = '', suffix = '' }) {
  return (
    <>
      <label htmlFor={id} className="text-slate-700 block">{label}</label>
      <div className="flex border border-slate-500 rounded overflow-hidden">
        {prefix.length > 0 && (
          <div className="px-200 py-150 bg-slate-100 text-slate-700 text-md font-bold">{prefix}</div>
        )}
        <input
          id={id}
          type="number"
          className="py-100 px-200 font-bold block w-full"
          value={value}
          onChange={onChange}
          required={required}
        />
        {suffix.length > 0 && (
          <div className="px-200 py-150 bg-slate-100 text-slate-700 text-md font-bold">{suffix}</div>
        )}
      </div>
    </>
  )
}