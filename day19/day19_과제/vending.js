// 음료 자판기 — 동전을 넣고 음료를 고르면 넣은 돈과 오늘 판매액이 바뀝니다
// [화면 자리 4곳] HTML의 id로 찾아 변수에 담아 둠
const balanceEl = document.querySelector("#balance");
const totalEl = document.querySelector("#total");
const messageEl = document.querySelector("#message");
const todayEl = document.querySelector("#today");

// 1. 자판기 객체 — 넣은 돈(balance)과 판 음료의 가격(sales)을 가집니다
const machine = {                           // [자판기 본체]
  balance: 0,                               // 금고: 넣은 돈 (처음 0원)
  sales: [],                                // 판매 장부: 판 가격을 쌓음

  insert(amount) {                          // [동전 투입구]
    this.balance += amount;                 // [TODO 1: this] this = machine
    this.show(`${amount}원을 넣었습니다`);  // 화면 갱신 부탁
  },

  buy(name, price) {                        // [음료 버튼 처리]
    if (this.balance < price) {             // 돈이 모자라면
      // 모자란 금액 안내
      this.show(`${price - this.balance}원이 모자랍니다`);
      return;                               // 여기서 끝 (아래 안 감)
    }
    this.balance -= price;                  // 금고에서 가격만큼 뺌
    this.sales.push(price);                 // 판매 장부 끝에 기록
    this.show(`${name} 1개가 나왔습니다`);  // 화면 갱신 부탁
  },

  show(message) {                           // [화면 갱신 담당]
    // [TODO 2: reduce, TODO 3: 0] 장부 가격을 0부터 모두 더함
    const total = this.sales.reduce((sum, price) => sum + price, 0);
    // 화면 세 곳에 쓰기: 넣은 돈 · 판매액 · 안내 문구
    balanceEl.textContent = `${this.balance}원`;
    totalEl.textContent = `${total}원`;
    messageEl.textContent = message;
  },
};

// 2. 음료 버튼에 넣을 함수를 만들어 주는 함수 (고차 함수)
function makeBuyer(name, price) {           // [버튼용 함수 제작기]
  return () => machine.buy(name, price);    // [TODO 4: return] 버튼용 함수 반환
}

// 3. 오늘 날짜 — 판매 칸 앞에 「10월 29일」처럼 씁니다 (달은 0부터라 + 1)
const today = new Date();                   // [TODO 5: Date] 인수 없음 = 지금
// [TODO 6: getDate] 며칠(1부터 31). getDay는 요일이라 다름
todayEl.textContent = `${today.getMonth() + 1}월 ${today.getDate()}일`;

// 4. 버튼 연결 — 동전 버튼에는 화살표 함수 안에서 machine.insert를 부르는 함수를 넘깁니다
// [동전 버튼] 화살표 함수로 감쌈 → 그냥 넘기면 this가 끊김 (04번 ⓑ)
document.querySelector("#coin-500").addEventListener("click", () => machine.insert(500));
document.querySelector("#coin-1000").addEventListener("click", () => machine.insert(1000));
// [음료 버튼] makeBuyer가 만들어 준 함수를 등록 (지금 사는 게 아님)
document.querySelector("#water").addEventListener("click", makeBuyer("물", 800));
document.querySelector("#juice").addEventListener("click", makeBuyer("주스", 1200));

machine.show("동전을 넣어 주세요");         // 첫 화면: 0원, 판매 0원
