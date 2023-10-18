import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Typography, Button } from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css'; 
import AOS from 'aos';

AOS.init();

const images = [
  "https://source.unsplash.com/2560x1440/?technology",
  "https://source.unsplash.com/2560x1440/?electronics",
  "https://source.unsplash.com/2560x1440/?gadgets",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider className="" {...settings}>
      {images.map((imageUrl, index) => (
        <div key={index} className="relative h-screen w-full">
          <img
            src={imageUrl}
            alt={`image ${index + 1}`}
            className="lg:h-full h-[950px] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="lg:mb-4 my-8 text-3xl md:text-4xl lg:text-5xl font-semibold"
              >
                Explore the Latest in Technology
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Discover cutting-edge electronics and technological innovations. Your one-stop destination for high-quality gadgets and devices.
              </Typography>
              <div className="flex mb-14 flex-col md:flex-row gap-2 md:gap-4 items-center justify-center">
                <Button size="lg" color="white" className="w-full md:w-auto">
                  Shop Now
                </Button>
                <Button size="lg" color="white" variant="text" className="w-full md:w-auto">
                  View Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
