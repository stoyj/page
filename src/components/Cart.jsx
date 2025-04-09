//Ще направим страница "Количка" с React Router стъпка по стъпка! 😊
//📌 Какво ще направим:
// 1.Ще инсталираме React Router.
// 2.Ще създадем нов компонент за страницата „Количка“.
// 3.Ще добавим навигация с React Router, за да можем да преминаваме между страниците: "Продукти" и "Количка".
//npm install react-router-dom

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Твоята количка</h2>
      {cart.length === 0 ? (
        <p>Количката е празна.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} – {item.price} лв.
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div>
          <button onClick={() => clearCart()} style={{ marginTop: "10px" }}>
            Изчисти количката
          </button>
          <button
            onClick={() => alert("✅ Поръчката е изпратена!")}
            style={{ marginTop: "10px" }}
          >
            Поръчай
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
