// 도서 대출 확인 — 1초 동안 서가를 확인한 뒤 결과를 씁니다
const statusEl = document.querySelector("#status"); // 상태 문구를 표시할 <p id="status"> 요소를 찾아 저장함
const princeBtn = document.querySelector("#prince-btn"); // '어린 왕자 빌리기' 버튼 요소를 찾아 저장함
const demianBtn = document.querySelector("#demian-btn"); // '데미안 빌리기' 버튼 요소를 찾아 저장함
const available = ["어린 왕자", "모모"];   // 현재 도서관에 남아 있어 대출 가능한 책 목록 배열임 ("데미안"은 없음)

// 1. 책이 있는지 확인하는 Promise — 1초 뒤 결과가 나옵니다
function checkBook(title) { // 빌리려는 책 제목(title)을 매개변수로 받는 함수 정의함
  // [TODO 1: Promise] 비동기 작업의 미래 결과(성공 resolve, 실패 reject)를 담을 새 Promise 객체를 생성해 반환함
  return new Promise((resolve, reject) => {
    // [TODO 2: setTimeout] 1000ms(1초)가 지난 뒤에 중괄호 안의 확인 함수를 한 번 실행함
    setTimeout(() => {
      if (available.includes(title)) { // 대출 가능 배열(available) 안에 신청한 책 제목(title)이 포함되어 있다면
        // [TODO 3: resolve] 대출 성공이므로 resolve 함수를 호출해 성공 메시지를 밖으로 전달함
        resolve(`${title} — 대출 완료`);
      } else { // 배열에 책이 없다면 (예: "데미안")
        reject(`${title} — 모두 대출 중입니다`); // 대출 실패이므로 reject 함수를 호출해 실패 안내 문구를 전달함
      }
    }, 1000); // 대기 시간 1000밀리초(1초) 설정함
  });
}

// 2. 대출하기 — 결과를 기다렸다가 화면에 씁니다
// [TODO 4: async] 함수 내부에서 await 키워드를 쓰기 위해 function 앞에 async를 붙임
async function borrow(title) {
  statusEl.textContent = "서가를 확인하는 중…"; // 버튼을 누른 즉시(0초) 화면 문구를 "서가를 확인하는 중…"으로 먼저 바꿈
  try { // 성공(resolve)을 기대하며 비동기 함수를 실행하는 블록임
    // [TODO 5: await] checkBook(title) Promise가 1초 뒤 끝날 때까지 기다렸다가 resolve된 결과 글자를 message에 담음
    const message = await checkBook(title);
    statusEl.textContent = message; // 1초 뒤 받은 성공 메시지("어린 왕자 — 대출 완료")를 화면 <p> 태그에 출력함
  } catch (error) { // [TODO 6: catch] 만약 checkBook에서 reject(거부)가 발생하면 즉시 이 블록으로 점프해 에러 문구를 받음
    statusEl.textContent = error; // 1초 뒤 받은 실패 메시지("데미안 — 모두 대출 중입니다")를 화면 <p> 태그에 출력함
  }
}

// 3. 버튼마다 연결
princeBtn.addEventListener("click", () => borrow("어린 왕자")); // 첫 번째 버튼 클릭 시 "어린 왕자"를 인수로 넣어 borrow 함수 실행함
demianBtn.addEventListener("click", () => borrow("데미안")); // 두 번째 버튼 클릭 시 "데미안"을 인수로 넣어 borrow 함수 실행함