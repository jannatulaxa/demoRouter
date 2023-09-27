import {createBrowserRouter } from 'react-router-dom'
import MainComponent from '../components/MainComponent';
import Product from '../pages/Product';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import SingleProduct from '../pages/SingleProduct';


const myCreateRouter = createBrowserRouter([
    {
      path: "/",
      element:<MainComponent></MainComponent>,
      children:[
        {
          path: "/products",
          element:<Product></Product>,
          loader:()=>fetch(`https://dummyjson.com/products`),
        },
        {
          path: "/products/:id",
          element:<SingleProduct></SingleProduct>,
          loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`),
        },
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path: "/dashboard",
          element:<Dashboard></Dashboard>,
        },
      ]},
  ]);

export default myCreateRouter;