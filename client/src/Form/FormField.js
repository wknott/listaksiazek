import React from "react";

const FormField = ({ labelText, placeholder, type }) => (
  <p>
    <label className={`form__label form__label--${type}`}>
      <span className="form__labelText">{labelText}:</span>
      <input className={`form__input form__input--${type}`} type={type} placeholder={placeholder} />
    </label>
  </p>
)

export default FormField;