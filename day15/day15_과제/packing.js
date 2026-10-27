// 여행 준비물 — packed가 true면 이미 챙긴 것
const items = [
  { name: "여권", packed: true },
  { name: "충전기", packed: false },
  { name: "우산", packed: true },
  { name: "선크림", packed: false },
];

// 1. 제목 바꾸기
// - document는 현재 HTML 문서.
// - getElementById로 제목 요소를 찾고, textContent로 화면에 보이는 글자를 바꿈.
const titleEl = document.getElementById("list-title"); // TODO 1
titleEl.textContent = "제주 여행 준비물"; // TODO 2

// 2. 준비물 목록 만들기
// - forEach는 준비물 배열의 각 항목마다 안쪽 코드를 한 번씩 실행.
// - li에 준비물 이름을 넣고, 이미 챙긴 항목에는 packed class를 붙여 목록에 추가함.
const listEl = document.querySelector("#item-list");
items.forEach((item) => {
  const itemEl = document.createElement("li"); // TODO 3
  itemEl.textContent = item.name;
  if (item.packed) {
    itemEl.classList.add("packed"); // TODO 4
  }
  listEl.appendChild(itemEl); // TODO 5
});

// 3. 챙긴 준비물 개수 쓰기
// - querySelectorAll은 조건에 맞는 요소를 모두 찾고, length는 찾은 개수를 알려줌.
const packedEls = document.querySelectorAll(".packed"); // TODO 6
const summaryEl = document.querySelector("#summary");
summaryEl.textContent = `챙긴 준비물 ${packedEls.length}개 / 전체 ${items.length}개`;
console.log(summaryEl.textContent);