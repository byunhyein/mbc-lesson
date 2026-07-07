/* 변수 : 두 번 이상 사용할 값을 저장하는 그릇 */

/* 키워드 종류 : let, const, var */
// let

let a; // 선언
console.log(a + a + a + a + a);
a = "10"; // 재할당
console.log(a + a + a + a + a);
// let a = "aaa"; // 같은 식별자로 선언 불가

// const
const b = 20; // 값의 재할당 불가. const는 오류남.
console.log(a + b); // 출력값은 "30" 이 아닌 "1020".

//b = 20;
// var // 쓰지마. 옛날 것임. (오래된 브라우저의 호환성을 맞출 때 사용)
var c = 30;
var d;
d = 50;
var c = c + d;
console.log(c + d);
// 값 재할당, 변수의 중복 선언,

// var
