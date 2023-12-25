import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaPhoneAlt,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <PageContacts id="contact">
      <ContactField>
        <h1>Contacts</h1>
        <p className="display">
          <MdEmail /> Barista@gmail.com
        </p>
        <p className="display">
          <FaPhoneAlt /> +977-9845******
        </p>
        <SocialLinks>
          <a href="#" className="color">
            <FaFacebook />
          </a>
          <a href="#" className="color">
            <FaInstagram />
          </a>
          <a href="#" className="color">
            <FaTwitter />
          </a>
          <a href="#" className="color">
            <FaLinkedin />
          </a>
        </SocialLinks>
      </ContactField>
      <Location>
        <Map>
          <h1>Cafe Locations</h1>
          <p>Find The Best Taste Here</p>
          <h2>
            FIND YOUR TASTE <FaArrowRight />
          </h2>
        </Map>
      </Location>
      <NewMember>
        <h1>New Around!</h1>
        <input type="email" placeholder="E-mail" className="input"></input>
        <a href="#">
          <button className="button">BECOME MEMBER</button>
        </a>
      </NewMember>
    </PageContacts>
  );
};

export default Contact;

const PageContacts = styled.div`
  background-color: var(--main);
  width: 100%;
  height: 100vh;
  max-height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
`;

const ContactField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  font-size: 30px;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const NewMember = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  h1 {
    margin: 0;
  }

  input {
    height: 40px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    width: 17rem;
    padding-left: 20px;

    &:focus {
      outline: none;
    }

    margin: 0;
  }

  @media (max-width: 768px) {
    input {
      width: 100%;
    }
  }
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Map = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
