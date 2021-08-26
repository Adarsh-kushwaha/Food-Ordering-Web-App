import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false)
  const cartCtx = useContext(CartContext);
  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  

    const onOrderHandler=()=>{
        setIsCheckout(true)
    }

    const modalButtonAction = (<div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && <button className={classes.button} onClick={onOrderHandler}>Order</button>}
    </div>)

  return (
    <Modal onBackClose={props.onClose}>
      {cartItems}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span> {totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onClose}/>}
      {!isCheckout && modalButtonAction}
      
      
    </Modal>
  );
};

export default Cart;
