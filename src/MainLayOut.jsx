import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const MainLayOut = () => {
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>          
      <Outlet></Outlet>   
    </div>
  );
};

export default MainLayOut;
