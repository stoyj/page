import React from "react";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "Amazing Rocket",
    image: "https://via.placeholder.com/150", // Постави тук URL на снимка
    price: "199.99",
  },
  {
    id: 2,
    name: "Super Headphones",
    image: "https://via.placeholder.com/150",
    price: "99.99",
  },
  {
    id: 3,
    name: "Smart Phone 3000",
    image: "https://via.placeholder.com/150",
    price: "799.99",
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
