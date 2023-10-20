import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import 'aos/dist/aos.css'; 
import AOS from 'aos';

AOS.init();

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What types of technology products do you offer?",
      answer:
        "We offer a diverse range of technology products, including smartphones, laptops, audio devices, smart home gadgets, and more.",
    },
    {
      question: "Are there any ongoing promotions or discounts on your products?",
      answer:
        "Yes, we frequently run special promotions and discounts. Visit our website or subscribe to our newsletter to stay updated on the latest offers.",
    },
    {
      question: "How can I place an order for a product?",
      answer:
        "Placing an order is simple! Just browse our website, select the desired product, and proceed to checkout. Follow the steps to complete your purchase.",
    },
    {
      question: "Can I find products from specific brands on your platform?",
      answer:
        "Certainly! We offer products from various renowned brands. You can explore our catalog to find products from your favorite brands.",
    },
    {
      question: "Do you provide warranty services for the products?",
      answer:
        "Yes, we offer warranty services for our products. Each product comes with warranty details, and our customer support is ready to assist you with any concerns.",
    },
  ];

  return (
    <div data-aos="zoom-in-up" className="max-w-[1340px] lg:px-8 mx-auto">
      <div className="text-center">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold font-young text-center mt-14">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-center font-medium font-young mt-3 mb-6">
          Explore common questions about our technology products and services. If you have additional inquiries, feel free to contact us.
        </p>
      </div>
      {faqData.map((item, index) => (
        <div key={index} className="relative mb-3">
          <h6 className="mb-0">
            <button
              className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
              onClick={() => toggleAccordion(index)}
            >
              <span className="md:text-xl text-base font-thin font-young">{item.question}</span>
              <i className="absolute right-0 pt-1 text-xs">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </i>
            </button>
          </h6>
          <div
            className={`${
              activeIndex === index
                ? "h-auto py-4 transition-all duration-300 ease-in-out"
                : "h-0 overflow-hidden"
            }`}
          >
            <div className="p-2 leading-normal text-base md:text-lg text-center font-extralight">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
