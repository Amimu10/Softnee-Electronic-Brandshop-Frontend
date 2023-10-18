import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import 'aos/dist/aos.css'; // Import the styles
import AOS from 'aos';


AOS.init();

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
      name: "Sophia Turner",
      role: "Tech Enthusiast",
      image: "https://source.unsplash.com/600x400/?woman,tech",
      quote:
        "Shopping at Softonne has been a fantastic experience. The range of tech products, from the latest gadgets to quality accessories, is impressive. I appreciate the user-friendly website and excellent customer service!",
      stars: 4.8,
    },
    {
      name: "Alex Martinez",
      role: "Satisfied Customer",
      image: "https://source.unsplash.com/600x400/?man,tech",
      quote:
        "Softonne has become my go-to destination for all things tech. The seamless navigation, detailed product information, and timely deliveries make it a top choice. Highly recommended for tech enthusiasts!",
      stars: 4.9,
    },
    {
      name: "Emily White",
      role: "Happy Shopper",
      image: "https://source.unsplash.com/600x400/?woman,laptop",
      quote:
        "I recently purchased a laptop from Softonne, and I couldn't be happier. The product quality, competitive pricing, and swift delivery exceeded my expectations. Softonne truly delivers on its promise!",
      stars: 5,
    },
    {
      name: "Nathan Johnson",
      role: "Gadget Geek",
      image: "https://source.unsplash.com/600x400/?man,gadget",
      quote:
        "Softonne's collection of gadgets is a tech lover's paradise. The variety and quality of products available, coupled with a hassle-free shopping experience, make it a standout in the tech market.",
      stars: 4.7,
    },
    {
      name: "Olivia Davis",
      role: "Tech Explorer",
      image: "https://source.unsplash.com/600x400/?woman,smartphone",
      quote:
        "Exploring the smartphone options at Softonne was a delightful experience. The detailed product descriptions and helpful reviews guided my purchase decision. Softonne is my trusted source for tech upgrades!",
      stars: 4.8,
    },
    {
      name: "Lucas Miller",
      role: "Happy Tech User",
      image: "https://source.unsplash.com/600x400/?man,earphones",
      quote:
        "Softonne delivered on its promise of quality when I purchased earphones. The sound clarity and comfort exceeded my expectations. It's a pleasure shopping for tech products with Softonne!",
      stars: 4.6,
    },
  ];
  

const HappyClients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="zoom-out-left" className="py-5 max-w-[1340px] lg:px-8 px-4">
     <div className="mb-8 text-center mt-12">
  <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold font-young text-[#1A1919] text-center mb-4">Satisfied Tech Enthusiasts</h1>
  <p className="md:text-lg text-base font-young font-medium text-[#555]">
    Elevate your tech experience with Softonne! We take pride in serving satisfied customers with a curated selection of cutting-edge technology and electronics. Whether you're a gadget geek, a tech explorer, or someone in search of the latest innovations, Softonne ensures a seamless and enjoyable shopping journey. Explore our range of products, read helpful reviews, and make your tech dreams a reality with Softonne.
  </p>
</div>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover object-center"
                src={testimonial.image}
                alt={`Event by ${testimonial.name}`}
              />
              <div className="p-6">
                <h2 className="tracking-widest text-sm title-font font-semibold text-gray-500 mb-1">
                  {testimonial.role}
                </h2>
                <h1 className="title-font font-young text-lg font-medium text-gray-900 mb-3">
                  {testimonial.name}
                </h1>
                <p className="leading-relaxed text-sm text-gray-500\ mb-3 font-young">{testimonial.quote}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-${i < testimonial.stars ? "yellow" : "gray"}-500`}
                      />
                    ))}
                    {testimonial.stars % 1 !== 0 && (
                      <FaStarHalfAlt className="text-yellow-500" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HappyClients;
