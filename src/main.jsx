<<<<<<< HEAD
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const data = {
  greetingMessage: ["hello!", "react."],
  message: "리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스 라이브러리입니다.",
};

const createApp = ({ greetingMessage }) => {
  return (
    <div id="app">
      <h1>
        {greetingMessage[0].toUpperCase()}
        <br />
        {greetingMessage[1].toUpperCase()}
      </h1>
      <p>{data.message}</p>
      <form>
        <input aria-label="중요도" type="range" />
        <button type="submit">보내기</button>
      </form>
    </div>
  );
};

const rootElement = document.getElementById("root");
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(createApp(data, true));
=======
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
>>>>>>> lecture
