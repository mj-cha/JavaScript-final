// 바꿔 가며 확인할 값
const saving = 50000;    // 한 달에 모으는 돈 (문제 조건에 따라 50000으로 세팅)
const goal = 150000;     // 목표 금액

// 1. 목표 금액까지 몇 달이 걸리는지 돌려주는 함수 — while
function monthsToGoal(monthly, target) {
  let saved = 0;
  let months = 0;
  // TODO 1: 모은 돈(saved)이 목표(target)보다 '적은 동안' 계속 반복 -> '<'
  while (saved < target) { 
    saved += monthly; // 매달 모은 돈 누적
    months++; // 달 수 1 증가
  }
  // TODO 2: 다 모아서 계산 끝난 달 수(months)를 바깥으로 뱉어냄 -> 'return'
  return months; 
}

// 2. 1월부터 3월까지 모이는 돈을 출력하는 함수 — for
const printPlan = function (monthly) {
  // TODO 3: 3월 '까지(포함)' 반복해야 하므로 작거나 같다 -> '<='
  for (let month = 1; month <= 3; month++) { 
    console.log(`${month}월 : ${monthly * month}원`);
  }
};

// 3. 1년 동안 모이는 돈 — 화살표 함수, 인수를 빠뜨리면 30000
// TODO 4: 아무 값도 안 들어오면 30000을 기본으로 쓰게 하는 기호 -> '='
const yearTotal = (monthly = 30000) => monthly * 12; 

// 4. 모은 돈이 처음으로 target 이상이 되는 달 — 찾으면 멈춤
function firstMonthOver(monthly, target) {
  for (let month = 1; month <= 12; month++) {
    if (monthly * month >= target) { // 목표 금액 달성 시
      console.log(`${month}월에 처음으로 ${target}원 이상 (${monthly * month}원)`);
      // TODO 5: 찾았으니 남은 달은 검사하지 않고 반복문 탈출 -> 'break'
      break; 
    }
  }
}

// TODO 6: 달 수를 구하는 함수의 이름 호출 -> 'monthsToGoal'
const months = monthsToGoal(saving, goal); 
console.log(`목표 ${goal}원까지 ${months}개월`);

printPlan(saving);
console.log(`1년이면 ${yearTotal(saving)}원`);
firstMonthOver(saving, 100000);