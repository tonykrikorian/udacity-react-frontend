import React, { Component } from "react";
import TextField from "../TextField/TextField";

class IndexComponent extends Component {
  state = {};
  render() {
    const textFields = {
      smallText: "Debe escribir el item que desea ingresar",
      label: "Ingresar Items"
    };
    return (
      <div className="row">
        <div className="col-md-6">
          <TextField {...textFields} />
        </div>
      </div>
    );
  }
}

export default IndexComponent;
