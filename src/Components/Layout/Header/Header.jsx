import React  from "react";
import mealImg from "../../../Assets/meals.jpg";
import classes from "./Header.module.css";
import CartButton from "./CartButton";


const Header = (props) => {


  return (
    <React.Fragment>
    <header className= {classes.header}>
        <h2>Zomato</h2>
        <CartButton onShow={props.onShowCart}/>
      </header>
      <div className = {classes["main-image"]}>
        <img src={mealImg} alt="meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
