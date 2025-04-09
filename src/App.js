//✅ 2. App.js – използваме HelloWorld компонента:
import React from "react";
import HelloWorld from "./HelloWorld"; // Вземаме компонента от другата стая

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <HelloWorld /> {/* Вмъкваме компонента тук */}
    </div>
  );
}

export default App;
