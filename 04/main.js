/* named import : 모듈 가져오기 */

import { add, subtract } from "./utils.js";
console.log(add(5, 53));
console.log(subtract(5, 53));
// Ctrl + Alt + N 하여 확인하기!

/* 이름변경 임포트 */
import { multiply as m } from "./utils.js";
console.log(m(5, 53));

/* 한 번에 몽땅 임포트 */
import * as u from "./utils.js";
console.log(u.add(10, 500));

/* default import : 기본 가져오기 */
// 이름 변경 불가, 대신 이름을 안 불러도 가져올 수 있다.
import greet from "./utils.js";
console.log(greet("머리아파"));
// default export 방식으로 한 개만 내보내진 모듈을 {중괄호} 로 가져올 수 없음. 여러 개는 {중괄호} 가 가능하지만, 한 개만 내보내진 건 {중괄호} 쓰면 안 된다.
import hi from "./utils.js";
console.log(hi("마이아파"));
// 이렇게도 가능

/* default + named : 둘 다 함께 가져오기 */
import greet, { divide } from "./utils.js";
