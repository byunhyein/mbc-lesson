// 구조 분해 할당 Destructuring

// 객체 구조 분해
const user = {
  name: "철수",
  age: 20,
  job: "개발자",
};

// 기존 방식 (하나씩 추출하는 방식)
// const name1 = user.name;
// const age = user.age;

// 구조 분해 할당 (한번에 객체의 값을 쉽게 추출)
const { name, age } = user;
console.log(name, age);

// 배열 구조 분해
const arr = [1, 2, 3, 4, 5];
// const a1 = arr[0];
// const a2 = arr[0 + 1];
// console.log(a1, a2);

const [n, m] = arr;
console.log(n, m);

/* --------------------- */
/* -- Spread Operator -- */
/* --------------------- */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 배열 합체
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// 요소, 원소 추가
const arr4 = ["자바 스크립트 복습", ...arr3, "화장실"];
console.log(arr4);

// ========== 객체 스프레드 ==========
const use = { name: "철수", age: 20 };

// 객체 복사
const userCopy = { ...user };

// 속성 추가
const user2 = { ...userCopy, job: "(돈 많은) 백수 희망자" };
console.log(user2);

// 속성 덮어쓰기
const user3 = { ...user2, job: "AI 크리에이터" };
console.log(user3);

// 여러 객체 합치기
const a = { x: 1, y: 2 };
const b = { y: 1, z: 4 };
const c = { ...a, ...b };
console.log(c);

