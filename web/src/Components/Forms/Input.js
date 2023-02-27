import React from "react";

const Input = ({ label, type, name, value, onChange, error, onBlur}) =>{
  return (
    <div className="flex flex-col text-gray-400 py-2 group">
      <label className="group-focus-within:text-summer-500 group-focus-within:font-semibold" htmlFor={name}>
          {label}
      </label>
      <input
        className="rounded-lg bg-white mt-2 p-2 text-gray-800 border-2 focus:border-summer-500 focus:outline-none"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}

export default Input;
