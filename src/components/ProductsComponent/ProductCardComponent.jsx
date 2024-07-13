import React from "react";
import RatingComponent from "../RatingComponent";
import { Link } from "react-router-dom";
import "./ProductCardComponent.scss";

function ProductCardComponent({
  id,
  image,
  name,
  price,
  rating,
  horizontal = false,
}) {
  if (horizontal) {
    return (
      <Link to={`/product/${id}`}>
        <div className="card__horizontal">
          <img
            src={image}
            alt="img"
          />
          <div className="card__horizontal--content">
            <p>{name}</p>
            <div className="card__horizontal--rating">
              <RatingComponent rating={rating} />
            </div>
            <div className="card__horizontal--price">
              {price}
              <del>${price * 1.24}</del>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <Link to={`/product/${id}`}>
      <div className="card">
        <img
          src={image}
          alt="logo"
        />
        <div className="card__content">
          <p className="card__title">{name}</p>
          <div className="card__rating">
            <RatingComponent rating={rating} />
          </div>
          <div className="card__price">
            ${price} <del>${price * 1.24}</del>
            <span>24% Off</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCardComponent;
