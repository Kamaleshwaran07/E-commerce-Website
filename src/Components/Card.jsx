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
    <div>
      <>
        <div>
          <div class="card">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
              <ul class="fa-ul">
                <li>
                  <h1>{item.name}</h1>
                </li>
                <li>
                  <span class={item.discountClass}>
                    <h3>Rs.{item.price}</h3>
                  </span>
                  {discountvalue == "true" && (
                    <span >
                      <h3>Rs.{discountedprice}</h3>
                    </span>
                  )}
                </li>
              </ul>
              {status ? (
                <button onClick={AddCart}>Add to Cart</button>
              ) : (
                <button onClick={RemoveCart}>Remove from Cart</button>
              )}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Card;
