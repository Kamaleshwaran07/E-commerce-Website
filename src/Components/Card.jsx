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
  console.log(price);
  console.log(discount);
  console.log(discountedprice);

  return (
    <div>
      <>
        <div>
          <h1>{item.name}</h1>
          <h3>Rs.{item.price}</h3>
          <h3>Rs.{discountedprice}</h3>
          {status ? (
            <button onClick={AddCart}>Add to Cart</button>
          ) : (
            <button onClick={RemoveCart}>Remove from Cart</button>
          )}
        </div>
      </>
    </div>
  );
};

export default Card;
