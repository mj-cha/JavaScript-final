console.log("index.js를 읽어왔습니다");

// getElementById id로 요소 찾기
const titleEl = document.getElementById("title");
console.log(titleEl);
console.log(titleEl.textContent);
console.log(document.getElementById("logo")); // 없으면 null


const titleStyleEl = document.getElementById("title-style");
titleStyleEl.style.color = "red";