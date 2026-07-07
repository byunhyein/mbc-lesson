/* 3 . 두 수를 더하는 함수 */
function addNum(num1, num2) {
  // sum은 지역 변수이므로, addNum 함수 밖에서 안 읽힌다.
  const sum = num1 + num2;
  //   return은 sum의 값을 함수 밖으로 전달 후 함수를 종료
  return sum;
  console.log("sum", sum); // ➡ return 문 다음에 오는 console은 나오지 않는다ㄴ
}

addNum(1, 2);
document.write(`addNum 함수 실행 결과 : ${addNum(1, 2)}`);
