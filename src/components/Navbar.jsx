import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from "../assets/logo.webp";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleNavLinkClick = () => {
    setMenu(false);
  };

  return (
    <div className="bg-[#232323]">
     <div className="relative max-w-[1340px] lg:px-8 px-4 mx-auto" > 
      <nav className="flex justify-between items-center  gap-4 p-6">
        <div>
          <h3 className="lg:text-2xl font-semibold font-young text-orange-600">
           <img src={Logo} alt="" /> 
          </h3>
        </div>
        {/* Show menu items only on medium and larger screens */}
        <div className="md:flex lg:gap-12 md:gap-6 text-lg hidden list-none">
          <li className="md:mt-1">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending '
                  : isActive
                  ? 'text-[#f33f3f] font-semibold font-young transition-all duration-300 hover:underline '
                  : 'font-young font-medium text-[#eee]'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="md:mt-1">
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-[#f33f3f] font-semibold font-young transition-all duration-300 hover:underline '
                  : 'font-young font-medium text-[#eee]'
              }
            >
              Add Product
            </NavLink>
          </li>
          <li className="md:mt-1">
            <NavLink
              to="/cart"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-[#f33f3f] font-semibold font-young transition-all duration-300 hover:underline '
                  : 'font-young font-medium text-[#eee]'
              }
            >
              My Cart
            </NavLink>
          </li>
          <li className="md:mt-1">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-[#f33f3f] font-semibold font-young transition-all duration-300 hover:underline '
                  : 'font-young font-medium text-[#eee]'
              }
            >
              Login
            </NavLink>
          </li>
        </div>

        {/* Show menu icon only on small screens */}
        <div className="md:hidden flex items-center gap-2">
          {menu ? (
            <AiOutlineClose
              onClick={() => setMenu(false)}
              className="text-center cursor-pointer text-4xl text-[#FDBF05] font-black"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setMenu(true)}
              className="text-center cursor-pointer text-4xl text-[#FDBF05] font-black"
            />
          )}
         {menu && (
          <div className="absolute top-20 right-0 text-lg bg-[#eee] w-full z-10 rounded-lg p-5">
            <ul className="flex flex-col gap-4 list-none">
              <li>
                <NavLink
                  to="/"
                  onClick={handleNavLinkClick}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'text-[#f33f3f] font-semibold font-young transition-all duration-300 hover:underline '
                      : 'font-young font-medium text-[#232323]'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="md:mt-1">
                <NavLink
                  to="/products"
                  onClick={handleNavLinkClick}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'text-[#f33f3f] font-semibold font-young transition-all duration-300 hover:underline '
                      : 'font-young font-medium text-[#232323]'
                  }
                >
                  Add Product
                </NavLink>
              </li>
              <li className="md:mt-1">
                <NavLink
                  to="/cart"
                  onClick={handleNavLinkClick}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'text-[#f33f3f] font-semibold font-young transition-all duration-300 hover:underline '
                      : 'font-young font-medium text-[#232323]'
                  }
                >
                  My Cart
                </NavLink>
              </li>
              <li className="md:mt-1">
                <NavLink
                  to="/login"
                  onClick={handleNavLinkClick}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'text-[#f33f3f] font-semibold font-young transition-all duration-300 hover:underline '
                      : 'font-young font-medium text-[#232323]'
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
