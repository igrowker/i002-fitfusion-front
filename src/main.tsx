import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import HomePage from './views/HomePage/HomePage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index : true, 
        element : <HomePage/>
      },
      {
        path : '/profile', 
        element : <h1 className="text-center text-white font-bold"> Estoy en el Profile </h1>
      },
      {
        path : '/trainer-profile', 
        element : <h1 className="text-center text-white font-bold"> Estoy en el TrainerProfile </h1>
      },
      {
        path : '/classes', 
        element : <h1 className="text-center text-white font-bold"> Estoy en el ClassList </h1>
      },
      {
        path : '/class-detail/:id', 
        element : <h1 className="text-center text-white font-bold"> Estoy en el ClassDetails </h1>
      },
      {
        path : '/nutrition', 
        element : <h1 className="text-center text-white font-bold"> Estoy en el Nutrition </h1>
      },
      {
        path : '/physiotherapist', 
        element : <h1 className="text-center text-white font-bold"> Estoy en el Physiotherapist </h1>
      },
      {
        path : '/contact', 
        element : <h1 className="text-center text-white font-bold"> Estoy en el Contact </h1>
      },
      {
        path : '/about-us', 
        element : <h1 className="text-center text-white font-bold"> Estoy en el AboutUs </h1>
      },
      {
        path : '/privacy-policy', 
        element : <h1 className="text-center text-white font-bold"> Estoy en el PrivacyPolicy </h1>
      },

    ],
  },
  {
    path : '/login', 
    element : <h1 className="text-center text-white font-bold"> Estoy en el Login </h1>
  },
  {
    path : '/register', 
    element : <h1 className="text-center text-white font-bold"> Estoy en el Register </h1>
  },

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
