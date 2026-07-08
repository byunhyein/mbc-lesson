// 1. 명명함수 (이름이 있는 함수)
/* 선언 전에 호출이 포인트 */

명명함수();
function 명명함수(params) {
  console.log("이름 있는 함수");
}

// 2. 익명함수

// 2-1. 표현식 함수
/* 선언 전에 호출하면 오류남
(: function.js:14 Uncaught ReferenceError: 익명함수 is not defined
    at function.js:14:1
(anonymous)	@	function.js:14) 이런식으로 */

const 표현식함수 = function (m1, m2) {
  document.write(`오늘 점심은 : ${m1}와 (과) ${m2}(이) 야<br>`);
};
표현식함수("떡볶이", "치즈돈가스");
표현식함수("라면", "김밥");

// 2-2. 즉시 실행 함수
(function (a, b) {
  document.write(`<h1>즉시 실행 함수?????</h1><hr>
    ${a + b}`);
})(1, 2);

// 2-3. 화살표 함수 = () => {}
// function을 지우고, (소괄호) 와 {중괄호} 사이에 화살표 => 가 들어간다!

// const 화살표함수 = () => {// 1단 변신
// const 화살표함수 = () => document.write(`화살표 함수 <br>`); // 2단 변신 : 중괄호 생략
화살표함수();

const sum = (a, b) => {
  console.log(a + b);
  return; // return은 함수의 종료를 프로그램에게 알려주는 작업으로, 반드시 들어가야 한다. 내가 쓰지 않아도 프로그램이 자동으로 입력한다.
};
sum(50, 10);


()=>{
  return 
}