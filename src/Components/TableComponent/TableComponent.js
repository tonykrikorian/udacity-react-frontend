import React from "react";
import PropType from "prop-types";

const TableComponent = ({ items, handleOnDelete }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name Item</th>
          <th scope="col">Creation Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map(x => (
          <tr key={x.id}>
            <td>{x.id}</td>
            <td>{x.itemName}</td>
            <td>{x.fechaCreacion}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleOnDelete(x.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TableComponent.propTypes = {
  items: PropType.array.isRequired,
  handleOnDelete: PropType.func.isRequired
};
export default TableComponent;
