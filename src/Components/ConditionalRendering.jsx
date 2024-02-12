import React from 'react';
import Card from './Card';
const ConditionalRendering = ({ product, cartValue, setCartValue}) => {
    return (
      <div>
        {product.map((item) => {
          return (
            <>
                  <Card item={item} cartValue={cartValue} setCartValue={setCartValue} />
            </>
          );
        })}
      </div>
    );
};

export default ConditionalRendering;