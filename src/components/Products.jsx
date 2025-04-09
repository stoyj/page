import React from "react";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "Bluetooth Headphones",
    image:
      "https://images.pexels.com/photos/11199906/pexels-photo-11199906.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "59.99",
  },
  {
    id: 2,
    name: "Smartwatch",
    image:
      "https://cdn.pixabay.com/photo/2014/07/31/23/01/clock-407101_1280.jpg",
    price: "149.99",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    image:
      "https://cdn.pixabay.com/photo/2013/12/31/16/22/mouse-236901_1280.jpg",
    price: "39.99",
  },
];

const Products = () => {
  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button className="buy-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

// Супер! 😍 Ще добавим реални изображения за продуктите и ще започнем изграждането на функционалност за количка, където потребителят може да добавя продукти.

// Ще го направим стъпка по стъпка, лесно и ясно.

// Можеш ли стъпка по стъпка да ми помогнеш със всичко което трябва да направя и разбера като на дете 🔜 Следваща стъпка? Избор:
// Да покажем списъка с продукти в количката (като отделна секция или страница)?

// Да използваме Context API или Redux, за да е глобално състоянието на количката?

// Да добавим страница “Количка” с бутон "Поръчай"?

// Кажи ми кое искаш да направим следващо – и го правим веднага! 😊
