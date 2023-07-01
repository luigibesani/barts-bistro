import React, { Component } from "react";

export default class DoughSection extends Component {
  render() {
    return (
      <div className="grid grid-cols-7">
        <div className="grid grid-cols-4 bg-stone-200 col-span-3 ">
          <div></div>
          <div className="col-span-2 ">
            <div className="text-3xl text-green-800 grid justify-center self-center py-10">
              THE DOUGH
            </div>
            <div className="grid justify-center self-center py-5 text-center ">
              Our dough is made from four simple ingredients and fermented over
              24h, always. It’s how we recreate that dappled look time and time
              again.{" "}
            </div>
            <div className="grid justify-center self-center py-5 text-center ">
              This labor of love creates a chewy and airy texture; our mark of a
              well-made focaccia. This fermented crust is lighter and healthier
              than your average bread, leaving you satisfied without feeling
              stuffed.
            </div>
          </div>
          <div></div>
        </div>
        <div
          className="col-span-4 bg-repeat"
          style={{
            backgroundImage: `url(
              "https://www.toptal.com/designers/subtlepatterns/uploads/more-leaves-on-green.png"
            )`,
          }}
        ></div>
      </div>
    );
  }
}
