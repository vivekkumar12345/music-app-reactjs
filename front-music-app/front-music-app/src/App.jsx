import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./contents/header";
import MenuLeft from "./contents/menuleft";
import BodyRight from "./contents/bodyright";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header></Header>
      <MenuLeft></MenuLeft>
      <Outlet></Outlet>
    </>
  );
}

export default App;
