import React from "react";

const FormField = ({ labelText, placeholder, type }) => (
  <p>
    <label className="form__label">
      <span className="form__labelText">{labelText}</span>
      <input className="form__input" type={type} placeholder={placeholder} />
    </label>
  </p>
)

export default FormField;