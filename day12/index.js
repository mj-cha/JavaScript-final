// JS 파일이 HTML에 잘 연결되었는지 확인하는 테스트 출력
console.log("index.js가 연결됐습니다!!!");

// 1. 기본 for 반복문 (0부터 4까지 총 5번 실행)
for (let i = 0; i < 5; i++) { // 초기값 i=0; i가 5보다 작을 때까지; 1씩 증가
  console.log(i); // 0, 1, 2, 3, 4 출력
}

// 2. 누적 합계 구하기 (for문 바깥에 변수 선언 필수)
let total = 0; // 누적값을 담을 바구니 (반복문 안에 넣으면 매번 0으로 초기화되므로 밖에 둠)
for (let i = 1; i <= 10; i++) { // 1부터 10까지 10번 반복
  total += i; // total = total + i 와 같은 뜻. 1~10까지 순차적으로 더함
}
console.log(total); // 결과: 55

// 3. 구구단 3단 만들기
for (let i = 1; i <= 9; i++) { // 1부터 9까지 9번 반복
  let dan = 3; // 3단 고정
  let result = dan * i; // 곱셈 결과 계산
  let message = `${dan} x ${i} =${result}`; // 백틱(`)을 사용해 문자열과 변수를 깔끔하게 조합
  console.log(message);
}

// 4. 중첩 for 반복문 (반복문 안의 반복문)
for (let i = 1; i < 2; i++) { // 바깥 for문 (i)
  console.log("i 블록 시작");
  console.log("i", i);
  for (let k = 1; k < 10; k++) { // 안쪽 for문 (k) - 바깥이 1번 돌 때 안쪽은 9번 돎
    console.log("k 블록 시작");
    console.log("k", k);
    console.log("k 블록 끝");
  }
  console.log("i 블록 끝");
}

// 5. 배열과 for 반복문 찰떡궁합
const fruits = ["사과", "바나나", "포도", "딸기"]; // 길이가 4인 배열
// 배열의 인덱스는 0부터 시작하므로 i=0. 끝 조건은 배열의 길이(4)보다 작을 때까지(0,1,2,3)
for (let i = 0; i < fruits.length; i++) { 
  console.log(fruits[i]); // 사과, 바나나, 포도, 딸기 순서대로 출력
}

// 6. while 반복문 (조건만 맞으면 무한 반복)
let money = 10000; // 가진 돈
let cups = 0; // 산 커피 잔 수
while (money >= 3000) { // 돈이 3000원 이상 남아 '있는 동안' 계속 반복
  money -= 3000; // 커피 한 잔(3000원) 차감
  cups++; // 산 잔 수 1 증가
}
console.log(`남은 돈: ${money}원, 구매한 컵 수: ${cups}개`); // 남은 돈 1000원, 3개

// 7. 반복문 흐름 제어 (break vs continue)
for (let i = 1; i < 10; i++) {
  if (i === 5) {
    break; // i가 5가 되는 순간 반복문 자체를 파괴하고 나감. (1, 2, 3, 4 까지만 출력)
  }
  console.log(i);
}

for (let i = 1; i < 10; i++) {
  if (i === 5) {
    continue; // i가 5일 때 출력 안 하고 바로 다음(6)으로 넘어감 (5만 빼고 1~9 출력)
  }
  console.log(i);
}

// 8. 함수 기초: 매개변수(Parameter)
function gugudan(dan) { // dan이라는 이름으로 숫자를 받아옴
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
}
gugudan(9); // 함수 호출 시 인수(Argument) 9를 던져줌 -> 9단 출력

// 9. 매개변수 여러 개 및 기본값(Default) 설정
function intoduce(name, age = "나이불명") { // age 값이 안 들어오면 "나이불명"을 대신 씀
  console.log(`안녕하세요. ${name} (${age})`);
}
intoduce("홍길동", 20); // 안녕하세요. 홍길동 (20)
intoduce("홍길동"); // 안녕하세요. 홍길동 (나이불명) -> 기본값 작동
intoduce("홍길동", 20, "서울시"); // 3번째 인수 "서울시"는 받을 자리가 없어서 무시됨

// 10. 반환값 (return)
function sum(a, b) {
  let result = a + b;
  return result; // 계산된 값을 함수를 부른 바깥으로 뱉어냄
}
let answer = sum(10, 20); // 뱉어낸 값(30)을 answer 변수에 주워 담음
console.log(answer); 
// console.log(result); // 에러! result는 sum 함수 내부에서 만든 변수라 밖에서는 안 보임(스코프 문제)

// 11. return의 조기 종료 특성 (Early Return)
function sumEarlyReturn(num1, num2) {
  // 인수가 숫자가 아니면 
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return; // 아무것도 안 뱉고 함수 즉시 폭파 (아래 덧셈 코드 실행 안 됨)
  }
  return num1 + num2; 
}
const answer2 = sumEarlyReturn(10, 20); // 정상 작동하여 30 출력
console.log("answer2", answer2);

// 12. 화살표 함수 (Arrow Function)
// function 단어 생략. { } 와 return 까지 생략해서 초경량으로 만든 함수
const sumArrow = (num1, num2) => num1 + num2; 
const answer3 = sumArrow(10, 20);
console.log("answer3", answer3); // 결과 30