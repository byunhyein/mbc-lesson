/* named export : 모듈 내보내기 */

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
// 지정하여 모듈 내보내기 : export

const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
export { multiply, divide };
// 위에서 선언하고, 나중에 모듈 내보내기

/* default export : 기본 내보내기 */
// 파일 당 한 번만 내보낼 수 있는 기본 모듈

export default function greet(name) {
  return `안녕 ${name}`;
}

export function member(name) {
  return `안녕 ${name}`;
}
// default 는 파일에서 단 한 번만 사용할 수 있으므로, 다른 함수에서 default 를 사용 시 오류가 난다. (터미널 출력 불가 등.)
