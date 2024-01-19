import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const anotherData = {
  greetingMessage: ["행복한 아침이야", "아~ 상쾌한 아침"],
  message: ["ㅋㅋ.."],
};
const data = {
  greetingMessage: ["행복한 아침이야", "오늘도 좋은 하루 되렴~"],
  message: ["나날이 성장하는 여러분을 보는 즐거움이 쏠쏠~", "ㅋㅋ.."],
};

// const greet = `안녕~ ${data.greetingMessage[1]}`;

// react는 slot 대신 중괄호를 쓴다. -> react명세에는 slot이라는 단어를 쓰진 않지만 웹 표준에서 slot이라는 키워드역할을 한다 할 수 있다.
const createApp = (data) => (
  <div id="app">
    <h1>
      {data.greetingMessage[0]}
      <br />
      {data.greetingMessage[1]}
    </h1>
    <p>{data.message}</p>
  </div>
);

const rootElement = document.getElementById("root");
const reactDomRoot = createRoot(rootElement);

/* 함수 실행 => JSX -> React.createElement() -> 리액트 요소 : ReactElement */
function render(mode = "data") {
  reactDomRoot.render(createApp(mode === "data" ? data : anotherData));
}

render();

// 버튼 이벤트 핸들링
const button = document.querySelector("button");

// 데이터 전환을 위한 상태 변수
let mode = "data"; // 'data' | 'anotherData'

const handleChangeMessage = () => {
  if (mode.includes("data")) {
    mode = "anotherData";
  } else {
    mode = "data";
  }

  render(mode);
};

button.addEventListener("click", handleChangeMessage);
