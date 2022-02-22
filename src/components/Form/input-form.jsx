import React from "react";

const InputForm = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
        htmlFor=""
      ></label>
    ) : null}
  </div>
);

export default InputForm;
