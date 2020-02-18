import React from "react";

const TextField = ({ smallText, label, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">{label}</label>
      <input type="text" className="form-control" onChange={e => onChange(e)} />
      <small id="emailHelp" className="form-text text-muted">
        {smallText}
      </small>
    </div>
  );
};

export default TextField;
