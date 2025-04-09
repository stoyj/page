//✅ 2. App.js – използваме HelloWorld компонента:
import React from "react";
import HelloWorld from "./HelloWorld"; // Вземаме компонента от другата стая

function App() {
  return (
    <div>
      <HelloWorld /> {/* Вмъкваме компонента тук */}
    </div>
  );
}

export default App;
