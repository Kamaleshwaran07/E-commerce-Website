import React, { useState } from "react";

const Card = ({ item, setCartValue }) => {
  const [status, setStatus] = useState(true);
  const AddCart = () => {
    setStatus(false);
    setCartValue((val) => val + 1);
  };
  const RemoveCart = () => {
    setStatus(true);
    setCartValue((val) => val - 1);
  };
  let price = Number(item.price);
  let discount = Number(item.discount) / 100;
  let discountedprice = price - price * discount;
  let discountvalue = item.discountValue;

  return (
    <>
      <div class="card bg-light">
        <div className="card-img">
          <img
            src={item.image}
            class="card-img-top"
            id="image"
            alt="picture"
            height={"300em"}
          />
          {discountvalue == "true" && (
            <span
              id="caption"
              className="d-flex justify-content-end card-text text-light rounded"
            >
              Deal of the Day
            </span>
          )}
        </div>
        <div class="card-body card-text text-center">
          <ul class="fa-ul">
            <li>
              <h4>{item.name}</h4>
            </li>
            <li className="d-flex justify-content-center">
              <span class={item.discountClass}>
                <p>Rs.{item.price}</p>
              </span>
              {discountvalue == "true" && (
                <span style={{ marginLeft: "10px" }}>
                  <p>Rs.{discountedprice}</p>
                </span>
              )}
            </li>
            <li>
              <span>
                <i className={item.ratingchecked}></i>
                <i className={item.ratingchecked}></i>
                <i className={item.ratingchecked}></i>
                <i className={item.ratingchecked}></i>
                <i className={item.ratingunchecked}></i>
              </span>
            </li>
          </ul>
          <div className="d-flex justify-content-center">
            {status ? (
              <button className="btn btn-primary" onClick={AddCart}>
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            ) : (
              <button className="btn btn-danger" onClick={RemoveCart}>
                Remove from Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
