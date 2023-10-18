import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const Footer = () => {
  return (
    <div data-aos="fade-up">
      <div className="p-10 grid grid-cols-1 md:grid-cols-3 bg-[#232323] text-[#eee] my-20 text-center">
        <div>
          <h3 className="text-white lg:text-3xl md:text-2xl text-xl font-young">Get in Touch</h3>
          <p className="font-young text-xl my-4">Paribag, Dhaka<br />Dhaka, 1000</p>
        </div>
        <div>
          <h3 className="text-white font-extrabold lg:text-3xl md:text-2xl text-xl font-young">Terms & Conditions</h3>
          <div className="flex flex-col hover:underline font-young my-4">
            <Link to="#" className="hover:text-[#f33f3f]">Privacy Policy</Link>
            <Link to="#" className="hover:text-[#f33f3f]">Terms Of Service</Link>
            <Link to="#" className="hover:text-[#f33f3f]">Cookie Policy</Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-white lg:text-3xl md:text-2xl text-xl font-young">Social</h3>
          <div className="flex gap-4 my-4 text-4xl">
            <BsFacebook className="hover:text-[#f33f3f]  text-[#232323] bg-white px-2 py-2 rounded-md" />
            <BsWhatsapp className="hover:text-[#f33f3f] text-[#232323] bg-white px-2 py-2 rounded-md" />
            <BsInstagram className="hover:text-[#f33f3f] text-[#232323] bg-white px-2 py-2 rounded-md" />
          </div>
        </div>
        <div className="text-center">
          <p className="block md:text-lg text-base mt-4 text-white font-young">Copyright © 2023 - All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
