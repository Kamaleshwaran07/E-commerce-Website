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
          <img src={item.image} class="card-img-top" id="image" alt="picture" />
          {discountvalue == "true" && (
            <span
              id="caption"
              className="d-flex justify-content-end card-text text-light rounded"
            >
              Deal of the Day
            </span>
          )}
        </div>
        <div class="card-body card-text">
          <ul class="fa-ul">
            <li>
              <h1>{item.name}</h1>
            </li>
            <li className="d-flex">
              <span class={item.discountClass}>
                <h3>Rs.{item.price}</h3>
              </span>
              {discountvalue == "true" && (
                <span style={{ marginLeft: "10px" }}>
                  <h3>Rs.{discountedprice}</h3>
                </span>
              )}
            </li>
            <li>
              <span>
                <i className= ""></i>
              </span>
            </li>
          </ul>
          {status ? (
            <button onClick={AddCart}>Add to Cart</button>
          ) : (
            <button onClick={RemoveCart}>Remove from Cart</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
