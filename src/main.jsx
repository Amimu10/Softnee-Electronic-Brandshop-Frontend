import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/Home';
import MainLayOut from './MainLayOut';
import ErrorPage from './components/ErrorPage';
import AddProduct from './components/AddProduct';
import MyCart from './components/MyCart';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './AuthProvider';
import PrivateRoute from './PrivateRoute'; 
import AdvertisementSlider from './components/AdvertisementSlider'; 
import ProductDetails from './components/ProductDetails';
import BrandPage from './components/BrandPage';
import UPdateProducts from './components/UPdateProducts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
       
      },
      {
        path: "/products",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
     
      {
        path: "/carts/:userName",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: ({params})=> fetch(`https://elite-electro-server-jsnnlgmam-amimul211-gmailcom.vercel.app/carts/${params.userName}`) 
      
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>        
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>    
      },
      {
        path: "/advertiements",
        element: <AdvertisementSlider></AdvertisementSlider>        
      },
      {
        path: "/showBrand/:brand", 
        element: <BrandPage></BrandPage>,
        loader: ({ params }) => {
          return fetch(`https://elite-electro-server-jsnnlgmam-amimul211-gmailcom.vercel.app/products/${params.brand}`);
        },
      },
     
      {
        path: "/showBrand/brandDetails/:id",   
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params})=>{
          return fetch(`https://elite-electro-server-jsnnlgmam-amimul211-gmailcom.vercel.app/productDetails/${params.id}`)
        }
      },
      {
        path: "updateProducts/:id",   
        element: <PrivateRoute><UPdateProducts></UPdateProducts></PrivateRoute>,
        loader: ({params})=>{
          return fetch(`https://elite-electro-server-jsnnlgmam-amimul211-gmailcom.vercel.app/updateproducts/${params.id}`)
        }
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />  
   </AuthProvider>
  </React.StrictMode>
);