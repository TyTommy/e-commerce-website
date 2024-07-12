import React from "react";
import "./TopRatedProductsStyles.scss";
import Sneakers from "../../assets/Sneakers.png";

const TopRatedProducts = () => {
  return (
    <>
      <div className="topRatedProducts">
        <div className="container">
          <h3>MOST TOP RATED PRODUCTS</h3>
          <div className="topRatedProducts__wrapper">
            <div className="topRatedProducts__content">
              <img src={Sneakers} alt="img" />
              <div className="topRatedProducts__box">
                <p>Blue Swade Nike Sneakers</p>
                <div class="card__rating">★★★★★</div>
                <div class="card__price">
                  $499<del>$599</del>
                </div>
              </div>
            </div>

            <div className="topRatedProducts__content">
              <img src={Sneakers} alt="img" />
              <div className="topRatedProducts__box">
                <p>Blue Swade Nike Sneakers</p>
                <div class="card__rating">★★★★★</div>
                <div class="card__price">
                  $499<del>$599</del>
                </div>
              </div>
            </div>

            <div className="topRatedProducts__content">
              <img src={Sneakers} alt="img" />
              <div className="topRatedProducts__box">
                <p>Blue Swade Nike Sneakers</p>
                <div class="card__rating">★★★★★</div>
                <div class="card__price">
                $499<del>$599</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRatedProducts;
