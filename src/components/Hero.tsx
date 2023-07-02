import React, { Component } from "react";
import arch from "../images/arch_picture_cleanup.jpg"
import focaccia from "../images/focaccia_n_honey.jpg"
import salad from "../images/salad.jpg"

export default class Hero extends Component {
  render() {
    return (
      <div className="max-w-[85rem] mx-auto pb-10 px-4 pt-10 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-2 md:gap-4 xl:gap-10 ">
          <div className="grid justify-center self-start">
            <h1 className="block text-3xl font-bold pb-8 text-green-800 sm:text-4xl lg:text-6xl lg:leading-tight">
              Bart's Bistro
            </h1>
            <div></div>
            <p className="mt-3 text-2xl text-justify leading-relaxed ">
              Welcome to Bart's Bistro, a delightful Italian bistro nestled in the heart of Laval near Centropolis. Indulge in our modern and authentic Italian cuisine, prepared with passion and served quickly without ever compromising the taste or quality. <br />
              <div className="relative py-20">
                <img
                  className=" object-scale-down mx-auto rounded-full"
                  src={focaccia}
                  alt="Image Description"
                  style={{ maxWidth: "75%" }}
                ></img>
              </div>
              Feast on our mouthwatering porchetta and chicken cutlet sandwiches, delectable Arancini, and fresh salads. Whether you're dining in or ordering catering for your special event, Bart's Bistro promises a culinary experience that is both satisfying and unforgettable.<br />
            </p>
            <p className="mt-3 text-green-800 pb-5 opacity-70 text-center text-2xl">
              <hr
                className="my-12 h-0.5 border-t-0 bg-green-800 opacity-50 dark:opacity-50 w-4/6 mx-auto" />
              Bart's Bistro, where passion meets quality ingredients.
            </p>
          </div>
          <div className=" grid align-start gap-y-12">
            <img
              className="rounded-tl-full rounded-tr-full object-scale-down mx-auto"
              src={arch}
              alt="Image Description"
              style={{ maxWidth: "70%" }}
            ></img>
            {/* <div className="my-50"><br /><br /><br /><br /><br /></div> */}
            <div>
              <img
                className="rounded-tl-3xl rounded-br-3xl object-scale-down mx-auto"
                src={salad}
                alt="Image Description"
                style={{ maxWidth: "100%" }}
              ></img>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  }
}
