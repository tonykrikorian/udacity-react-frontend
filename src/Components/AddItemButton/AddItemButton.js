import React from "react";

const AddItemButton = ({ text, onClick }) => {
  return (
    <button className="btn btn-success" onClick={async () => await onClick()}>
      {text}
    </button>
  );
};

export default AddItemButton;
