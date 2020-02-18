import React, { Component } from "react";
import TextField from "../TextField/TextField";
import AddItemButton from "../AddItemButton/AddItemButton";

class IndexComponent extends Component {
  state = {};
  render() {
    const textFields = {
      smallText: "Debe escribir el item que desea ingresar",
      label: "Ingresar Items",
      text: "Grabar Item"
    };
    return (
      <>
        <div className="row">
          <div className="col-md-6">
            <TextField {...textFields} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <AddItemButton {...textFields} />
          </div>
        </div>
      </>
    );
  }
}

export default IndexComponent;
