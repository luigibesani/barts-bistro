import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <div className="max-w-[85rem] mx-auto pb-10 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-2 md:gap-4 xl:gap-10 items-center">
          <div className="grid justify-center">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              Bart's Bistro
            </h1>
            <p className="mt-3 text-xl text-green-800">
              Coffee, lunch, catering, and take-out!
            </p>
            <p className="mt-3 text-lg text-green-800 opacity-70 ">
              Where passion meets quality ingredients.
            </p>
          </div>

          <div className="relative">
            <img
              className="rounded-tl-full rounded-tr-full object-scale-down"
              src="https://images.unsplash.com/photo-1668446377138-c763c16e99f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="Image Description"
              style={{ maxWidth: "70%" }}
            ></img>
            <div className="mx-auto absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
          </div>
        </div>
      </div>
    );
  }
}
