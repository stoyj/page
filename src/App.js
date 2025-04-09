//✅ 2. App.js – използваме HelloWorld компонента:
import React, { useState } from "react";
import AboutMe from "./components/AboutMe";
import Products from "./components/Products"; // новият компонент

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "about") return <AboutMe />;
    if (page === "products") return <Products />;
    return (
      <div>
        <h2>Welcome to the Hello World App!</h2>
        <p>This is the home page content.</p>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Hello World App</h1>

      {/* Навигация */}
      <nav style={{ marginBottom: "1rem" }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About Me</button>
        <button onClick={() => setPage("products")}>Products</button>
      </nav>

      {/* Съдържание */}
      {renderPage()}
    </div>
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
