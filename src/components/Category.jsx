import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Category = ({ addToCart }) => {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  const Types = [
    {
      img: "public/images/Coffee Types/Affogato.png",
      title: "Affogato",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 280,
    },
    {
      img: "public/images/Coffee Types/Latte.png",
      title: "Latte",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 320,
    },
    {
      img: "public/images/Coffee Types/Macchiato.png",
      title: "Macchiato",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 260,
    },
    {
      img: "public/images/Coffee Types/Mocha.png",
      title: "Mocha",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 310,
    },
    {
      img: "public/images/Coffee Types/Cappuccino.png",
      title: "Cappuccino",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 265,
    },
    {
      img: "public/images/Coffee Types/Espresso.png",
      title: "Espresso",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 355,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CoffeeCategory id="menu">
      <CoffeeTwo>
        <MainText>
          <h1>Trending in Barista</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            maiores a dolorum quae sunt omnis vel dignissimos sit! Corporis ea
            incidunt in velit illum! Facilis omnis eius temporibus iure commodi!
          </p>
        </MainText>
        <Image2>
          <img src="public/images/coffee-3.png" alt="" />
        </Image2>
      </CoffeeTwo>
      <Slides>
        <Slider {...settings}>
          {Types.map((item, i) => (
            <Services key={i}>
              <Text>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </Text>
              <Image3>
                <img src={item.img} alt="" />
              </Image3>
              <Foot>
                <p>Rs {item.price}</p>
                <button
                  className="button"
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  ORDER NOW
                </button>
              </Foot>
            </Services>
          ))}
        </Slider>
      </Slides>
    </CoffeeCategory>
  );
};

export default Category;

const CoffeeCategory = styled.div`
  background-color: var(--main);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
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

const Image2 = styled.div`
  img {
    height: 250px;
    width: 200px;
    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }
`;

const CoffeeTwo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Slides = styled.div`
  width: 90%;
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
  margin-top: 20px;
  margin-left: 10px;

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

const Image3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100px;
    width: 100px;
    padding: 4px;
    @media (max-width: 768px) {
      height: 100px;
      width: 100px;
    }
  }
`;

const Foot = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  p {
    font-weight: bold;
    font-size: 20px;
  }
`;
