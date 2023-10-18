import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import 'aos/dist/aos.css'; 
import AOS from 'aos';

AOS.init();

const Category = () => {
const products = useLoaderData();

  return (
    <div data-aos="zoom-in-up" className="max-w-[1340px] lg:px-8 mx-auto">
     <div className="text-center ">
     <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold font-young text-[#1A1919] text-center mt-14">Browse Through Our Categories Here.</h3>
      <p className="text-lg text-[#555] text-center font-medium font-young mt-2 mb-8"> Explore a wide range of products in our collection. Click on a brand to
        view more products from that brand.</p>
     </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
       {
        products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
       }
       </div>
    </div>
  );
};

export default Category;
