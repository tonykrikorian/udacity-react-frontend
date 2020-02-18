import React from "react";

const AddItemButton = ({ text, onClick, isEmpty }) => {
  return (
    <button
      className="btn btn-success"
      onClick={async () => await onClick()}
      disabled={!isEmpty.length}
    >
      {text}
    </button>
  );
};

export default AddItemButton;
