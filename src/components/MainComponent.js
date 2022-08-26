import React, { useState } from "react";
import DishDetail from "./DishDetailComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { DISHES } from "../shared/dishes";
import { Routes, Route } from "react-router-dom";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

function Main() {
  const [state] = useState({
    dishes : DISHES,
    comments : COMMENTS,
    leaders : LEADERS,
    promotions : PROMOTIONS
  })

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home
            dish={state.dishes[0]}
            promotion={state.promotions.filter((promo) => promo.featured)[0]}
            leader={state.leaders.filter((leader) => leader.featured)[0]}
        />} />
        <Route path="/menu" element={<Menu dishes={state.dishes} />} />
        <Route
          exact
          path="/menu/:id"
          element={<DishDetail dishes={state.dishes} comments={state.comments} />}
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About leaders={state.leaders} />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default Main;
