import React, { useContext } from 'react'
import Slider from "react-slick";
import { CarsContext } from "../carsContext/CarsContext";

const CardsCaroussel = ({ img, img1, img2, img3 }) => {
    const { cars, setCars } = useContext(CarsContext)
    // console.log(cars)

    const pics = [
        img,
        img1,
        img2,
        img3
    ]

    //     const pics = [
    //         cars.Car_img,
    //         cars.img1,
    //         cars.img2,
    //         cars.img3
    //     ];

    // console.log(pics)


    var settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        pauseOnHover: true,
        // vertical: true,
        // lazyLoad: true,

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
        <>
            <div className="slider-container w-full h-[8.5rem] relative justify-center items-center">
                <Slider {...settings}>
                    {pics.map((pic, index) => (
                        <div className="flex justify-center items-center  w-full h-[8.5rem]" key={index} >

                            <img

                                src={pic}
                                alt='cars'
                                className="w-full h-[8.5rem]  object-cover"
                            />
                        </div>
                    ))}

                </Slider>
            </div>
        </>
    )
}

export default CardsCaroussel

