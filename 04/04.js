// 배열의 원소를 순회해서 실행하소 새 배열로 반환
const num = [1, 2, 3, 4, 5];

// 새 배열을 담을 변수 = 배열.map(콜백함수)
// 소괄호 안에는 함수를 써야 해요~ (화살표함수 써도 되고 그냥 아무 함수나!)
// a, b, c =  value, index, array

const test = num.map(function (a, b, c) {
  console.log(`배열 원소의 값:${a}`);
  console.log(`인덱스 번호:${b}`);
  console.log(`배열 전체의 값:${c}`);
});
console.log(test); // 새 배열로 저장해서 받기
const doubled = num.map((val) => val * 2);
console.log(doubled); // 기존 숫자가 2배로 곱해져 나옴

// a = 가지고 있는 원소 개수만큼 (반복문처럼) 반복 실행. = 순회.

// 객체 배열 변환
const users = [
  { id: 1, name: "철수" },
  { id: 2, name: "영희" },
];

// 이름만 추출한 새 배열
const names = users.map((user) => user.name);
console.log("map:", names); // ['철수', '영희']

// HTML 태그 형태의 문자열 배열 만들기
const items = num.map((n) => `<li>${n}</li>`);
console.log(items);

// 객체 배열
const uusers = [
  { id: 1, name: "철수" },
  { id: 2, name: "영희" },
  { id: 3, name: "민수" },
];
const use2 = uusers.filter((ewe) => ewe.id === 2);
console.log(use2); // 영희 찾기



