import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Catering from "./components/Catering";
import styled from "styled-components";
import Category from "./components/Category";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  const removeItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <MainContainer>
      <Navbar
        addToCart={addToCart}
        cartItems={cartItems}
        clearCart={clearCart}
        removeItem={removeItem}
      />
      <Home />
      <Category addToCart={addToCart} />
      <Catering />
      <About />
      <Contact />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  @media only screen and (max-width: 768px){
    position: relative;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  }
  @media only screen and (max-width: 414px){
    position: relative;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  }
`;
