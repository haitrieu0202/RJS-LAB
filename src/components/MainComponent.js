import React from "react";
import DishDetail from "./DishDetailComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions,
  };
};

function Main(props) {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              dish={props.dishes[0]}
              promotion={props.promotions.filter((promo) => promo.featured)[0]}
              leader={props.leaders.filter((leader) => leader.featured)[0]}
            />
          }
        />
        <Route exact path="/menu" element={<Menu dishes={props.dishes} />} />
        <Route
          exact
          path="/menu/:id"
          element={<DishDetail dishes={props.dishes} comments={props.comments} />}
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About leaders={props.leaders} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default connect(mapStateToProps)(Main);
