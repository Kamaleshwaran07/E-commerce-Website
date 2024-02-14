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
      image:
        "https://cdn.discordapp.com/attachments/1018124413176135700/1207187221334204416/shirts1.png?ex=65debbb6&is=65cc46b6&hm=89755c51a118e30c25a1ba518f66d1fdd35834e9768b1dabfedf0a744278869d&",
      discount: "30",
      discountClass: "text-muted text-decoration-line-through",
      discountValue: "true",
      ratingchecked: "fa-solid fa-star checked",
      ratingunchecked: "fa-solid fa-star",
    },
    {
      name: "Jeans",
      price: "1299",
      image:
        "https://cdn.discordapp.com/attachments/1018124413176135700/1207187220541349929/jeans1.png?ex=65debbb5&is=65cc46b5&hm=c009e0a15b06de97af1f68a6a9ebc6126bffdec4ba6a6a45ad60e4532cbafd6f&",
      discount: "15",
      discountClass: "text-muted text-decoration-line-through",
      discountValue: "true",
      ratingchecked: "fa-solid fa-star checked",
      ratingunchecked: "fa-solid fa-star",
    },
    {
      name: "T-shirt",
      price: "599",
      image:
        "https://cdn.discordapp.com/attachments/1018124413176135700/1207187222789357599/t-shirt1.png?ex=65debbb6&is=65cc46b6&hm=638fe64a0444d2a3dc62e0c995ba79505fb881f34fb0517c905b17523fe1dbc1&",

      discount: "",
      discountClass: "",
      discountValue: "false",
      rating: "",
    },
    {
      name: "Trousers",
      price: "499",
      image:
        "https://cdn.discordapp.com/attachments/1018124413176135700/1207187222130855967/shorts1.png?ex=65debbb6&is=65cc46b6&hm=fbe27978fc6cedc7151b069b459eddd3cc5822cb1ea3c0d46ddba4ee0d17d67c&",
      discount: "",
      discountClass: "",
      discountValue: "false",
      ratingchecked: "fa-solid fa-star checked",
      ratingunchecked: "fa-solid fa-star",
    },
    {
      name: "Shoes",
      price: "799",
      image:
        "https://cdn.discordapp.com/attachments/1018124413176135700/1207187221715882045/shoes1.png?ex=65debbb6&is=65cc46b6&hm=ebd6415ea585e2a3b549d78a1b6e79a7c3026f9ed5e84f3833033b9c4b1cd0a4&",
      discount: "50",
      discountClass: "text-muted text-decoration-line-through",
      discountValue: "true",
      ratingchecked: "fa-solid fa-star checked",
      ratingunchecked: "fa-solid fa-star",
    },
    {
      name: "Saree",
      price: "599",
      image:
        "https://cdn.discordapp.com/attachments/1018124413176135700/1207187220977549332/saree1.png?ex=65debbb5&is=65cc46b5&hm=ebb24aa7a6fe6414bc8ab21553d3bf4eb8eeae4674f8d91eaf7f42a6f75fbaca&",
      discount: "10",
      discountClass: "text-muted text-decoration-line-through",
      discountValue: "true",
      rating: "",
    },
    {
      name: "Chudidhar",
      price: "999",
      image:
        "https://cdn.discordapp.com/attachments/1018124413176135700/1207187220155469824/chudidhar1.png?ex=65debbb5&is=65cc46b5&hm=70104c85845464a6a9946e3470436cccfed8e060fb767ee7e1e89d73ac801bc6&",
      discount: "",
      discountClass: "",
      discountValue: "",
      rating: "",
    },
    {
      name: "Tops",
      price: "499",
      image:
        "https://cdn.discordapp.com/attachments/1018124413176135700/1207187222449627166/tops.png?ex=65debbb6&is=65cc46b6&hm=f11150efbb88cf39b2af1fae316598ae06aaae4ee921aa78c7afca8b1c2a90a7&",
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
