// 1. 바뀌지 않는 값 (상수 선언)
// TODO 지우고 const 적용 (제목, 작가, 가격은 고정값)
const title = "처음 만나는 JavaScript"; 
const author = "김코딩";
const price = 18000;

// 2. 바뀌는 값 (변수 선언)
// TODO 지우고 let 적용 (재고는 팔리면 줄어듦)
let stock = 3; 
let isSoldOut = false; // 품절 여부 (바뀔 수 있음)

// 3. 일부러 비워 둔 값
// TODO 지우고 null 적용 (쿠폰이 아직 없음을 명시)
let coupon = null; 

// 4. 재고 감소 로직 (한 권이 팔림)
stock = 2; // let으로 선언했으므로 값 변경 가능

// 5. 콘솔 출력 (기본 정보)
console.log(`${title} · ${author}`);
// TODO 지우고 price 변수 연결
console.log(`가격 ${price}원 · 재고 ${stock}권`); 
console.log("품절 :", isSoldOut);
console.log("쿠폰 :", coupon);

// 6. 자료형(Type) 확인 출력
// TODO 지우고 typeof 연산자 적용
console.log("title :", typeof title); // 결과: string
console.log("price :", typeof price); // 결과: number
console.log("isSoldOut :", typeof isSoldOut); // 결과: boolean
console.log("coupon :", typeof coupon); // 결과: object (null의 특이성)

// 7. 경고 메시지 출력
// TODO 지우고 warn 메서드 적용 (노란색 글씨로 출력)
console.warn("재고가 2권 남았습니다");