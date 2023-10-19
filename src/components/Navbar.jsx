import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from "../assets/logo.webp";
import { AuthContext } from '../AuthProvider';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [menu, setMenu] = useState(false);

  const name = user?.displayName;
  const photo = user?.photoURL;
  const handleLogOut = () => {
    console.log(name, photo); 

    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };
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
              to="/addProduct"
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
          <li className="flex gap-3  items-center">
            {user ? (
              <>
                {name && photo && (
                  <>
                    <p className="text-[#eee] font-young text-sm">{name}</p>
                    <img
                      src={photo}
                      className="inline items-center mr-3 h-10 w-10 rounded-full"
                      alt=""
                    />
                  </>
                )}
                <NavLink onClick={handleLogOut}>
                  <button className="bg-[#7AA93C] text-white font-young font-thin px-4 py-2 rounded">
                    Sign Out
                  </button>
                </NavLink>
              </>
            ) : (
              <NavLink>
                <button
                  to="/login"
                  className="bg-[#7AA93C] text-white font-young font-thin px-4 py-2 rounded"
                >
                  Login
                </button>
              </NavLink>
            )}
          </li>
        </div>
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
                  to="/addProduct"
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
              {
                user?  <li>
                <button
                  onClick={handleLogOut}
                  
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FDBF05] font-semibold font-young"
                      : "font-young font-medium text-[#656D76]"
                  }
                >
                  Sign Out
                </button>
              </li>
              :
              <li>
                <button
                  onClick={handleLogOut}
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FDBF05] font-semibold font-young"
                      : "font-young font-medium text-[#656D76]"
                  }
                >
                  Login
                </button>
              </li>
               }
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
