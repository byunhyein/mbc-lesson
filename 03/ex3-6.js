let currentYear = 2026;
let birthYear;
// 값을 할당하지 않고 식별자만 선언

console.log(currentYear);
console.log(`birthYear : ${birthYear}`);
// `틸트로 전체 감싸고` 식별자는 : > $달러사인 + {중괄호 안에 식별자 내용인것} ...?

let age;

birthYear = prompt("출생년도를 입력하세요[YYYY]", "");
// 프롬프트라는 함수를 birthYear 식별자의 값으로 할당

age = currentYear - birthYear;
//birthYear 값 이후에 작성해야 계산식 오류가 안남! 

document.write(`당신은 ${birthYear} 년도에 태어났어, 맞지?<br>`);

document.write(`당신은 올해 ${age}살이구만, 맞지?<br>`);
//currentYear 빼기 birthYear 하면... 사용자의 값에 따라 다른 출력!
