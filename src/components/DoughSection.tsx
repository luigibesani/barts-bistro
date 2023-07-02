import React, { Component } from "react";

export default class DoughSection extends Component {
  render() {
    return (
      <div className="grid grid-cols-7">
        <div className="grid grid-cols-4 bg-stone-200 col-span-7 xs:col-span-7 sm:col-span-7 md:col-span-3">
          <div></div>
          <div className="col-span-2 ">
            <div className="text-5xl text-green-800 font-semibold grid justify-center text-center self-center pt-10">
              The dough
              <hr
                className="my-12 h-0.5 border-t-0 bg-green-800 opacity-50 dark:opacity-50 w-5/6 mx-auto" />
            </div>
            <div className="grid justify-center self-center text-center ">
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
            <div><br /></div>
          </div>
          <div></div>
        </div>
        <div
          className="col-span-4 bg-repeat hidden sm:hidden md:block"
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
