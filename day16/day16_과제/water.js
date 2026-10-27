// 오늘 마신 물 기록 — 목표를 채우면 글자가 초록색으로 바뀝니다
const goalSelect = document.querySelector("#goal"); // id가 goal인 select 요소를 찾아 변수에 저장함
const statusEl = document.querySelector("#status"); // id가 status인 p 요소를 찾아 변수에 저장함
const plusBtn = document.querySelector("#plus-btn"); // id가 plus-btn인 추가 버튼을 찾아 저장함
const resetBtn = document.querySelector("#reset-btn"); // id가 reset-btn인 초기화 버튼을 찾아 저장함
let cups = 0; // 현재 마신 물의 잔 수를 기록할 변수이며 값이 계속 바뀌므로 let으로 선언함

// 1. 지금 상태를 화면에 쓰기
function render() { // 화면의 글자와 색상을 최신 상태로 다시 그려주는 함수 정의함
  // [TODO 1: value] select에서 현재 선택된 option의 값(문자열)을 읽고 Number()로 숫자 변환함
  const goal = Number(goalSelect.value);
  // [TODO 2: textContent] 상태 문단(statusEl) 안의 텍스트를 현재 잔 수와 목표 잔 수로 교체함
  statusEl.textContent = `${cups}잔 / 목표 ${goal}잔`;
  if (cups >= goal) { // 마신 잔 수(cups)가 목표(goal) 이상이면
    // [TODO 3: add] 초록색 굵은 글씨가 되도록 done 클래스를 추가함
    statusEl.classList.add("done");
  } else { // 아직 목표에 도달하지 못했거나 목표치를 높여서 미달이 되면
    statusEl.classList.remove("done"); // done 클래스를 제거해 원래 검은 글씨로 되돌림
  }
}

// 2. 한 잔 마셨어요 — 누를 때마다 1 늘리기
// [TODO 4: addEventListener] plusBtn에 클릭 이벤트와 실행할 화살표 함수를 연결함
plusBtn.addEventListener("click", () => {
  cups += 1; // 마신 잔 수를 1 증가시킴
  render(); // 변경된 잔 수가 화면에 반영되도록 render 함수를 호출함
});

// 3. 처음부터 — 0으로 되돌리기
// [TODO 5: "click"] 초기화 버튼을 눌렀을 때("click") 실행되도록 이벤트 이름을 지정함
resetBtn.addEventListener("click", () => {
  cups = 0; // 마신 잔 수를 0으로 초기화함
  render(); // 0잔 상태와 검은색 글씨로 화면을 다시 그림
});

// 4. 목표를 바꾸면 다시 쓰기
// [TODO 6: "change"] select 드롭다운에서 다른 항목을 골랐을 때("change") 실행되게 함
goalSelect.addEventListener("change", () => {
  render(); // 새로 고른 목표치에 맞춰 화면 텍스트와 달성 색상 여부를 즉시 갱신함
});