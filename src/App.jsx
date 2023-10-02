import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProducts from './Pages/AllProducts';
import ProductDesc from './Pages/productDesc';


function App() {
  // const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/allProducts',
      element: <AllProducts />,
    },
    {
      path: '/product/:id',
      element: <ProductDesc />,
    },
    {
      path: 'allProducts/product/:id',
      element: <ProductDesc />,
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
