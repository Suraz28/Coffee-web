import React from "react";
import styled from "styled-components";

const Catering = () => {
  return (
    <BaristaCatering id="catering">
      <CoffeeOne>
        <Image1>
          <img src="/images/coffee-2.png" alt="" />
        </Image1>
        <MainText>
          <h1>Explore Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero
            repellat aut sapiente nulla neque suscipit. Eos porro voluptatum,
            nemo aliquid aliquam quas, vero numquam rem sed dolores modi
            corrupti?
          </p>
        </MainText>
      </CoffeeOne>
      <Types>
        <Services>
          <Text>
            <h4>BREAKFAST</h4>
            <p>Start Your Day Right: Where Flavor Meets Sunrise!</p>
          </Text>
          <Image2>
            <img src="/images/platefork.png" alt="" />
          </Image2>
          <button className="button">ORDER BREAKFAST</button>
        </Services>
        <Services>
          <Text>
            <h4>LUNCH</h4>
            <p>Savor the Moment: Lunchtime Delights Await!</p>
          </Text>
          <Image2>
            <img
              src="/images/hamburger_burguer_french_fries_paper_cup.png"
              alt=""
            />
          </Image2>
          <button className="button">ORDER LUNCH</button>
        </Services>
        <Services>
          <Text>
            <h4>GELATO</h4>
            <p>Indulge in Pure Bliss: Gelato Goodness Awaits!</p>
          </Text>
          <Image2>
            <img src="/images/ice-cream.png" alt="" />
          </Image2>
          <button className="button">ORDER GELATO</button>
        </Services>
      </Types>
    </BaristaCatering>
  );
};

export default Catering;

const BaristaCatering = styled.div`
  background-color: var(--light);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const CoffeeOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;

  img {
    height: 250px;
    width: 200px;
  }
`;

const MainText = styled.div`
  margin: 0;

  h1 {
    color: var(--black);
    font-size: 4rem;
    margin: 0;
    padding-top: 40px;
  }

  p {
    max-width: 50rem;
    width: 100%;
  }
`;

const Types = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`;

const Services = styled.div`
  height: auto;
  max-width: 300px;
  background: var(--lightgrey);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 8px;
  padding: 20px;
`;

const Text = styled.div`
  h4 {
    margin: 0;
    padding-left: 8px;
    font-size: 24px;
    line-height: 0;
    color: var(--black);
  }

  p {
    color: var(--black);
    padding: 0 8px 0 8px;
  }
`;

const Image1 = styled.div``;

const Image2 = styled.div`
  img {
    height: 100px;
    width: 100px;
    padding: 4px;
  }
`;
