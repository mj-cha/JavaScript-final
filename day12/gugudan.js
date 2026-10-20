// 1. 1부터 n까지 더한 값을 반환 (함수 선언식)
function sumTo(n) {
  let total = 0; // 누적할 바구니 변수 초기화 (반복문 밖 선언 필수)
  for (let i = 1; i <= n; i++) {
    total += i; // 1부터 n까지 순차적으로 더함
  }
  return total; // 최종 합계 반환
}

console.log(sumTo(10));  // 결과: 55
console.log(sumTo(100)); // 결과: 5050

// 2. 구구단 한 단 출력 (함수 표현식)
// 변수 printDan에 익명 함수 할당
const printDan = function (dan) {
  for (let i = 1; i <= 9; i++) {
    // 백틱(`)을 활용해 문자열과 변수 깔끔하게 조합 (기존 오타 수정 완료)
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
};

printDan(7); // 7단 출력

// 3. 점수 목록 합계 (화살표 함수)
const scores = [80, 95, 70, 55]; // 점수 배열 선언

// function 키워드 생략 후 => 기호 사용
const sumScores = (list) => {
  let total = 0; // 합계 바구니 초기화
  // 배열 길이(list.length)만큼 0번 인덱스부터 반복
  for (let i = 0; i < list.length; i++) {
    total += list[i]; // 각 점수를 total에 누적
  }
  return total; // 누적된 합계 반환
};

const total = sumScores(scores); // 계산된 합계 변수에 저장
// 총합계와 평균(합계 / 배열 길이) 동시 계산 및 출력
console.log(`합계 ${total}점, 평균 ${total / scores.length}점`);

// 4. 조건에 맞는 것만 세기 (continue 활용)
const countPass = (list) => {
  let count = 0; // 통과 인원수 카운트 초기화
  for (let i = 0; i < list.length; i++) {
    // 60점 미만이면 아래 코드를 무시하고 다음 반복 차례로 스킵
    if (list[i] < 60) {
      continue;
    }
    count++; // 60점 이상인 경우에만 인원수 1 증가
  }
  return count; // 최종 카운트 반환
};

console.log(`60점 이상 ${countPass(scores)}명`); // 결과: 60점 이상 3명