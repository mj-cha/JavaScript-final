console.log("main.js");

// // 가져오면서 이름 바꾸기
// import { title as printTitle, print } from "./printer.js";

// const title = "CodeMain";
// print(title);
// print(printTitle);

// // 내보낸 것을 한꺼번에 가져오기
// import * as printer from "./printer.js";

// printer.print(printer.title);
// console.log(printer);

// 파일의 대표 하나 가져오기
import printer from "./printer.js";

printer.print(printer.title);

const count = 3;
console.log(printer.title, count);
