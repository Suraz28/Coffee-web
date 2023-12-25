import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutUs id="about">
      <Details>
        <ImageLogo>
          <img src="public/images/logo.png" alt="" />
        </ImageLogo>
        <Text>
          <p>
            "Welcome to our cozy coffee haven, where each cup tells a story, and
            every sip is a journey. Here, we invite you to indulge in the warmth
            of freshly brewed inspiration, where the aroma of passion blends
            seamlessly with the rich notes of community. May each moment spent
            with us be a delightful pause, a celebration of your unique story.
            Savor the experience, embrace the flavors, and let the symphony of
            coffee inspire your day. Cheers to creating unforgettable memories,
            one sip at a time!" ☕🌟 #CoffeeMoments #InspirationInEveryCup
          </p>
          <p>
            "At Barista Coffee, we craft more than just beverages; we cultivate
            experiences. Our journey began with a passion for coffee, a
            commitment to quality, and a vision to create a haven for coffee
            enthusiasts. With every brew, we strive to capture the essence of
            excellence, delivering not just a cup of coffee but an exquisite
            symphony of flavors.
            <br />
            Whether you're seeking a moment of solitude or a gathering with
            friends, Barista Coffee is your destination for more than coffee;
            it's a place where stories unfold, connections are forged, and
            memories are made. Join us in celebrating the artistry of coffee and
            the joy of shared moments. Welcome to Barista Coffee, where every
            cup is a masterpiece, and every visit is a cherished experience."
            ☕✨ #BaristaCoffee #CraftedWithPassion.
          </p>
        </Text>
      </Details>
    </AboutUs>
  );
};

export default About;

const AboutUs = styled.div`
  background-color: var(--light);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 3rem 10px;
  }
  @media (max-width: 450px) {
    padding: 7rem 10px;
  }
  @media (max-width: 350px) {
    padding: 10rem 10px;
  }
  @media (max-width: 310px) {
    padding: 15rem 10px;
  }
  `;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 800px;

  img {
    height: 150px;
    margin-top: 2rem;

    @media (max-width: 768px) {
      height: 100px;
      margin-top: 1rem;
    }
  }
`;

const ImageLogo = styled.div``;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    max-width: 100%;
    font-weight: bold;
    color: var(--black);
    border-radius: 10px;
    padding: 0 20px;

    @media (max-width: 768px) {
      padding: 0 10px;
    }
  }
`;
