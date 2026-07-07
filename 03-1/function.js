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
  document.write(`오늘 점심은 : ${m1}와 (과) ${m2}야`);
};
표현식함수("떡볶이", "치즈돈가스");

// 2-2. 즉시 실행 함수
// 2-3. 화살표 함수
