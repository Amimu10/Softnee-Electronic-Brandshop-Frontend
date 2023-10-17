import { useState, useEffect } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";


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

  return (
    <Carousel className="rounded-xl" index={currentIndex}>
      {images.map((imageUrl, index) => (
        <div key={index} className="relative h-screen w-full">
          <img
            src={imageUrl}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl font-semibold"
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
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  Shop Now
                </Button>
                <Button size="lg" color="white" variant="text">
                  View Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
