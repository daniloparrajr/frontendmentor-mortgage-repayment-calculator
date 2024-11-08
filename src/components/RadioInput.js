import {useState} from "react";

export default function RadioInput({title, name, options}) {
  const [status, setStatus] = useState('default');
  const [validationMessage, setValidationMessage] = useState('');
  let inputValidationStyles = '';
  let labelValidationStyles = '';
  let containerValidationStyles = '';

  if (status === 'success') {
    inputValidationStyles = 'border-slate-900';
  } else if (status === 'error') {
    inputValidationStyles = 'border-red';
    labelValidationStyles = 'text-red';
    containerValidationStyles = 'border-red bg-red/15';
  } else {
    inputValidationStyles = 'border-slate-900';
    labelValidationStyles = 'text-slate-900';
    containerValidationStyles = 'border-slate-500';
  }

  return (
    <>
      <fieldset className="grid gap-150">
        <legend className="text-slate-700 block mb-150">
          {title}
        </legend>

        {options !== undefined && options.map(({id, label, value, onChange, checked, ...attributes}) => (
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
                onChange={(e) => {
                  onChange(e);
                  setValidationMessage(e.target.validationMessage);
                  setStatus(e.target.checkValidity() ? 'success' : 'error' );
                }}
                className="sr-only peer"
                {...attributes}
                onInvalid={(e)=> {
                  e.preventDefault();
                  setValidationMessage(e.target.validationMessage);
                  setStatus('error');
                }}
              />
              <span className={`${containerValidationStyles} transition-colors absolute inset-0 border peer-checked:border-lime peer-checked:bg-lime/10 rounded peer-checked:text-lime hover:border-lime`}></span>
              <div className={`${inputValidationStyles} w-[20px] h-[20px] border-2 text-transparent peer-checked:text-lime peer-checked:border-lime flex items-center justify-center rounded-full`}>
                <span className="w-[10px] h-[10px] rounded-full bg-current transition-colors"></span>
              </div>
              <span className={labelValidationStyles}>{label}</span>
            </label>
          </div>
        ))}
        {validationMessage.length > 0 && (
          <p className="text-red text-sm">{validationMessage}</p>
        )}
      </fieldset>
    </>
  )
}