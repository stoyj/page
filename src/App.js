//✅ 2. App.js – използваме HelloWorld компонента:
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Products from "./components/Products"; // правилен импорт
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <nav style={{ padding: "10px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>
            Продукти
          </Link>
          <Link to="/cart">Количка</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

// Страхотно! Щом вече имаш готов проект, който се казва HelloWorld, да го направим заедно стъпка по стъпка, с ясни инструкции в кой файл какво да пишеш. Ще добавим новия компонент AboutMe към съществуващия проект.

// 🧭 Какво ще направим:
// Ще добавим меню с бутони: Home | About Me

// Ще показваме различно съдържание според избрания бутон

// 👉 Искаш ли да добавим още „страници“ като:
// 🛍️ Продукти
// 📞 Контакти
// 📷 Галерия
// 💬 Форма за обратна връзка

// Кажи и ще го направим на момента – лесно и красиво! 😊

//🔜 Следваща стъпка?

//🧩 Ето трите възможности – ти избери:

// ➕ Добавим бутон "Поръчай" и да изчистим количката след това? - Направено: (✅ Готово! Натисни „Поръчай“ и количката ще се изчисти 🛒)

// 📄 Да направим отделна страница "Количка" с React Router (навигация)? ()

// 🎁 Да покажем общата цена на продуктите в количката?

// 💬 Кажи ми коя искаш да направим, и ще ти покажа пак стъпка по стъпка – като игра! 😊
