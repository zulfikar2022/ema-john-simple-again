import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './components/Shop/Shop.jsx'
import Header from './components/Header/Header.jsx'
import Layout from './components/Layout/Home.jsx'
import Home from './components/Layout/Home.jsx'
import Orders from './components/Orders/Orders.jsx'
import Inventory from './components/Inventory/Inventory.jsx'
import Login from './components/Login/Login.jsx'



const router = createBrowserRouter([
      {
        path:'/',
        element:<Home></Home>,
        children:[
            {
              path:'/',
              element:<Shop></Shop>
            },
            {
              path:'/order',
              element:<Orders></Orders>
            },
            {
              path:'/manage-inventory',
              element:<Inventory></Inventory>
            },
            {
              path:'/login',
              element:<Login></Login>
            }
        ]
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
