import React,{useState} from "react";
import Header from "./Components/Layout/Header/Header";
import { Meals } from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

const App = () => {

  const [CartHandler, setCartHandler] = useState(false);

  const showCartHandler =()=>{
    setCartHandler(true);
  }

  const hideCartHandler = ()=>{
    setCartHandler(false);
  }

  return (
    <CartProvider>
      {CartHandler && <Cart  onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
     <main>
       <Meals/>
     </main>

    </CartProvider>
  );
};

export default App;
