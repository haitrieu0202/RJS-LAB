import React, { useState } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";

function Main() {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };
  return (
    <div>
      <Header />
      <Menu dishes={dishes} onDishSelect={onDishSelect} />
      <DishDetail dish={dishes.find((dish) => dish.id === selectedDish)} />
      <Footer />
    </div>
  );
};

export default Main;
