import React from "react";
import "./ShopNowStyles.scss";
import ShopNowImg from "../../assets/shopNow.png";

const ShopNow = () => {
  return (
    <>
      <div className="shopNow">
        <div className="container">
          <div className="shopNow__content">
            <h2>Adidas Men Running Sneakers</h2>
            <p className="shopNow__text">Performance and design. Taken right to the edge.</p>
            <button className="shopNow__btn">Shop Now</button>
          </div>

          <div className="shopNow__img">
            <img src={ShopNowImg} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopNow;
