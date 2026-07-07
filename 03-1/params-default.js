function multiple(a, b = 1, c = 0) {
  // multiple = 매개 변수를 3개 가질 수 있음!
  return a * b + c;
}
const result = multiple(5, 10, 20);
document.write(`multiple(5, 10, 20):${result}`);
document.write(`<hr>`);

// 2. 매개변수 2개 쓰기 (a, b를 다 넣고 c에 기본값 넣기) _ 인수를 2개만 전달하면 어떻게 될까?
const result1 = multiple(5, 10);
document.write(`multiple(5, 10):${result1}`);
document.write(`<hr>`);
/* 최상단, a, b, c를 = 0으로 할당해 두면, 매개변수 2개만 썼을 때도 NaN이 나오는 것이 아닌 */

// 3. 매개변수 1개 쓰기 (a만 넣고 b, c에 기본값 넣기) _ 인수를 1개만 전달하면 어떻게 될까?
const result2 = multiple(5);
document.write(`multiple(5):${result2}`);
document.write(`<hr>`);
/* 곱하기 연산자가 0과 만나서 NaN이 나오는 것을 방지하려면, 0이 아닌 간단한 수 (= 1) 의 할당이 필요하다. */