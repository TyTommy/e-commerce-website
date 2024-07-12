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
      <div className="card__horizontal">
        <img
          src={image}
          alt="img"
        />
        <div className="card__horizontal--content">
          <Link to={`/product/${id}`}>
            <p>{name}</p>
          </Link>
          <div className="card__horizontal--rating">
            <RatingComponent rating={rating} />
          </div>
          <div className="card__horizontal--price">
            {price}
            <del>${price * 1.24}</del>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="card">
      <img
        src={image}
        alt="logo"
      />
      <div className="card__content">
        <Link to={`/product/${id}`}>
          <p className="card__title">{name}</p>
        </Link>
        <div className="card__rating">
          <RatingComponent rating={rating} />
        </div>
        <div className="card__price">
          ${price} <del>${price * 1.24}</del>
          <span>24% Off</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCardComponent;
