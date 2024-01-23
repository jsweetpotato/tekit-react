import React from "react";
import { createRoot } from "react-dom/client";

// 함수 컴포넌트 (important syntax!!!)
// declare function
function App() {
  return null;
}

// arrow function
// const App = () => {};

createRoot(document.getElementById("root")).render(<App />);
