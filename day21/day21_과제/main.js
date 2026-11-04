// 연결 — menu.js가 내보낸 함수와 배열을 가져와 버튼에 연결합니다
// [TODO 4: pickMenu] 대표 요리는 { } 없이, 받을 이름을 내가 정함
import pickMenu from "./menu.js";
// [TODO 5: menus, TODO 6: from] 이름표 요리는 { } 안에 같은 이름으로
import { menus } from "./menu.js";

// [화면 자리 3곳] HTML의 id로 찾아 변수에 담아 둠
const countEl = document.querySelector("#count");
const resultEl = document.querySelector("#result");
const pickBtn = document.querySelector("#pick-btn");

countEl.textContent = `메뉴 ${menus.length}가지`; // 「메뉴 5가지」 (배열 길이 5)
pickBtn.addEventListener("click", () => {    // [고르기 버튼] 누를 때마다
  const menu = pickMenu(menus);              // 가져온 함수에 가져온 배열을 넣음
  resultEl.textContent = `오늘은 ${menu}!`;  // 「오늘은 ○○!」
});