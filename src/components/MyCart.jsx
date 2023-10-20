
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import 'aos/dist/aos.css'; 
import AOS from 'aos';

AOS.init();

function MyCart() {

  const data = useLoaderData()

  const [deleteData, setDeleteData] = useState(data);

  const totalPrice = deleteData.reduce((total, card) => total + parseInt(card.price), 0);

  const showSuccess = () => {
    Swal.fire(
      'Great!',
      'successfully purchase'
    )
  }
  console.log(deleteData);


  const handleDelete = (id)=> { 
    fetch(` https://elite-electro-server-eg7jvujym-amimul211-gmailcom.vercel.app/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filter = deleteData.filter((item) => item._id !== id);
        setDeleteData(filter)
      });

  }
  return (
        <div data-aos="zoom-in-up" className="max-w-[1340px] lg:px-8 mx-auto">
        <div className="my-6">
        <div>
            <p className="text-2xl text-center font-medium text-pink-500 "><span className="font-young">Total price:</span> ${totalPrice}<span className="text-gray-400"></span>
            </p>
          </div>
          <div className="text-center mb-8">
            <button onClick={showSuccess} className="font-semibold text-xl py-4 px-8 font-young bg-[#E527B2] rounded-lg text-white mt-5 relative top-12">Purchase Now</button>
          </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto  gap-6 my-14">
        {
          deleteData.map(card => <div key={card._id}>
            <div className="mt-10 px-4"> 
              <img className="w-full h-[265px] mx-auto" src={card.image} alt="" />
            </div>
            <div className=" my-3 text-center">
              <p className="text-xl font-semibold">{card.name}</p>
              <StarRatings
                starDimension="18px"
                starSpacing="2px"
                rating={parseInt(card.rating)}
                starRatedColor="gold"
                numberOfStars={5} 
                name="rating"
              />
              <p className="text-lg text-pink-500 mt-3">$ {card.price}</p>
              <button className="bg-[#f33f3f] px-4 py-2 text-md font-young mt-4 mx-auto text-[#eee] rounded-md" onClick={() => handleDelete(card._id)}>DELETE</button>
            </div>
           
          </div>)
        }
      </div>
        </div>
  )
}

export default MyCart