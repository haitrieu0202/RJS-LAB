import React, { useState } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
import { Routes, Route  } from "react-router-dom";

function Main() {
  const [dishes] = useState(DISHES);
  const HomePage = () => {
    return <Home />;
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={HomePage} />
        <Route path="/menu" element={<Menu dishes={dishes} />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default Main;
