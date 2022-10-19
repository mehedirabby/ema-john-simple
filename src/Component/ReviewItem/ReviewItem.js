import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, name, price, quantity, img, shipping } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>Name: {name}</p>
          <p>
            <small>Price:${price}</small>
          </p>
          <p>
            <small>Shipping:${shipping}</small>
          </p>
          <p>Quantity:{quantity}</p>
        </div>
        <div className="dlt-container">
          <button onClick={() => handleRemoveItem(id)} className="delete-btn">
            <FontAwesomeIcon
              className="dlt-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
