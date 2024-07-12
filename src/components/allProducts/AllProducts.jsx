import React from "react";
import "./AllProductsStyles.scss";
import Nike from "../../assets/nike-product.png";

const AllProducts = () => {
  return (
    <>
      <div className="allProducts">
        <div className="container">
          <h1>All Products</h1>
          <div className="allProducts__card">
            <div className="card">
              <img src={Nike} alt="logo" />
              <div className="card__content">
                <div class="card__title">Nike Air Max 270 React</div>
                <div class="card__rating">★★★★★</div>
                <div class="card__price">
                  $299,43 <del>$534,33</del>
                  <span>24% Off</span>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={Nike} alt="" />
              <div className="card__content">
                <div class="card__title">Nike Air Max 270 React</div>
                <div class="card__rating">★★★★★</div>
                <div class="card__price">
                  $299,43 <del>$534,33</del>
                  <span>24% Off</span>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={Nike} alt="" />
              <div className="card__content">
                <div class="card__title">Nike Air Max 270 React</div>
                <div class="card__rating">★★★★★</div>
                <div class="card__price">
                  $299,43 <del>$534,33</del>
                  <span>24% Off</span>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={Nike} alt="" />
              <div className="card__content">
                <div class="card__title">Nike Air Max 270 React</div>
                <div class="card__rating">★★★★★</div>
                <div class="card__price">
                  $299,43 <del>$534,33</del>
                  <span>24% Off</span>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={Nike} alt="" />
              <div className="card__content">
                <div class="card__title">Nike Air Max 270 React</div>
                <div class="card__rating">★★★★★</div>
                <div class="card__price">
                  $299,43 <del>$534,33</del>
                  <span>24% Off</span>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={Nike} alt="" />
              <div className="card__content">
                <div class="card__title">Nike Air Max 270 React</div>
                <div class="card__rating">★★★★★</div>
                <div class="card__price">
                  $299,43 <del>$534,33</del>
                  <span>24% Off</span>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={Nike} alt="" />
              <div className="card__content">
                <div class="card__title">Nike Air Max 270 React</div>
                <div class="card__rating">★★★★★</div>
                <div class="card__price">
                  $299,43 <del>$534,33</del>
                  <span>24% Off</span>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={Nike} alt="" />
              <div className="card__content">
                <div class="card__title">Nike Air Max 270 React</div>
                <div class="card__rating">★★★★★</div>
                <div class="card__price">
                  $299,43 <del>$534,33</del>
                  <span>24% Off</span>
                </div>
              </div>
            </div>
          </div>

          <button className="allProducts__btn">Load More</button>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
