// import { useState } from 'react'
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
// import Card from './Components/Card'
import ConditionalRendering from "./Components/ConditionalRendering";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const [cartValue, setCartValue] = useState(0); //Initial Cart Value zero

  let data = [
    {
      name: "Shirt",
      price: "899",
      image: "./src/assets/shirts1.png",
      discount: "30",
      discountClass: "text-muted text-decoration-line-through",
      discountValue: "true",
      ratingchecked: "fa-solid fa-star checked",
      ratingunchecked: "fa-solid fa-star",
    },
    {
      name: "Jeans",
      price: "1299",
      image: "./src/assets/jeans1.png",
      discount: "15",
      discountClass: "text-muted text-decoration-line-through",
      discountValue: "true",
      ratingchecked: "fa-solid fa-star checked",
      ratingunchecked: "fa-solid fa-star",
    },
    {
      name: "T-shirt",
      price: "599",
      image: "./src/assets/t-shirt1.png",
      discount: "",
      discountClass: "",
      discountValue: "false",
      rating: "",
    },
    {
      name: "Trousers",
      price: "499",
      image: "./src/assets/shorts1.png",
      discount: "",
      discountClass: "",
      discountValue: "false",
      ratingchecked: "fa-solid fa-star checked",
      ratingunchecked: "fa-solid fa-star",
    },
    {
      name: "Shoes",
      price: "799",
      image: "./src/assets/shoes1.png",
      discount: "50",
      discountClass: "text-muted text-decoration-line-through",
      discountValue: "true",
      ratingchecked: "fa-solid fa-star checked",
      ratingunchecked: "fa-solid fa-star",
    },
    {
      name: "Saree",
      price: "599",
      image: "./src/assets/saree1.png",
      discount: "10",
      discountClass: "text-muted text-decoration-line-through",
      discountValue: "true",
      rating: "",
    },
    {
      name: "Chudidhar",
      price: "999",
      image: "./src/assets/chudidhar1.png",
      discount: "",
      discountClass: "",
      discountValue: "",
      rating: "",
    },
    {
      name: "Tops",
      price: "499",
      image: "./src/assets/tops.png",
      discount: "",
      discountClass: "",
      discountValue: "",
      ratingchecked: "fa-solid fa-star checked",
      ratingunchecked: "fa-solid fa-star",
    },
  ];

  const [product, setProducts] = useState(data); //Passing the data to the useState and it has given as props to Conditional Rendering component
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
      <Footer />
    </div>
  );
}

export default App;
