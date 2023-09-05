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
import cartProductsLoader from './loaders/cartProductsLoader.js'
import Checkout from './components/Checkout/Checkout.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import AuthProvider from './components/Providers/AuthProvider.jsx'
import PrivateRoute from './components/routes/PrivateRoute.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/order',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: '/manage-inventory',
        element:<PrivateRoute> <Inventory></Inventory></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: 'sign-up',
        element: <SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
