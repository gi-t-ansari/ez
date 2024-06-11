import React from "react";
import mainLogo from "../../assets/main-logo.png";
import { ServiceCard } from "../../components";
import { SERVICE_CARDS_DATA } from "../../config";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <div className="main-logo-container">
          <img src={mainLogo} className="main-logo" alt="main-logo" />
        </div>
        <h1 className="main-heading">Suite Of Business Support Services</h1>
        <p className="main-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed
        </p>
      </div>
      <div className="service-cards-container">
        {SERVICE_CARDS_DATA?.map(({ name, description, imgSrc, imgAlt }) => (
          <ServiceCard
            key={name}
            name={name}
            description={description}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
