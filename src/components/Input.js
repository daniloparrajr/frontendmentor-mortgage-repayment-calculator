"use client";

import {useState} from "react";

export default function Input({label, attributes = {}, prefix = '', suffix = '' }) {
  const [status, setStatus] = useState(false);
  const {id, ...rest} = attributes;
  let stateStyles = '';
  let affixStyles = '';

  if (status) {
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
          <span className={`px-200 py-150 text-md font-bold transition-colors ${affixStyles}`}>{prefix}</span>
        )}
        <input
          {...rest}
          className="py-100 px-200 font-bold block w-full focus:outline-none"
          onFocus={()=> setStatus(true)}
          onBlur={() => setStatus(false)}
        />
        {suffix.length > 0 && (
          <span className={`px-200 py-150 text-md font-bold transition-colors ${affixStyles}`}>{suffix}</span>
        )}
      </div>
    </>
  )
}