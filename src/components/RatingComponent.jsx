import React from "react";

function RatingComponent({ rating }) {
  const stars = Array.from({ length: 5 }).reduce((acc, _, index) => {
    return acc + (index + 1 < rating ? "★" : "☆");
  }, "");

  return <div>{stars}</div>;
}

export default RatingComponent;
