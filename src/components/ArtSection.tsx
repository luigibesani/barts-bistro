import React, { Component } from "react";

export default class ArtSection extends Component {
  render() {
    return (
      <div className="grid grid-rows-2 justify-center py-16">
        <div className="text-5xl text-green-900 grid justify-center">
          The art of authentic pizza
        </div>
        <div>
          No two pizzas at Bart's are the same, from their shape to their spots.
          Perfectly imperfect.{" "}
        </div>
      </div>
    );
  }
}
