// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// const products = [
//   {
//     id: 1,
//     name: "Bluetooth Headphones",
//     image:
//       "https://images.pexels.com/photos/11199906/pexels-photo-11199906.jpeg?auto=compress&cs=tinysrgb&w=600",
//     price: "59.99",
//   },

//   {
//     id: 2,
//     name: "Smartwatch",
//     image:
//       "https://cdn.pixabay.com/photo/2014/07/31/23/01/clock-407101_1280.jpg",
//     price: "149.99",
//   },

//   {
//     id: 3,
//     name: "Gaming Mouse",
//     image:
//       "https://cdn.pixabay.com/photo/2013/12/31/16/22/mouse-236901_1280.jpg",
//     price: "39.99",
//   },
// ];

// const { cart, addToCart, clearCart } = useContext(CartContext);

// const Products = () => {
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//     alert(`${product.name} беше добавен в количката! 🛒`);
//   };

//   const toggleCart = () => {
//     setShowCart(!showCart);
//   };

//   return (
//     <section className="products">
//       <h2>Нашите продукти</h2>

//       {/* Бутона за показване на количката */}
//       <button className="view-cart-button" onClick={toggleCart}>
//         {showCart ? "Скрий количката" : "Виж количката"}
//       </button>

//       {/* Количката */}
//       {showCart && (
//         <div className="cart">
//           <h2>🛒 Твоята количка</h2>
//           <ul>
//             {cart.map((item, index) => (
//               <li key={index}>
//                 {item.name} – {item.price} лв.
//               </li>
//             ))}
//           </ul>

//           <button
//             onClick={() => {
//               alert("✅ Поръчката е изпратена!");
//               clearCart(); // ЕТО ГО! Тук се вика clearCart
//             }}
//           >
//             Поръчай 🛍️
//           </button>
//         </div>
//       )}

//       {/* Продуктите */}
//       <div className="product-cards">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="product-image"
//             />
//             <h3>{product.name}</h3>
//             <p className="product-price">${product.price}</p>
//             <button className="buy-button" onClick={() => addToCart(product)}>
//               Добави в количката
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Products;

import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Products() {
  const { cart, addToCart, clearCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const products = [
    { name: "🎧 Headphones", price: 50 },
    { name: "📱 Phone", price: 800 },
    { name: "💻 Laptop", price: 1500 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛍️ Продукти</h2>
      {products.map((product, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>{product.name}</strong> – {product.price} лв.
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => addToCart(product)}
          >
            Добави в количката
          </button>
        </div>
      ))}

      <button
        onClick={() => setShowCart(!showCart)}
        style={{ marginTop: "20px" }}
      >
        {showCart ? "Скрий количката" : "🛒 Виж количката"}
      </button>

      {showCart && (
        <div
          style={{
            marginTop: "20px",
            borderTop: "1px solid gray",
            paddingTop: "10px",
          }}
        >
          <h3>🛒 Твоята количка</h3>
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
            <button
              onClick={() => {
                alert("✅ Поръчката е изпратена!");
                clearCart();
              }}
              style={{ marginTop: "10px" }}
            >
              Поръчай
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Products;

// Супер! 😍 Ще добавим реални изображения за продуктите и ще започнем изграждането на функционалност за количка, където потребителят може да добавя продукти.

// Ще го направим стъпка по стъпка, лесно и ясно.

// Можеш ли стъпка по стъпка да ми помогнеш със всичко което трябва да направя и разбера като на дете 🔜 Следваща стъпка? Избор:
// Да покажем списъка с продукти в количката (като отделна секция или страница)?

// Да използваме Context API или Redux, за да е глобално състоянието на количката?

// Да добавим страница “Количка” с бутон "Поръчай"?

// Кажи ми кое искаш да направим следващо – и го правим веднага! 😊

// ✅ Следваща стъпка:
// 👉 Да покажем списъка с продукти в количката (като отделна секция)

//🧩 Какво ще направим:
// 1.Ще покажем какво има в количката.

// 2.Ще добавим бутон, който показва и скрива списъка.

// 3.Ще покажем името и цената на продуктите.

//  id: 1,
// name: "Bluetooth Headphones",
// image:
// "https://images.pexels.com/photos/11199906/pexels-photo-11199906.jpeg?auto=compress&cs=tinysrgb&w=600",

//   id: 2,
// name: "Smartwatch",
// image:
// "https://cdn.pixabay.com/photo/2014/07/31/23/01/clock-407101_1280.jpg",

// id: 3,
// name: "Gaming Mouse",
// image:
// "https://cdn.pixabay.com/photo/2013/12/31/16/22/mouse-236901_1280.jpg",
