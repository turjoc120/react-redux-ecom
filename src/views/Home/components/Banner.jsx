import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const banner = {
    image: "fila_black.jpg",
    title: "Epic Deals",
    text:
      "Shop early,Save Now!",
    link: "/all",
  };
  return (
    <div className="container main-banner-container my-4">
      <div className="main-banner-content">
        <div className="main-banner-text">
          <h4 className="display-4 main-banner-title">{banner.title}</h4>
          <p className="lead">{banner.text}</p>
          <p>
            <NavLink className="btn btn-primary btn-lg" to={banner.link} exact>
              Shop Now
            </NavLink>
          </p>
        </div>
        <img
          className="main-banner-image"
          src={`https://image.freepik.com/free-vector/big-sale-3d-pink-background-with-dots_52683-31996.jpg`}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
