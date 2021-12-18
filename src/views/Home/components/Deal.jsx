import React from "react";
import { NavLink } from "react-router-dom";

const Deal = () => {
  const deal = {
    image: "flare_dress.png",
    title: "Latest In Ladies Fashion",
    text:
      "Deals are targeting consumers who want to get their holiday shopping done early",
    link: "/category/women",
  };
  return (
    <div className="container deals-contaner my-5">
      <div className="deals-content shadow ">
        <img
          className="deals-image img-fluid "
          src={'https://image.freepik.com/free-photo/perky-girl-stylish-glasses-stares-amazement-walking-pink-wall-brunette-culottes-orange-blouse-posing-with-red-handbag_197531-14254.jpg'}
          alt="#"
        />
        <div className="deals-text">
          <div className="heading-block">
            <h1 className="deals-title mb-4">{deal.title}</h1>
            <p className="text mb-4">{deal.text}</p>
            <NavLink className="btn btn-primary btn" to={deal.link} exact>
              Shop Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
