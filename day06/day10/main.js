// DAY 10 실습 01 — 콘솔과 파일에서 변수 다뤄 보기
console.log("main.js가 연결됐습니다");

console.log("1. 첫번째 줄");
console.log("2. 두번째 줄");
console.log("3. 세번째 줄");

// let은 다시 담을 수 있다(재할당 가능)
let price = 200;
console.log(price);

price = 300;
console.log(price);

// 선언하고 할당하고 초기값
let score; // 선언
console.log(score); // undefined
score = 100; // 할당 : 값을 넣는다.
console.log(score); // 100

let level = 1; // 초기화 : 선언과 동시에 할당