import React from "react";
import { NavLink } from "react-router-dom";

const ItemBanners = () => {
  let itemData = [
    {
      image: "https://image.freepik.com/free-photo/smiley-little-girl-red-dress_23-2148984788.jpg",
      title: "Kids Fashion",
      text: `Limited Offer`,
      link: "/category/kids",
      percentage: "30",
    },
    {
      image: "https://image.freepik.com/free-photo/happy-boy-little-cute-adorable-white-t-shirt-blue-jeans-pink_179666-322.jpg",
      title: "Men's Collectons",
      text: `New Arrivals`,
      link: "/category/men",
      percentage: "50",
    },
  ];
  function generateItemBanners() {
    return itemData.map((item, index) => {
      return (
        <div className="item-container shadow" key={index}>
          <div className="item-content">
            <p className="item-banner-title my-1">{item.title}</p>
            <h4 className="mb-3">
              {item.text} <br /> Up to {item.percentage}%
            </h4>
            <NavLink className="btn btn-primary btn-sm" to={item.link} exact>
              Shop Now
            </NavLink>
          </div>
          <img
            className=" img-fluid"
            src={item.image}
            alt="banner"
          />
        </div>
      );
    });
  }
  return (
    <div className="container item-banners mb-4">{generateItemBanners()}</div>
  );
};

export default ItemBanners;
