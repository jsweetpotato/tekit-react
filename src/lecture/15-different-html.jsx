import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// HTML vs. JSX (HTML 아님, 문법은 XML과 유사)

// JavaScript는 예약어를 변수 이름 또는 함수 이름으로 사용할 수 없음
// const for = () => {};

const data = {
  greetingMessage: ["hello!", "react."],
  message: "리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스 라이브러리입니다.",
};

const createApp = (data, options = {}) => {
  return (
    <div id="app">
      <h1>
        {data.greetingMessage[0].toUpperCase()}
        <br />
        {data.greetingMessage[1].toUpperCase()}
      </h1>
      <p>{data.message}</p>
      <form>
        {/* html과 예약어를 다르게 써줘야 한다. class -> className, for -> htmlFor*/}
        <label htmlFor="searchKeyword" className="sr-only">
          검색
        </label>

        {/* html은 대소문자를 구분하지 않는다. JSX는 구분한다. */}
        {/* <FORM></FORM> FORM is not defined */}

        <input id="searchKeyword" type="search" placeholder="검색" />

        {/* 밑에 처럼 camelCase로 사용하면 컴파일이 안된다. 그냥 html 쓸때처럼 하이픈 써도 data나 aria는 알아서 잘 해준다. */}
        {/* <input dataIdentity="searchKeyword" type="search" placeholder="검색" ariaLabel="키워드 검색" /> */}

        {/* HTML은 대소문자를 구분하지 않는다.  */}
        {/* HTML에서 인라인 스타일은 CSS 선언을 문자 값으로 연이어 설정합니다. */}
        {/* <FORM style="margin-block: 8px; border-radius: 4px; padding: 16px; background-color: #f0f6f8">
        </FORM> */}
        {/* 인라인 스타일은 객체로 전달해야한다. */}
        <input
          style={styles.input}
          data-identity="searchKeyword"
          type="search"
          placeholder="검색"
          aria-label="키워드 검색"
        />
      </form>
    </div>
  );
};

const rootElement = document.getElementById("root");
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(
  createApp(data, {
    label: "중요도",
    isDisabled: false,
    min: 0,
    step: 1,
    max: 20,
  })
);

const styles = {
  form: {
    "margin=block": "8px",
    "border-radius": "4px",
    padding: "16px",
    "background-color": "#f0f6f8",
  },
  input: {
    padding: "4px 6px",
    color: "#3d3b3f",
  },
};
