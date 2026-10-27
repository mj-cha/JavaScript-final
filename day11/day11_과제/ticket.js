// 바꿔 가며 확인할 값 세팅 (상수 선언)
const age = 15;
const day = "토";          // "월" ~ "일"
const isMember = true;

// 1. 나이에 따라 기본 요금 산정 — 어린 나이부터 차례로 검사
let price;
if (age < 13) {
  price = 20000; // 13세 미만 요금
} else if (age < 19) { // TODO 1: 19세 미만을 나타내는 비교 연산자 '<'
  price = 30000; // 13세 이상 ~ 19세 미만 요금
} else {
  price = 46000; // 19세 이상 성인 요금
}

// 2. 주말 여부 판별
// TODO 2: 토요일 '또는' 일요일이면 참을 반환하는 OR 연산자 '||'
const isWeekend = day === "토" || day === "일";

// 3. 평일 회원 할인 적용
// TODO 3: 평일(!isWeekend) '그리고' 회원(isMember) 두 조건을 모두 만족하는 AND 연산자 '&&'
if (!isWeekend && isMember) {
  // TODO 4: 기존 price에서 5000을 빼서 다시 담는 복합 대입 연산자 '-='
  price -= 5000; 
}

// 4. 요일마다 안내 문구 설정
let notice;
switch (day) {
  case "토":
  case "일":
    notice = "주말에는 대기 줄이 깁니다";
    // TODO 5: switch 문을 끝내고 빠져나가는 키워드 'break'
    break; 
  default: // 주말을 제외한 나머지 평일
    notice = "평일에는 여유롭게 즐길 수 있습니다";
}

// 5. 주말인지 평일인지 한 단어로 변환
// TODO 6: isWeekend가 참이면 "주말", 거짓이면 "평일"을 반환하는 삼항 연산자 '?'
const dayType = isWeekend ? "주말" : "평일";

// 6. 콘솔에 최종 결과 출력
console.log(`나이 ${age}세 · ${day}요일(${dayType}) · 회원 ${isMember}`);
console.log(`입장료 ${price}원`);
console.log(notice);