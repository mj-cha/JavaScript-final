// 메뉴 목록과, 목록에서 하나를 고르는 함수 — main.js가 가져다 씁니다
// [TODO 2: export] [배식구] 메뉴 배열을 이름표 "menus"로 내보냄
export const menus = ["김치찌개", "비빔밥", "칼국수", "돈가스", "떡볶이"];

// [TODO 3: export default] [대표 요리] 이 파일의 대표 함수 1개
export default function pickMenu(list) {
  // 0 이상 1 미만 무작위 × 5 → 내림 → 0~4 중 하나
  const index = Math.floor(Math.random() * list.length);
  return list[index];  // 그 칸의 메뉴를 돌려줌
}