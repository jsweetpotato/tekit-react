// import React from 'react';

function FormControl() {
    return (
      <div role="group">
        <label htmlFor="search" className="sr-only">
          검색어
        </label>
        <input id="search" type="search" placeholder="검색어를 입력해주세요." />
      </div>
    );
  }
  

// 리액트 파일 + JSX 코드를 해석하면 다음과 같습니다. 
// const FormControl = () => (
//   React.createElement('div', { className: 'formControl'}, 
//     React.createElement('label', {},
//       '사용자 이름 ',
//       React.createElement('input', { type: 'text', name: 'username' }),
//     )
//   )
// )

export default FormControl;