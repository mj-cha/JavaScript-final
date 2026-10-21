// DAY 13 실습 01 — 가게 대기 줄 관리하기

// 1. 대기 줄 초기 설정 — 먼저 온 손님이 앞(0번 인덱스)에 섭니다
const waiting = ["김오즈", "이코딩", "박자바"];
console.log("처음 대기 줄", waiting);

// 2. 맨 뒤에 추가 (push) — 손님 두 명이 새로 와서 맨 뒤에 섭니다
waiting.push("최리액", "정노드"); // 한 번에 여러 명 추가 가능
console.log(`대기 ${waiting.length}명`); // 배열의 길이(length)로 대기 인원 확인

// 3. 맨 앞에서 빼기 (shift) — 맨 앞 손님(0번)이 입장합니다
const first = waiting.shift(); // '김오즈'가 배열에서 빠져나와 first 변수에 담김
console.log(`${first}님 입장`); 
// (참고) 변수에 안 담고 console.log(`${waiting.shift()}님 입장`); 처럼 바로 써도 똑같이 작동함

// 4. 맨 앞에 추가 (unshift) — 예약 손님은 맨 앞에 세웁니다 (새치기)
waiting.unshift("한예약"); // 이제 0번 인덱스는 '한예약'이 됨

// 5. 중간 요소 찾아서 지우기 (indexOf + splice) — 박자바님이 줄을 떠납니다
const index = waiting.indexOf("박자바"); // '박자바'가 현재 몇 번 자리에 있는지 번호(인덱스)를 찾음
waiting.splice(index, 1); // 찾은 번호(index)부터 1명을 줄에서 아예 제거함 (원본 배열 수정됨)

// 6. 배열의 일부만 복사하기 (slice) — 다음 세 분만 따로 안내합니다 (줄은 그대로 유지)
// 0번 인덱스부터 3번 인덱스 '전'까지 (즉, 0, 1, 2번) 잘라서 새 배열로 반환
const nextThree = waiting.slice(0, 3); 
console.log("다음 세 분", nextThree); // 원본 waiting 배열은 줄어들지 않고 그대로 있음

// 7. 남은 대기 줄 전체 출력 (for 반복문)
for (let i = 0; i < waiting.length; i++) {
  // 인덱스(i)는 0부터 시작하므로, 실제 대기 번호처럼 보이게 하려면 i + 1을 해줌
  console.log(`${i + 1}번 ${waiting[i]}`); 
}