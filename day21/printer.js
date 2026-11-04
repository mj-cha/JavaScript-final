console.log("printer.js");

// export const title = "CodePrinter";
// export function print(value) {
//   console.log(value);
// }

// 파일의 대표 하나 내보내기 - export default
const title = "CodePrinter";
function print(value) {
  console.log(value);
}

export default {
  title,
  print,
};
