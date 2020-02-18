import React from "react";

const TextField = ({ smallText, label }) => {
  return (
    <div class="form-group">
      <label for="exampleInputEmail1">{label}</label>
      <input type="text" class="form-control" />
      <small id="emailHelp" class="form-text text-muted">
        {smallText}
      </small>
    </div>
  );
};

export default TextField;
