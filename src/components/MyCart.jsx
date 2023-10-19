import { useEffect, useState } from "react";
// import FavouriteCard from "./FavouriteCard";
import Swal from "sweetalert2";
import CartCard from "./CartCard";

const MyCart = () => {
  const [cart, setCart] = useState([]);
  const [noFound, setNotFound] = useState(false);
  const [isShow, setShow] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const CartItems = JSON.parse(localStorage.getItem("item"));
    if (CartItems) {
        setCart(CartItems);
      const totalAmount = CartItems.reduce((previous,current)=>previous + current.price, 0);
      // setTotal(total)
      console.log(totalAmount);
      setTotal(totalAmount);
    } else {
      setNotFound(true);
      Swal.fire({
        title: "No Favorites Found",
        text: "You have no favorite items.",
        icon: "info",
        timer: 2000,
        timerProgressBar: true,
      });
    }
  }, []);

  const handleRemoveData = () => {
    localStorage.clear();
    setCart([]);

    if (localStorage.length === 0) {
      Swal.fire({
        title: "No Favorites Found",
        text: "You have no favorite items.",
        icon: "info",
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  
  


  return (
    <div>
        <div>
        {
          setTotal?<p className="text-3xl font-bold my-6 text-center">Total Amount: {total}</p>: ""
        }
      </div>
      {noFound ? (
        <p>{noFound}</p>
      ) : (
        <div>
          {cart.length > 0 && (
            <div className="flex justify-center my-8">
              <button
                onClick={handleRemoveData}
                className="rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                Delete All Cart
              </button>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {isShow
              ? cart.slice(0, 3).map((detailsData) => (
                    <CartCard key={detailsData._id} detailsData={detailsData} />
                  ))
              : cart
              .map((detailsData) => (
                  <CartCard key={detailsData._id} detailsData={detailsData} />
                ))}
          </div>

          <div className="flex justify-center my-8">
            <button
              onClick={() => setShow(!isShow) }
              className="rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              {
                isShow? "See More" : "See Less"
              }
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
