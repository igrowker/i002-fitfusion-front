import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { HomePage, ClassesList, UserProfile } from "./views";
import { AuthLayout } from "./layouts";
import TrainerProfilePage from "./views/TrainerProfilePage/TrainerProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: "login",
        element: (
          <h1 className="text-center text-white font-bold">
            Estoy en el Login
          </h1>
        ),
      },
      {
        path: "register",
        element: (
          <h1 className="text-center text-white font-bold">
            Estoy en el Register
          </h1>
        ),
      },
    ],
  },
  {
    path: "profile",
    element: <UserProfile />,
  },
  {
    path: "trainer-profile",
    element: <TrainerProfilePage />,
  },
  {
    path: "classes",
    element: <ClassesList />,
  },
  {
    path: "class-detail/:id",
    element: (
      <h1 className="text-center text-white font-bold">
        Estoy en el ClassDetail
      </h1>
    ),
  },
  {
    path: "nutrition",
    element: (
      <h1 className="text-center text-white font-bold">
        Estoy en el Nutrition
      </h1>
    ),
  },
  {
    path: "physiotherapist",
    element: (
      <h1 className="text-center text-white font-bold">
        Estoy en el Physiotherapist
      </h1>
    ),
  },
  {
    path: "contact",
    element: (
      <h1 className="text-center text-white font-bold">Estoy en el Contact</h1>
    ),
  },
  {
    path: "about-us",
    element: (
      <h1 className="text-center text-white font-bold">Estoy en el AboutUs</h1>
    ),
  },
  {
    path: "privacy-policy",
    element: (
      <h1 className="text-center text-white font-bold">
        Estoy en el PrivacyPolicy
      </h1>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />, // Acá debemos poner una pagina 404
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
