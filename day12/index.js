// DAY 12 JavaScript 반복문과 함수
console.log("index.js가 연결됐습니다!!!");

// for 반복문
for (let i = 0; i < 5; i++) {
    console.log(`for 반복문 ${i}회 반복`);
}

// while 반복문
let j = 0;
while (j < 5) {
    console.log(`while 반복문 ${j}회 반복`);
    j++;
}

// 함수 선언
function greet(name) {
    console.log(`안녕하세요, ${name}님!`);
}

// 함수 호출
greet("홍길동");