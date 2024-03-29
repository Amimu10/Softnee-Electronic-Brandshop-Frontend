
import  { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdvertisementSlider = () => {
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    fetch("/advertisement.json")
      .then(res => res.json())
      .then(data => setDiscounts(data))
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 0.3,
    responsive: [
      {
        breakpoint: 425,  
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
     
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" p-4">
      <h2 className=" text-3xl font-bold text-center text-[] border-b pb-4">Our up coming products !!!</h2>
      <div className="mx-auto max-w-screen-lg">
        <Slider className="mx-auto" {...settings}>
          {discounts.map(discount => (
            <div key={discount.id} className="p-4">
              <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-[300px]"> 
                  <img
                    className="w-full h-full object-cover"
                    src={discount.img}
                    alt="Product Image"
                  />
                  <div className="absolute top-0 right-0 bg-red-500 text-white p-2 font-semibold rounded-tr-lg rounded-bl-lg">
                    $ {discount.originalPrice}
                  </div>
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-md text-center font-semibold mb-2">{discount.productName}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AdvertisementSlider;