// import { useEffect, useState } from "react";
// // import FavouriteCard from "./FavouriteCard";
// import Swal from "sweetalert2";
// import CartCard from "./CartCard";

// const MyCart = () => {
//   const [cart, setCart] = useState([]);
//   const [noFound, setNotFound] = useState(false);
//   const [isShow, setShow] = useState(false);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     const CartItems = JSON.parse(localStorage.getItem("item"));
//     if (CartItems) {
//         setCart(CartItems);
//       const totalAmount = CartItems.reduce((previous,current)=>previous + current.price, 0);
//       // setTotal(total)
//       console.log(totalAmount);
//       setTotal(totalAmount);
//     } else {
//       setNotFound(true);
//       Swal.fire({
//         title: "No Favorites Found",
//         text: "You have no favorite items.",
//         icon: "info",
//         timer: 2000,
//         timerProgressBar: true,
//       });
//     }
//   }, []);

//   const handleRemoveData = () => {
//     localStorage.clear();
//     setCart([]);

//     if (localStorage.length === 0) {
//       Swal.fire({
//         title: "No Favorites Found",
//         text: "You have no favorite items.",
//         icon: "info",
//         timer: 2000,
//         timerProgressBar: true,
//       });
//     }
//   };

  
  


//   return (
//     <div>
//         <div>
//         {
//           setTotal?<p className="text-3xl font-bold my-6 text-center">Total Amount: {total}</p>: ""
//         }
//       </div>
//       {noFound ? (
//         <p>{noFound}</p>
//       ) : (
//         <div>
//           {cart.length > 0 && (
//             <div className="flex justify-center my-8">
//               <button
//                 onClick={handleRemoveData}
//                 className="rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 data-ripple-light="true"
//               >
//                 Delete All Cart
//               </button>
//             </div>
//           )}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {isShow
//               ? cart.slice(0, 3).map((detailsData) => (
//                     <CartCard key={detailsData._id} detailsData={detailsData} />
//                   ))
//               : cart
//               .map((detailsData) => (
//                   <CartCard key={detailsData._id} detailsData={detailsData} />
//                 ))}
//           </div>

//           <div className="flex justify-center my-8">
//             <button
//               onClick={() => setShow(!isShow) }
//               className="rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//               data-ripple-light="true"
//             >
//               {
//                 isShow? "See More" : "See Less"
//               }
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyCart;




// import { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import CartCard from "./CartCard";

// const MyCart = () => {
//   const [cart, setCart] = useState([]);
//   const [noFound, setNotFound] = useState(false);
//   const [isShow, setShow] = useState(false);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     const CartItems = JSON.parse(localStorage.getItem("item"));
//     if (CartItems) {
//         setCart(CartItems);
//       const totalAmount = CartItems.reduce((previous,current)=>previous + current.price, 0);
//       // setTotal(total)
//       console.log(totalAmount);
//       setTotal(totalAmount);
//     } else {
//       setNotFound(true);
//       Swal.fire({
//         title: "No Favorites Found",
//         text: "You have no favorite items.",
//         icon: "info",
//         timer: 2000,
//         timerProgressBar: true,
//       });
//     }
//   }, []);

//   const handleRemoveData = () => {
//     localStorage.clear();
//     setCart([]);

//     if (localStorage.length === 0) {
//       Swal.fire({
//         title: "No Favorites Found",
//         text: "You have no favorite items.",
//         icon: "info",
//         timer: 2000,
//         timerProgressBar: true,
//       });
//     }
//   };

  
  


//   return (
//     <div>
//         <div>
//         {
//           setTotal?<p className="text-3xl font-bold my-6 text-center">Total Amount: {total}</p>: ""
//         }
//       </div>
//       {noFound ? (
//         <p>{noFound}</p>
//       ) : (
//         <div>
//           {cart.length > 0 && (
//             <div className="flex justify-center my-8">
//               <button
//                 onClick={handleRemoveData}
//                 className="rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 data-ripple-light="true"
//               >
//                 Delete All Cart
//               </button>
//             </div>
//           )}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {isShow
//               ? cart.slice(0, 3).map((detailsData) => (
//                     <CartCard key={detailsData._id} detailsData={detailsData} />
//                   ))
//               : cart
//               .map((detailsData) => (
//                   <CartCard key={detailsData._id} detailsData={detailsData} />
//                 ))}
//           </div>

//           <div className="flex justify-center my-8">
//             <button
//               onClick={() => setShow(!isShow) }
//               className="rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//               data-ripple-light="true"
//             >
//               {
//                 isShow? "See More" : "See Less"
//               }
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyCart;

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import StarRatings from "react-star-ratings";



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
    fetch(`http://localhost:5000/carts/${id}`, {
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
        <div className="max-w-[1340px] lg:px-8 mx-auto">
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