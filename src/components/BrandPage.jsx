
// import { useLoaderData} from "react-router-dom";

// import 'aos/dist/aos.css'; 
// import AOS from 'aos'; 
// import BrandProducts from "./BrandProducts";
// import AdvertisementSlider from "./AdvertisementSlider";


// AOS.init(); 

// const BrandPage = () => {
// const data = useLoaderData();

//   return (
//     <div data-aos="zoom-in-up" className="max-w-[1340px] lg:px-8 mx-auto">
//       <div className="my-8">
//       <AdvertisementSlider details={data}/>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-6">
  
//         {
//           data.map(card=> <BrandProducts key={data._id} data={card}></BrandProducts>)
//         }
//       </div>
//     </div>
//   );
// };

// export default BrandPage;

import { useLoaderData } from "react-router-dom";
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import BrandProducts from "./BrandProducts";
import AdvertisementSlider from "./AdvertisementSlider";

AOS.init(); 

const BrandPage = () => {
  const data = useLoaderData();

  return (
    <div data-aos="zoom-in-up" className="max-w-[1340px] lg:px-8 mx-auto">
      <div className="my-8">
        <AdvertisementSlider details={data}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-6">
        {
          data.map(card => <BrandProducts key={card._id} data={card}></BrandProducts>)
        }
      </div>
    </div>
  );
};

export default BrandPage;
