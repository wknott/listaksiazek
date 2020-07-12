import React from "react";

const FormField = ({ labelText, placeholder, type, name, value, checked }) => (
  <p>
    <label className={`form__label form__label--${type}`}>
      <span className="form__labelText">{labelText}:</span>
      <input
        className={`form__input form__input--${type}`}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        defaultChecked={checked}
      />
    </label>
  </p>
)

export default FormField;