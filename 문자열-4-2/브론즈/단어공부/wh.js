// 문제출처: https://www.acmicpc.net/problem/1157
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "../../../input-wh.txt";
const splitter = file ? "\n" : "\r\n";
const input = fs.readFileSync(file).toString().trim().split(splitter);

const target = input[0];

console.log(target.split("").reduce((_, el) => console.log(el), {}));
// 배열에서 '여러개의' 원소의 개수를 세는 방법

/* 
  자바스크립트에서 동적으로 객체의 속성을 추가하는 방법
  obj[key] = value; 꼴을 이용할 것
*/
