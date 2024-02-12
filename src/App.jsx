// import { useState } from 'react'
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
// import Card from './Components/Card'
import ConditionalRendering from "./Components/ConditionalRendering";
import { useState } from "react";

function App() {
  const [cartValue, setCartValue] = useState(0);

  let data = [
    {
      name: "Shirt",
      price: "899",
      discount: "30",
      discountClass: "text-muted text-decoration-line-through",
      discountValue: "true",
      rating: "fa-regular fa-star checked",
    },
    {
      name: "Jeans",
      price: "1299",
      discount: "15",
      discountClass: "text-muted text-decoration-line-through",
      discountValue: "true",
      rating: "fa-regular fa-star checked",
    },
    {
      name: "T-shirt",
      price: "599",
      discount: "",
      discountClass: "",
      discountValue: "false",
      rating: "",
    },
    {
      name: "Trousers",
      price: "499",
      discount: "",
      discountClass: "",
      discountValue: "false",
      rating: "fa-regular fa-star checked",
    },
    {
      name: "Shoes",
      price: "799",
      discount: "50",
      discountClass: "text-muted text-decoration-line-through",
      discountValue: "true",
      rating: "fa-regular fa-star checked",
    },
    {
      name: "Saree",
      price: "599",
      discount: "10",
      discountClass: "text-muted text-decoration-line-through",
      discountValue: "true",
      rating: "",
    },
    {
      name: "Churidhar",
      price: "999",
      discount: "",
      discountClass: "",
      discountValue: "",
      rating: "",
    },
    {
      name: "Tops",
      price: "499",
      discount: "",
      discountClass: "",
      discountValue: "",
      rating: "fa-regular fa-star",
    },
  ];

  const [product, setProducts] = useState(data);
  const [status, setStatus] = useState(true);
  return (
    <div>
      <Navbar cartValue={cartValue} setCartValue={setCartValue} />
      <Header />
      {status ? (
        <ConditionalRendering
          setCartValue={setCartValue}
          cartValue={cartValue}
          product={product}
          setProducts={setProducts}
        />
      ) : (
        " "
      )}
    </div>
  );
}

export default App;
