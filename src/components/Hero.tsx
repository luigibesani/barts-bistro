import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <div className="max-w-[85rem] mx-auto pb-10 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-2 md:gap-4 xl:gap-10 items-center">
          <div className="grid justify-center self-start">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              Bart's Bistro
            </h1>
            <p className="mt-3 text-xl text-green-800 text-justify leading-relaxed">
              Welcome to Bart's Bistro, a delightful Italian bistro nestled in the heart of Laval near Centropolis. Indulge in our modern and authentic Italian cuisine, prepared with passion and served quickly without ever compromising the taste or quality. <br />
              <hr
                className="my-12 h-0.5 border-t-0 bg-green-800 opacity-50 dark:opacity-50 w-5/6 mx-auto" />
              Feast on our mouthwatering porchetta and chicken cutlet sandwiches, delectable Arancini, and fresh salads. Whether you're dining in or ordering catering for your special event, Bart's Bistro promises a culinary experience that is both satisfying and unforgettable.<br />
            </p>
            <p className="mt-3 text-lg text-green-800 pb-5 opacity-70 text-center">
              <hr
                className="my-12 h-0.5 border-t-0 bg-green-800 opacity-50 dark:opacity-50 w-4/6 mx-auto" />
              Bart's Bistro, where passion meets quality ingredients.
            </p>
          </div>

          <div className="relative">
            <img
              className="rounded-tl-full rounded-tr-full object-scale-down mx-auto"
              src="https://images.unsplash.com/photo-1668446377138-c763c16e99f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="Image Description"
              style={{ maxWidth: "70%" }}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
