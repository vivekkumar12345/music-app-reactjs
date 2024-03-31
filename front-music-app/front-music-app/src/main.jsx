import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import BodyRight from "./contents/bodyright.jsx";
import Header from "./contents/header.jsx";
import MenuLeft from "./contents/menuleft.jsx";
import AddMusic from "./contents/addmusic.jsx";
import NewRelease from "./contents/newrelease.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <BodyRight /> },
      { path: "/add", element: <AddMusic /> },
      { path: "/newrelease", element: <NewRelease /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
