import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const StarRating = ({ rating_star }) => {
  const stars = Array.from({ length: 5 }, (_, idx) => {
    const val = idx + 0.5;
    return (
      <span key={idx} className="text-[#e59819] text-xs mr-0.5 -mb-1">
        {rating_star >= idx + 1 ? (
          <BsStarFill />
        ) : rating_star >= val ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return <div className="flex items-center">{stars}</div>;
};

export default StarRating;
