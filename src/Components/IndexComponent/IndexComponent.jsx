import React, { Component } from "react";
import TextField from "../TextField/TextField";
import AddItemButton from "../AddItemButton/AddItemButton";
import TableComponent from "../TableComponent/TableComponent";
import axios from "axios";

class IndexComponent extends Component {
  state = {
    text: "",
    items: []
  };

  componentDidMount = async () => {
    const items = await this.getItemBackend();
    this.setState({ items });
  };

  handleTextChange = e => {
    const text = e.target.value;
    this.setState({ text });
  };

  handleOnClick = async () => {
    const items = [...this.state.items];
    const data = await this.addItemBackend();
    items.push(data);
    this.setState({ items });
  };

  handleChangeDelete = id => {
    const itemsOriginal = [...this.state.items];
    const items = itemsOriginal.filter(x => x.id !== id);
    this.setState({ items });
  };

  addItemBackend = async () => {
    const { data } = await axios.post(
      "https://localhost:44321/api/Items/addItem",
      {
        ItemName: this.state.text
      }
    );
    return data;
  };

  getItemBackend = async () => {
    const { data } = await axios.get(
      "https://localhost:44321/api/Items/getItems",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    );

    return data;
  };

  deleteItemBackend = () => {};
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
            <TextField {...textFields} onChange={this.handleTextChange} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <AddItemButton
              {...textFields}
              onClick={this.handleOnClick}
              isEmpty={this.state.text}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <TableComponent
              items={this.state.items}
              handleOnDelete={this.handleChangeDelete}
            />
          </div>
        </div>
      </>
    );
  }
}

export default IndexComponent;
