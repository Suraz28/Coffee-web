import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer id="home">
      <BaristaText>
        <h1>
          Barista <br />
          Delicious <br />
          Coffee
        </h1>
        <h3>Savor the Moment, Sip the Perfection.</h3>
        <p>
          A drink from Barista brews range or grab one of our delicious coffees.
        </p>
        <Links>
          <a href="#">
            <button className="button">DOWNLOAD APP</button>
          </a>
          <a href="#" className="shoplink">
            SHOP COFFEE
          </a>
        </Links>
      </BaristaText>
      <BaristaImage>
        <img src="public/images/coffee cup.png" alt="" />
      </BaristaImage>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  background-color: var(--main);
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const BaristaText = styled.div`
  line-height: 1;
  margin-top: 80px;
  h1 {
    color: var(--black);
    font-size: 5rem;
    margin-bottom: 0px;
  }
  h3,
  p {
    color: var(--black);
  }
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px;

    h1 {
      font-size: 3rem;
    }
  }
`;

const BaristaImage = styled.div`
  img {
    height: 450px;
    width: 350px;
    border-radius: 100px;
    box-shadow: 0px 5px rgba(0, 0, 0, 0.2);
    margin-top: 80px;
  }
  @media (max-width: 768px) {
    img {
      height: 300px;
      width: 250px;
      margin-top: 20px;
    }
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
