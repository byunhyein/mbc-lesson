// 한 줄 주석
/*
==================================
여러 줄...?
==================================
여러 줄 주석
==================================
*/

/* Primitive type [원시형] */

// number
// let num1 = 1;
// console.log(typeof num1); // typeof 한 덩어리가 연산자. (데이터의 자료형을 계산하는 글자)
// console.log("num1", num1, typeof num1); // 변수명, 데이터, 데이터 타입 ➡ 을 출력하기.
//
// let num2 = 2;
// console.log("num2", num2, typeof num2);
// let sum = num1 + num2;
// console.log(sum);
// console.log(typeof sum);

// string
let str = "안녕";
let str2 = '"하세요"'; // 작은 따옴표 안에 큰 따옴표 넣기
console.log(typeof str, typeof str2);
console.log(str + str2);
console.log(str - str2); // 출력값! : NaN (Not a Number)

// boolean
let isTrue = true; // true는 예약 식별자이므로 변수명으로 사용할 수 없음
console.log(isTrue);
let isFalse = false;
console.log(typeof isFalse); // false 는 boolean 으로 출력됨.

// 자연어 : 사람에게 쉬운 언어 (남녀노소에 관계 없이 사용 가능한)
// 고급 언어 : 성인에게 쉬운 언어 (고급 언어의 끝판왕은 프롬프트인데, 사실 프롬프트는 '자연어' 라고 함)
// 저급 언어 : 컴퓨터에게 쉬운 언어 (완전 저급 언어는 수학의 끝판왕들만 다룰 수 있었음)

/* ----------------------- */
/* -----참조형 (reference type)----- */
/* ----------------------- */

//object (객체 ➡ 이름 : 데이터)
// let obj = {} (객체 문법)
// {} = 객체 리터럴. 약속된 기호
let obj = {
  name: "mango",
  age: 5,
  log: function () {
    console.log("👴🏻👽🐟지금내상태"); //객체 {} 안에 선언되어 있는 log : 메소드 Method
  },
};
console.log(typeof obj);
console.log(obj.name);
obj.log();

//array
let arr = [
  "mango",
  5,
  function (emo) {
    console.log(emo);
  },
];
console.log(typeof arr); // arr이 object로 나오는 이유 : 배열도 객체의 일종이므로 | nodejs에서 찍으면 배열로 나온다?
console.log(arr[1 + 1]);
console.log(arr[1]);
arr[2]("😥");
arr[2]("🦽🦽🦽🦽🦽");
//arr가 왤캐 어렵지

//function ()
let fn = function () {
  // 함수 : 기능을 예약해 놓는 시스템! 이라고 보면 된다
  console.log("끝");
};
console.log(typeof fn);
fn(); //fn은 옆에 () 를 꼭 붙여줘야 실행됨. ()이 곧 함수의 값이니까... | 그러니 출력값은 "끝"! 이 나온다.

// ^▽^ ㅎㅅㅎ `ㅂ´* ㅍ_ㅍ 6v6

// 26.06.25 (목)
// 특수유형
let temp = null; //값이 없음. [temp 변수를 null로 초기화 (init) 한다]

//템플릿 리터럴 : `${}` [텍스트와 변수를 간단히 연결. | ${} 안에는 변수와 식을 쓸 수 있고, 밖에는 텍스트가 출력됨.]
console.log(`temp 자료형:${typeof temp}/// temp의 데이터 : ${temp}`); // 아 어려운디

let x; //undefined : 선언은 되었으나, 값이 할당되지 않음. 값이 안 정해짐. 그냥 말 그대로 미지수... | 그러니까, 오류가 아니다
console.log(`x의 자료형:${typeof x}/// x의 데이터: ${x}`);