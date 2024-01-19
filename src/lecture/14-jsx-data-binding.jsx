import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const data = {
  greetingMessage: ["hello!", "react."],
  message: "리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스 라이브러리입니다.",
};

const createApp = ({ greetingMessage: [firstMessage, lastMessage], message }, options = {}) => {
  console.log(options);
  return (
    <div id="app">
      <h1>
        {firstMessage.toUpperCase()}
        <br />
        {lastMessage.toUpperCase()}
      </h1>
      <p>{message}</p>
      <form>
        {/* 이렇게 하면 안됨 */}
        {/* <input aria-label="중요도" type="range" disabled="options.isDisabled"/> */}

        {/* 이렇게 해야함 */}
        <input
          min={options.min}
          max={options.max}
          step={options.step}
          type="range"
          aria-label={options.label}
          disabled={options.isDisabled}
        />
        <button type="submit">보내기</button>
      </form>
    </div>
  );
};

const rootElement = document.getElementById("root");
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(
  createApp(data, { label: "important", isDisabled: false, min: 0, step: 1, max: 20 })
);
