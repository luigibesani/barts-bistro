import React, { Component } from "react";
import arch from "../images/arch_picture_cleanup.jpg";
import focaccia from "../images/focaccia_n_honey.jpg";
import salad from "../images/salad.jpg";

export default class Hero extends Component {
  render() {
    return (
      <div className="max-w-[85rem] mx-auto pb-10 px-4 pt-10 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-2 md:gap-4 xl:gap-10 ">
          <div className="grid justify-center self-start">
            <h1 className="block text-3xl font-bold pb-8 text-green-800 sm:text-4xl lg:text-6xl lg:leading-tight">
              Bart's Bistro
            </h1>
            <div className="md:hidden">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="fixed opacity-20 z-10 w-96 translate-x-1/4 translate-y-2/6 md:translate-x-full md:-translate-y-1/8 md:w-4/12 "
                style={{ minWidth: "450px", maxWidth: "1000px" }}
              >
                <path
                  fill="#3C0008"
                  d="M51.6,-64.6C63.1,-51.9,66,-32,70.2,-11.9C74.3,8.2,79.6,28.6,71.3,39.3C62.9,50,40.9,50.9,21.5,57.3C2,63.6,-14.8,75.4,-26,71.4C-37.2,67.4,-42.7,47.6,-50.7,30.7C-58.8,13.8,-69.4,-0.2,-63,-6.7C-56.5,-13.2,-33,-12.2,-19.6,-24.6C-6.3,-37.1,-3.1,-62.9,8.5,-73C20.1,-83.1,40.1,-77.4,51.6,-64.6Z"
                  transform="translate(100 100)"
                />
              </svg>
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="fixed  opacity-20 z-10 w-96 -translate-x-1/2 -translate-y-1/2 md:-translate-x-3/4 md:w-4/12 md:-translate-y-1/4"
                style={{ minWidth: "600px", maxWidth: "1000px" }}
              >
                <path
                  fill="#166534"
                  d="M34.8,-46.1C48.3,-45.5,64.6,-41.2,64.4,-32.2C64.2,-23.2,47.5,-9.4,43.7,5.2C39.9,19.7,49,35,45.3,39.3C41.6,43.5,25.2,36.7,12.9,37.3C0.5,38,-7.7,46.2,-17.7,48.6C-27.8,51.1,-39.6,47.8,-43.6,39.7C-47.6,31.6,-43.8,18.7,-46.9,5.9C-50.1,-6.9,-60.2,-19.5,-55.9,-24.1C-51.5,-28.7,-32.8,-25.4,-21.1,-26.8C-9.4,-28.2,-4.7,-34.4,3,-39.1C10.7,-43.7,21.3,-46.8,34.8,-46.1Z"
                  transform="translate(100 100)"
                />
              </svg>
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="fixed  opacity-20 z-10 w-96 -translate-x-1/3 translate-y-1/3 md:-translate-x-4/6 md:w-4/12 md:translate-y-1/2"
                style={{ minWidth: "600px", maxWidth: "1000px" }}
              >
                <path
                  fill="#BD8730"
                  d="M42.3,-8.2C51.7,15.2,54,46.4,41.9,54.5C29.7,62.5,3.1,47.5,-17.6,30.9C-38.2,14.3,-52.9,-3.8,-48.9,-19.6C-45,-35.5,-22.5,-49,-3,-48C16.4,-47.1,32.9,-31.5,42.3,-8.2Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <p className="mt-3 text-2xl text-justify leading-relaxed ">
              Welcome to Bart's Bistro, a delightful Italian bistro nestled in
              the heart of Laval near Centropolis. Indulge in our modern and
              authentic Italian cuisine, prepared with passion and served
              quickly without ever compromising the taste or quality. <br />
              <div className="relative py-20 z-20">
                <img
                  className=" object-scale-down mx-auto rounded-full"
                  src={focaccia}
                  alt="Image Description"
                  style={{ maxWidth: "75%" }}
                ></img>
              </div>
              Feast on our mouthwatering porchetta and chicken cutlet
              sandwiches, delectable Arancini, and fresh salads. Whether you're
              dining in or ordering catering for your special event, Bart's
              Bistro promises a culinary experience that is both satisfying and
              unforgettable.
              <br />
            </p>
            <p className="mt-3 text-green-800 pb-5 opacity-70 text-center text-2xl">
              <hr className="my-12 h-0.5 border-t-0 bg-green-800 opacity-50 dark:opacity-50 w-4/6 mx-auto" />
              Bart's Bistro, where passion meets quality ingredients.
            </p>
          </div>
          <div className=" grid align-start gap-y-12 z-20">
            <img
              className="rounded-tl-full rounded-tr-full object-scale-down mx-auto"
              src={arch}
              alt="Image Description"
              style={{ maxWidth: "70%" }}
            ></img>
            <div>
              <img
                className="rounded-tl-3xl rounded-br-3xl object-scale-down mx-auto"
                src={salad}
                alt="Image Description"
                style={{ maxWidth: "100%" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
