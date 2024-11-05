"use client";

import {useState} from "react";

export default function Input({label, id, name, type, value, onChange, required, pattern, prefix = '', suffix = '' }) {
  const [isFocus, setIsFocus] = useState(false);

  let stateStyles = '';
  let affixStyles = '';

  if (isFocus) {
    stateStyles = 'border-lime';
    affixStyles = 'bg-lime/15';
  } else {
    stateStyles = 'border-slate-500';
    affixStyles = 'bg-slate-100 text-slate-700';
  }

  return (
    <>
      <label htmlFor={id} className="text-slate-700 block">{label}</label>
      <div className={`flex border rounded overflow-hidden transition-colors ${stateStyles}`}>
        {prefix.length > 0 && (
          <div className={`px-200 py-150 text-md font-bold transition-colors ${affixStyles}`}>{prefix}</div>
        )}
        <input
          id={id}
          type={type}
          name={name}
          className="py-100 px-200 font-bold block w-full focus:outline-none"
          value={value}
          onChange={onChange}
          required={required}
          pattern={pattern}
          onFocus={()=> setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        {suffix.length > 0 && (
          <div className={`px-200 py-150 text-md font-bold transition-colors ${affixStyles}`}>{suffix}</div>
        )}
      </div>
    </>
  )
}