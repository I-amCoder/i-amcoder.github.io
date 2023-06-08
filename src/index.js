import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Thanks from "./pages/Thanks";
import Azhar from "./pages/Azhar";
import Home from "./pages/home";
import Hero from "./components/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/survey",
        element: <Azhar />,
      },
      {
        path: "/intro",
        element: <Hero />,
      },
      {
        path: "/thanks",
        element: <Thanks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
  
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
