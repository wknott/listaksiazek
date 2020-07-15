import React from "react";

const FormField = ({ labelText, placeholder, type, name, value, checked, options, selectedOption }) => (
  <p>
    <label className={`form__label form__label--${type}`}>
      <span className="form__labelText">{labelText}:</span>
      {type === "select"
        ?
        <select className="form__select" name={name} value={selectedOption}>
          {options.map(option => (
            <option key={option}>{option}</option>
          ))}
        </select>
        :
        <input
          className={`form__input form__input--${type}`}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          defaultChecked={checked}
          autoFocus
        />}
    </label>
  </p>
)

export default FormField;