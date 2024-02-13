import React from "react";
import Card from "./Card";
const ConditionalRendering = ({ product, cartValue, setCartValue }) => {
  return (
    <div className="container row">
      {product.map((item) => {
        return (
          <>
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <Card
                item={item}
                cartValue={cartValue}
                setCartValue={setCartValue}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ConditionalRendering;
