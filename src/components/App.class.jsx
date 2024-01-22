import React from "react";
// 리액트 함수(형) 컴포넌트 타입
// React.Component Type 2 :: function syntax

// 리액트 컴포넌트 클래스 상속(확자이 서브클래스 extends 수퍼클래스)
// 커스텀컴포넌트 extends React.Component
// App extends React.Component
// 임의의 컴포넌트를 만든다.
class App extends React.Component {
  render() {
    return (
      <div id="app" lang="en">
        <h1>React Application</h1>
      </div>
    );
  }
}

// 모듈 기본 내보내기
export default App;