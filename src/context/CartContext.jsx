// 🔜 Следваща стъпка:
// 👉 Ще направим количката глобална с Context API, за да я виждаме навсякъде в приложението.

//🧠 Какво значи "глобална количка"?

// До сега:

//Количката беше вътре само в един компонент (Products.jsx).

//Ако отидем на друга страница – количката ще изчезне. ❌

// Сега: ✅ Ще използваме Context API, което е начин в React да споделим информация (количката) между всички страници и компоненти.

// 1.🧱 Стъпка 1: Създай нова папка context
// В папка src, създай нова папка с име:
// 📁 context

// 2.Вътре в нея направи нов файл:
// 📄 CartContext.jsx

// ✍️ Стъпка 2: Код за глобална количка
// 🧠 Това ще е „централният мозък“ на количката. Копирай този код в CartContext.jsx:

//📦 Стъпка 3: Обвиваме приложението с CartProvider
// Отвори главния файл на приложението:
//1.📄 src/App.jsx

// 2.Импортирай CartProvider и обвий всичко така:

// 🧠Стъпка 4: Използваме глобалната количка
//Сега отваряш Products.jsx и променяш кода така, че да взима cart и addToCart от контекста:

// 1.Импортирай:

// ✅ Това е! Сега количката е глобална! 🧠🛒 Можеш да я използваш навсякъде в приложението, не само в Products.jsx.

//✅ Какво имаме досега:
// 1.Истински продукти със снимки
// 2.Бутон „Добави в количката“
// 3.Виж количката и списък на продуктите
// 4.Количката е глобална с Context API

//🔜 Следваща стъпка?

//🧩 Ето трите възможности – ти избери:
// 1.➕ Добавим бутон "Поръчай" и да изчистим количката след това?
// 2.📄 Да направим отделна страница "Количка" с React Router (навигация)?
// 3.🎁 Да покажем общата цена на продуктите в количката?

//Кажи ми коя искаш да направим, и ще ти покажа пак стъпка по стъпка – като игра! 😊

// import React, { createContext, useState } from "react";

// // 1. Създаваме контекст
// export const CartContext = createContext();

// // 2. Създаваме компонента, който ще обвие цялото приложение
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

//✅ Това е! Сега количката е глобална! 🧠🛒 Можеш да я използваш навсякъде в приложението, не само в Products.jsx.

//✅ Какво имаме досега:
// 1.Истински продукти със снимки
// 2.Бутон „Добави в количката“
// 3.Виж количката и списък на продуктите
// 4.Количката е глобална с Context API

//
