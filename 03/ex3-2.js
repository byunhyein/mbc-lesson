// script 태그를 가져오면 안된다!! script 안에 들어갈 내용만 가져올 것.

console.log(1 + 1); // 콘솔.로그는 칠 때 c가 아니라 l부터 침.
console.log("자바스크립트를 넣는 법");
document.write('<h1 class="btn">click</h1>');
document.querySelector(".btn").onclick = function () {
  document.querySelector(".text").style.color = "blue";
  document.querySelector("body").style.background = "yellow";

  // .style.color / .style.background : 다른 식별자와 함께 쓰고, 괄호가 없으면 각각의 프로퍼티
  //   값을 만들어내는 코드 조각 => 표현식
};
