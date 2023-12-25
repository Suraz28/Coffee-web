import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import styled from "styled-components";
import { PiShoppingCartFill } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ cartItems, clearCart, removeItem, addToCart }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(false);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    const handleResize = () => {
      setIsNavOpen(window.innerWidth < 769);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navbarItems = [
    { text: "Home", path: "home" },
    { text: "Barista Menu", path: "menu" },
    { text: "Barista Catering", path: "catering" },
    { text: "About Us", path: "about" },
    { text: "Contact Us", path: "contact" },
  ];

  return (
    <NavbarContainer isSticky={isSticky}>
      <NavbarItems>
        <LogoContainer>
          <img src="public/images/logo.png" alt="" />
            <p>
            {isNavOpen ? (
              <FaTimes onClick={toggleNav} />
              ) : (
                <FaBars onClick={toggleNav} />
                )}
            </p>
        </LogoContainer>
        {(window.innerWidth > 768 || isNavOpen )&& (
        <NavLinks isNavOpen={isNavOpen}>
          {navbarItems.map(({ text, path }) => (
            <NavbarItem
              key={path}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              onSetActive={handleSetActive}
              activeClass={activeLink === path ? 'active' : ''}
              isSticky={isSticky}
            >
              {text}
            </NavbarItem>
          ))}
        </NavLinks>
        )}
        {(window.innerWidth > 768 || isNavOpen )&& (
        <NavIcons isNavOpen={isNavOpen}>
          <PiShoppingCartFill
            style={{
              padding: "10px",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "20px",
              color: isHovered ? "white" : "black",
              background: isHovered ? "black" : "white",
              transition: "300ms",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={toggleCart}
          />
          <div className="cart-dropdown">
          <CartDropdown isOpen={isCartOpen}>
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  <div>
                    {cartItems.map((item, index) => (
                      <CartItem key={index}>
                        <CartItemInfo>
                          <CartItemName>{item.title}</CartItemName>
                          <CartItemPrice>Rs {item.price}</CartItemPrice>
                        </CartItemInfo>
                        <CartItemQuantity>
                          <button onClick={() => removeItem(index)}>-</button>
                          {item.quantity}
                          <button onClick={() => addToCart(item)}>+</button>
                        </CartItemQuantity>
                      </CartItem>
                    ))}
                    <CartTotal>
                      <p>
                        Total: Rs{" "}
                        {cartItems.reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )}
                      </p>
                      <button
                        onClick={() => {
                          clearCart();
                          toggleCart();
                        }}
                      >
                        Clear Cart
                      </button>
                      <button
                      >
                        Proceed to pay
                      </button>
                    </CartTotal>
                  </div>
                )}
              </CartDropdown>
          </div>
          <span>{totalItems}</span>
          <Button>Buy Gift Card</Button>
        </NavIcons>
        )}
      </NavbarItems>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  width: 100%;
  background-color: ${(props) =>
    props.isSticky ? "var(--black)" : "var(--main)"};
  color: ${(props) => (props.isSticky ? "var(--light)" : "var(--black)")};
  box-shadow: ${(props) =>
    props.isSticky ? "0 2px 5px rgba(0, 0, 0, 0.1)" : "none"};
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  z-index: 1000;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;


const NavbarItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
    margin: 0;
  }

  @media only screen and (max-width: 1024px) {
    margin: 0;
  }
`;

const NavLinks = styled.div`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }

  display: flex;
  align-items: center;
  gap: 40px;

  font-size: 16px;

  @media only screen and (max-width: 1024px) {
    gap: 20px;
  }
`;

const NavbarItem = styled(Scroll)`
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: var(--grey);
  }
`;

const LogoContainer = styled(NavbarItem)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    max-height: 40px;
    padding: 5px;
    background-color: ${(props) =>
      props.isSticky ? "var(--light)" : "var(--main)"};
    border-radius: 10px;
    transition: background-color 0.3s;
  }
  @media only screen and (max-width: 768px) {
    max-width: 768px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    p{
      padding-right: 10px;
    }
  }
  @media only screen and (min-width: 768px){
    p{
      visibility: hidden;
    }
  }
`;

const NavIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span {
    padding: 0 3px;
    background-color: var(--black);
    color: white;
    font-weight: bold;
    border-radius: 5px;
    position: relative;
    top: -8px;
    right: 30px;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    margin-top: 10px;
  }
`;

const Button = styled.div`
  text-align: center;
  background-color: ${(props) =>
    props.isSticky ? "var(--light)" : "var(--black)"};
  color: ${(props) => (props.isSticky ? "black" : "var(--white)")};
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  cursor: pointer;
  padding: 10px;
  border-radius: 40px;
  box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${(props) =>
      props.isSticky ? "var(--lightgrey)" : "var(--grey)"};
    color: ${(props) => (props.isSticky ? "var(--black)" : "var(--white)")};
  }

  @media only screen and (max-width: 1024px) {
    font-size: 14px;
    border-radius: 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 150px;
    font-size: 14px;
  }
`;

const CartDropdown = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50px;
  right: 0;
  width: 250px;
  border-radius: 30px;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 10;
  color: ${(props) => (props.isSticky ? "" : "var(--black)")};
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
`;

const CartItemInfo = styled.div`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const CartItemName = styled.p`
  margin: 0;
  font-weight: bold;
`;

const CartItemPrice = styled.p`
  margin: 0;
`;

const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: #ddd;
    border: none;
    padding: 5px;
    cursor: pointer;
  }
`;

const CartTotal = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  button {
    background-color: var(--black);
    color: white;
    border: none;
    padding: 8px;
    cursor: pointer;
    border-radius: 5px;
  }
`;
