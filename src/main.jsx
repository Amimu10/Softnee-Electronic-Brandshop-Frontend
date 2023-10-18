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
// import Login from './components/Login';
// import Register from './components/Register';
import Category from './components/Category';
// import AuthProvider from '../src/AuthProvider';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './AuthProvider';
import PrivateRoute from './PrivateRoute'; 
import BrandPage from './components/brandPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/products")
      },
      {
        path: "/products",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/cart",
        element: <MyCart></MyCart>
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
        path: "/products/:brand",
        element: <BrandPage></BrandPage>,
        loader: () => fetch("http://localhost:5000/products")
      },
      {
        path: "/products/:id",   
        element: <Category></Category>,
        loader: (params) => fetch(`http://localhost:5000/products/${params.id}`)
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