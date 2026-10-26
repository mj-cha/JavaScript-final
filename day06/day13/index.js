// JS 파일 연결 확인 테스트
console.log("index.js가 연결됐습니다!!!");

// 1. 배열 기초 선언 및 인덱스 접근
const fruites = ["사과", "바나나", "오렌지"];
console.log(fruites[0]); // 첫 번째 요소(사과) 출력. 인덱스는 0부터 시작
console.log(fruites[2]); // 세 번째 요소(오렌지) 출력
console.log(fruites[fruites.length - 1]); // 마지막 요소 출력 공식 (길이 - 1)
console.log(fruites[5]); // 없는 인덱스 접근 시 undefined 출력
console.log(fruites.length); // 배열의 총 길이(3) 출력

// 배열 요소 변경 및 추가
fruites[1] = "망고"; // 1번 인덱스(바나나)를 망고로 변경
console.log(fruites);

// 배열 맨 뒤에 추가할 때는 push 사용 권장 (인덱스 번호 직접 지정 대신)
fruites.push("포도"); 
console.log(fruites);

// 2. length를 활용한 배열 전체 반복 및 누적 계산
const scores = [80, 95, 70, 55]; // 점수 배열
let total = 0; // 누적 합계용 변수 초기화
// 배열 길이만큼 반복하여 모든 점수 합산
for (let i = 0; i < scores.length; i++) {
  const score = scores[i];
  total += score;
}
console.log("총합", total);
console.log("평균", total / scores.length); // 총합을 배열 길이로 나누어 평균 산출

// 3. 배열 요소 추가 및 제거 (push, pop, unshift, shift)
console.log(fruites);

fruites.push("딸기"); // 배열 맨 뒤에 '딸기' 추가
console.log(fruites);

const poped = fruites.pop(); // 배열 맨 뒤 요소 뽑아내기 (제거 및 반환)
console.log(poped); // 뽑혀 나온 '딸기' 출력
console.log(fruites);

fruites.unshift("수박"); // 배열 맨 앞에 '수박' 추가
console.log(fruites);

const shifted = fruites.shift(); // 배열 맨 앞 요소 뽑아내기
console.log(shifted); // 뽑혀 나온 '수박' 출력
console.log(fruites);

// 4. 배열 splice (특정 위치 지우기, 바꾸기, 끼워넣기)
// 1번 인덱스부터 1개 지우고, 그 자리에 "딸기" 끼워넣기 (반환값은 지워진 요소 배열)
const removed = fruites.splice(1, 1, "딸기"); 
console.log(removed); // 지워진 요소 출력
console.log(fruites); // 조작이 끝난 원본 배열 출력

// 5. 객체 (Object) 선언 및 데이터 접근
const bread = {
  name: "팥붕어빵",
  price: 1000,
  ingredients: ["밀가루", "팥", "설탕"], // 객체 안에 배열 포함 가능
  isHot: true,
};
console.log(bread);
console.log("이름 :", bread.name); // 점(.) 표기법으로 속성 접근
console.log("가격 :", bread.price);
console.log("크기 :", bread.size); // 정의되지 않은 속성은 undefined
console.log("따뜻한가요? :", bread["isHot"]); // 대괄호 표기법으로 접근 (bread.isHot과 동일)

// 객체 속성 수정 및 추가
bread.price = 500; // 기존 속성 값 변경
bread.owner = "김오즈"; // 새로운 속성 추가
console.log(bread);

// 6. 중첩 객체와 메서드(함수)
const user = {
  userName: "김오즈",
  address: { // 객체 안의 객체 (중첩)
    city: "서울",
    zip: "04524",
  },
  likes: ["커피", "코딩"],
  greet() { // 객체 안에 정의된 함수 (메서드)
    return "안녕하세요";
  },
};
console.log(user);
console.log(user.address.city); // 중첩 객체 접근 연속 사용
console.log(user.likes[1]); // 객체 내 배열 요소 접근
console.log(user.likes.length);
console.log(user.greet()); // 객체 메서드 호출

// 7. 객체 배열 (데이터베이스/API 응답의 핵심 형태)
const products = [
  { id: 1, pdctName: "에코백", price: 12000, stock: 5 },
  { id: 2, pdctName: "텀블러", price: 18000, stock: 0 },
  { id: 3, pdctName: "머그컵", price: 9000, stock: 12 },
];
console.log(products);
console.log(products[0].pdctName); // 0번 객체의 상품명 접근
console.log(products[2].price); // 2번 객체의 가격 접근

// 8. 객체 배열 for문 순회하며 계산하기
let pdctTotal = 0; // 총 재고 금액 누적용 변수
for (let i = 0; i < products.length; i++) {
  const item = products[i]; // 배열 안의 각 객체를 item에 담음
  console.log(`${item.pdctName} ${item.price}원`);
  pdctTotal += item.price * item.stock; // 각 상품의 (가격 * 재고) 누적 합산
}
console.log(`재고 금액 합계 ${pdctTotal}원`);

// 9. JSON 데이터 변환 (통신용 포맷)
// 자바스크립트 객체 배열을 JSON 문자열 데이터로 변환
const json = JSON.stringify(products); 
console.log(json);

// JSON 문자열 데이터를 다시 자바스크립트 객체로 복원
const back = JSON.parse(json); 
console.log(back);