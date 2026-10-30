// 읽은 글 표시하기 — 글 목록은 서버에서 받고, 읽은 글 번호는 localStorage에 둡니다
// 글 10개를 받아 올 주소
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts?userId=1";
const READ_KEY = "day20-read";              // 서랍 이름표

// [화면 자리 4곳] HTML의 id로 찾아 변수에 담아 둠
const statusEl = document.querySelector("#status");
const retryBtn = document.querySelector("#retry-btn");
const listEl = document.querySelector("#list");
const resetBtn = document.querySelector("#reset-btn");

// 1. 읽은 글 번호 — 저장한 것이 없으면 빈 배열
// [TODO 1: JSON.parse] 서랍 글자를 배열로 폄. 서랍이 비면 null → || [] 로 빈 배열
let readIds = JSON.parse(localStorage.getItem(READ_KEY)) || [];
let posts = [];                             // 서버에서 받은 글 목록 (처음엔 빈칸)

function saveRead() {                       // [서랍에 넣기 담당]
  // [TODO 2: setItem, TODO 3: JSON.stringify] 배열을 글자로 접어 넣음
  localStorage.setItem(READ_KEY, JSON.stringify(readIds));
}

// 2. 요청 함수 — ok가 아니면 실패로
async function getJSON(url) {               // [주문 담당]
  const response = await fetch(url);        // [TODO 4: await] 대답 기다림
  if (!response.ok) {                       // [TODO 5: ok] 200번대가 아니면
    // 실패로 던짐
    throw new Error(`응답 상태 ${response.status}`);
  }
  return response.json();                   // 상자 풀어 배열로
}

// 3. 목록 그리기 — 읽은 글에는 read 클래스
function render() {                         // [목록 그리기 담당]
  listEl.textContent = "";                  // 목록 싹 비우고 새로 그림
  posts.forEach((post) => {                 // 글 하나씩 돌면서
    // 새 줄 <li> 만듦
    const itemEl = document.createElement("li");
    // "1. 제목" 글자 넣음
    itemEl.textContent = `${post.id}. ${post.title}`;
    if (readIds.includes(post.id)) {        // 읽은 번호 목록에 있으면
      itemEl.classList.add("read");         // read 딱지 → 회색 + (읽음)
    }
    // 이 줄을 누르면 그 글 번호로 markRead 실행
    itemEl.addEventListener("click", () => markRead(post.id));
    listEl.appendChild(itemEl);             // 목록 맨 끝에 붙임
  });
  // "글 10개 · 읽은 글 2개"
  statusEl.textContent = `글 ${posts.length}개 · 읽은 글 ${readIds.length}개`;
}

// 4. 누른 글을 읽음으로
function markRead(id) {                     // [읽음 처리 담당]
  if (!readIds.includes(id)) {              // 처음 누른 글이면 (중복 방지)
    readIds.push(id);                       // 번호 추가
    saveRead();                             // 서랍에 저장 → 새로고침해도 남음
  }
  render();                                 // 다시 그림
}

// 5. 불러오기 — 불러오는 중 → 성공 또는 실패
async function loadPosts() {                // [불러오기 담당]
  statusEl.textContent = "불러오는 중…";
  retryBtn.hidden = true;                   // 다시 시도 버튼 숨김
  try {
    posts = await getJSON(POSTS_URL);       // 글 10개 받아 옴
  } catch (error) {                         // 실패하면
    // 실패 안내 + 다시 시도 버튼 보이기
    statusEl.textContent = "글을 불러오지 못했습니다 — 인터넷 연결을 확인해 주세요";
    retryBtn.hidden = false;
    return;                                 // 여기서 끝 (render 안 함)
  }
  render();                                 // 성공하면 목록 그림
}

// 6. 연결 — 읽음 표시 지우기, 다시 시도
resetBtn.addEventListener("click", () => {  // [지우기 버튼]
  localStorage.removeItem(READ_KEY);        // [TODO 6: removeItem] 서랍 하나 비움
  readIds = [];                             // 변수도 빈 배열로
  render();                                 // 다시 그림 → 읽은 글 0개
});
// 괄호 없이 함수 이름만 넘김
retryBtn.addEventListener("click", loadPosts);

loadPosts();                                // 페이지 열리자마자 1번 불러오기
