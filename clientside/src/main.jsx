import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import Homepage from "./components/homepage/Homepage.jsx";
import Foodlist from "./components/foodlist/Foodlist.jsx";
import Layout from "./Layout.jsx";
import Search from "./components/search/Search.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/list",
        element: <Foodlist />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-s2qldime8th57mtv.jp.auth0.com"
      clientId="ehbXG2ME5VXZ1cPXweoplymq3b0LEdEh"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={AppRouter} />
    </Auth0Provider>
  </React.StrictMode>
);
