const x = 100; // 값에 따라서 평균이 바뀌어요
const y = 87;
const add = x + y;
document.write("국어 점수 :" + x + "<br>"); // 옛날 문법
document.write("수학 점수 :" + y + "<br>");

document.write("합계 :" + add + "<br>");

document.write("평균은 :");
document.write(add / 2);

document.write(`국어점수: ${x}<br>수학점수: ${y}<br>합계: ${add}<br>평균: ${add / 2}`); // 요즘 문법 ^^; | 옛날에는 "+" 연산자를 썼는데, 요즘은 백틱 "``" 에 쓰면 됨.
