import React, { Component } from "react";
import menu from "../images/bistromenu.png";

export default class FoodMenu extends Component {
  render() {
    return (
      <div>
        {" "}
        <img
          className=" object-scale-down mx-auto"
          src={menu}
          alt="Image Description"
          style={{ maxWidth: "100%" }}
        ></img>
      </div>
    );
  }
}
