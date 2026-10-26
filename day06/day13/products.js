// DAY 13 실습 02 — 상품 목록 다루기

// 1. 상품 하나는 객체, 상품 목록은 객체 배열 (실무 API 데이터의 기본 형태)
const products = [
  { id: 1, name: "에코백", price: 12000, stock: 5 },
  { id: 2, name: "텀블러", price: 18000, stock: 0 },
  { id: 3, name: "머그컵", price: 9000, stock: 12 },
];

// 2. 하나씩 꺼내 보기 — 점 표기법과 대괄호 표기법
console.log(products[0].name); // 0번 인덱스(첫 번째) 객체의 name 속성 접근 -> "에코백"
console.log(products[2]["price"]); // 2번 인덱스(세 번째) 객체의 price 속성 접근 -> 9000

// 3. 전체 목록을 출력하고 재고 금액을 더하기
let total = 0; // 누적 합계를 담을 바구니 (반드시 반복문 밖에 선언)
for (let i = 0; i < products.length; i++) {
  const item = products[i]; // 배열 안의 개별 객체를 item 변수에 쏙 담아둠
  console.log(`${item.id}. ${item.name} ${item.price}원 (재고 ${item.stock}개)`);
  total += item.price * item.stock; // (단가 * 재고량)을 계산해 total 바구니에 계속 누적
}
console.log(`재고 금액 합계 ${total}원`); // 총합계 출력

// 4. 품절 상품의 이름만 모으기 — for + if + push 조합 (필터링 패턴)
const soldOut = []; // 품절 상품 이름만 담을 텅 빈 배열 준비
for (let i = 0; i < products.length; i++) {
  if (products[i].stock === 0) { // 만약 현재 상품의 재고가 0개라면?
    soldOut.push(products[i].name); // 준비한 빈 배열에 그 상품의 이름만 쏙 밀어 넣음
  }
}
console.log("품절", soldOut); // 결과: ["텀블러"]

// 5. 새 상품을 추가하고, 기존 상품 가격 바꾸기
// 새로운 상품 객체를 만들어 products 배열 맨 뒤에 추가
products.push({ id: 4, name: "키링", price: 5000, stock: 30 }); 
products[1].price = 16000; // 1번 인덱스(텀블러)의 가격을 18000에서 16000으로 수정
console.log(`상품 ${products.length}개, 텀블러 ${products[1].price}원`); // 배열 길이(4)와 수정된 가격 반영

// 6. 객체를 JSON 글로 바꾸고, 다시 객체로 되돌리기 (데이터 통신 준비)
// 3번 인덱스(새로 추가된 키링 객체)를 통신용 문자열(JSON)로 변환
const json = JSON.stringify(products[3]); 
console.log(json); // {"id":4,"name":"키링","price":5000,"stock":30} (문자열 형태)
console.log(typeof json); // 타입 확인 결과: string (문자열)

// 문자열로 굳어진 JSON 데이터를 다시 자바스크립트 객체로 복원
const item = JSON.parse(json); 
console.log(item.name); // 복원되었기 때문에 다시 점(.) 표기법으로 접근 가능 -> "키링"