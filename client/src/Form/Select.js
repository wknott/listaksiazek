import React from "react";

const Select = ({ labelText, years }) => (
  <p>
    <label className="form__label">
      <span className="form__labelText">{labelText}:</span>
      <select className="form__select" name="yearSelect">
        {years.map(year => (
          <option key={year}>{year}</option>
        ))}
      </select>
    </label >
  </p >
)

export default Select;
