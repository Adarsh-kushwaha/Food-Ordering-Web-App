import React, {useContext} from "react";
import CartIcon from "../../Cart/CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../../Store/CartContext";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;
