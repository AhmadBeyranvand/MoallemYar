"use client";
import React, { Component } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import components
import Exambox from "./Exambox";
export default class Slick extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 2,
      rtl: true,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow:7,
            slidesToScroll: 5,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1366,
          settings: {
            slidesToShow:5,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <div className="block ">
        <Slider {...settings} className="cursor-pointer">
          <div className="mb-1">
            <Exambox
              imageSrc="/assets/img/image1.png"
              title="عنوان امتحان 1"
              time="10:20"
              date="1400/10/23"
            />
          </div>
          <div className="mb-1">
            <Exambox
              imageSrc="/assets/img/image1.png"
              title="عنوان امتحان 2"
              time="10:00"
              date="1400/10/20"
            />
          </div>
          <div className="mb-1">
            <Exambox
              imageSrc="/assets/img/image1.png"
              title="عنوان امتحان 3"
              time="11:20"
              date="1400/10/28"
            />
          </div>
          <div className="mb-1">
            <Exambox
              imageSrc="/assets/img/image1.png"
              title="عنوان امتحان 4"
              time="12:20"
              date="1400/10/24"
            />
          </div>
          <div className="mb-1">
            <Exambox
              imageSrc="/assets/img/image1.png"
              title="عنوان امتحان 5"
              time="18:20"
              date="1400/10/21"
            />
          </div>
          <div className="mb-1">
            <Exambox
              imageSrc="/assets/img/image1.png"
              title="عنوان امتحان 6"
              time="10:00"
              date="1400/10/25"
            />
          </div>
          <div className="mb-1">
            <Exambox
              imageSrc="/assets/img/image1.png"
              title="عنوان امتحان 7"
              time="13:00"
              date="1400/10/18"
            />
          </div>
          <div className="mb-1">
            <Exambox
              imageSrc="/assets/img/image1.png"
              title="عنوان امتحان 8"
              time="10:45"
              date="1400/10/19"
            />
          </div>
          <div className="mb-1">
            <Exambox
              imageSrc="/assets/img/image1.png"
              title="عنوان امتحان 9"
              time="12:20"
              date="1400/10/19"
            />
          </div>
          <div className="mb-1">
            <Exambox
              imageSrc="/assets/img/image1.png"
              title="عنوان امتحان 10"
              time="10:20"
              date="1400/10/23"
            />
          </div>
          <div className="mb-1">
            <Exambox
              imageSrc="/assets/img/image1.png"
              title="عنوان امتحان 11"
              time="10:20"
              date="1400/10/29"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
