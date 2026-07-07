let a; // let 을 다룰 식별자 a를 선언하다, a라는 이름의 "변수"를 "선언"
// 아직 값이 할당된 상태는 아님. a를 이제 쓸 거라는, a 변수 선언!

let a = 10; // 10을 할당
// a 변수를 10으로 초기화
console.log(a + a + a); /* 30 */

a = 50;
console.log(a); /* 변수의 재할당 : a를 50으로 새로 줬으니까 여기서 a는 50이다. */

let text = "야";
console.log(text); /* text = 야 */