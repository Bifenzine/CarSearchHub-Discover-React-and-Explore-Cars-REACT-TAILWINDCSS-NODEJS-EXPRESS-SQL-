import React from "react";
import Slider from "react-slick";
import './slickCaroussel.css'

function SlickCaroussel({ image, imagePath, name, marque, imagePath1, imagePath2, imagePath3 }) {

  const pics = [
    imagePath, imagePath1, imagePath2, imagePath3
  ];

  var settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 1000,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          autoplay: true,
          speed: 1000,
          slidesToScroll: 1

        }
      }
    ]
  };
  return (
    <div className="slider-container relative w-[70rem]  justify-center items-center">
      <Slider {...settings}>
        {pics.map((pic, index) => (

          <div className="flex justify-center items-center border-2  border-indigo-500 w-full h-[30rem]">
            <img
              key={index}
              src={pic}
              alt={` -- ${pic}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

      </Slider>
    </div>
  );
}

export default SlickCaroussel;
