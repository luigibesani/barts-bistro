import React, { Component } from "react";

export default class ArtSection extends Component {
  render() {
    return (
      <div className="grid grid-rows-2 justify-center py-16 text-center">
        <div className="text-5xl text-green-900 grid justify-center ">
          The art of authentic pizza
        </div>
        <div className="text-lg">
          <hr
            className="my-6 h-0.5 border-t-0 bg-green-800 opacity-50 dark:opacity-50 w-5/6 mx-auto" />
          No two pizzas at Bart's are the same, from their shape to their spots.
          Perfectly imperfect.{" "}
        </div>
      </div>
    );
  }
}
