// 글 한 편 보기 — 번호를 넣고 「보기」를 누르면 그 글을 불러와 씁니다
const idInput = document.querySelector("#post-id"); // 글 번호 입력칸
const showBtn = document.querySelector("#show-btn"); // 「보기」 버튼
const statusEl = document.querySelector("#status"); // 진행 상태 문단
const titleEl = document.querySelector("#title"); // 제목 문단
const bodyEl = document.querySelector("#body"); // 본문 문단

// 1. 글 불러오기 — 없는 번호면 오류로 보냅니다
async function showPost() { // 안에서 await를 쓰려고 async로 선언
  statusEl.textContent = "불러오는 중…"; // 요청 시작하자마자 로딩 문구 표시
  try { // 연결 오류·404·JSON 오류를 한 그물로 잡기 시작
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idInput.value}`); // [TODO 1: fetch] 입력한 번호로 요청 → 응답 올 때까지 기다림
    if (!response.ok) { // [TODO 2: ok] 200번대가 아니면(404 등) 조건이 true
      throw new Error(`${response.status} — 없는 글입니다`); // [TODO 3: throw] 404는 저절로 catch에 안 가니 직접 던짐
    }
    const post = await response.json(); // [TODO 4: json] 본문 JSON 글자 → JS 객체
    titleEl.textContent = post.title; // 제목 출력
    bodyEl.textContent = post.body; // 본문 출력
  } catch (error) { // [TODO 5: catch] try 안에서 던져진 에러를 받음
    titleEl.textContent = ""; // 이전 제목 지움
    bodyEl.textContent = error.message; // "404 — 없는 글입니다" 출력
  } finally { // [TODO 6: finally] 성공·실패 상관없이 마지막에 실행
    statusEl.textContent = ""; // 로딩 문구 지움
  }
}

// 2. 버튼 연결
showBtn.addEventListener("click", showPost); // 「보기」 클릭 → showPost 실행 (괄호 없이 함수 이름만 넘김)