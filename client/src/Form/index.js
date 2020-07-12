import React from "react";
import "./styles.css";

const Form = ({ legendText, children, buttonText }) => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">{legendText}</legend>
      {children}
      {buttonText && <button className="form__button">{buttonText}</button>}
    </fieldset>
  </form >
)

export default Form;