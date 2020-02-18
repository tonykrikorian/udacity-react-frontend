import React from "react";

const TextField = ({ smallText, label, onChange }) => {
  return (
    <div class="form-group">
      <label for="exampleInputEmail1">{label}</label>
      <input type="text" class="form-control" onChange={e => onChange(e)} />
      <small id="emailHelp" class="form-text text-muted">
        {smallText}
      </small>
    </div>
  );
};

export default TextField;
