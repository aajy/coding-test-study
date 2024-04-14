// 문제출처: https://www.acmicpc.net/problem/10988
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "../../../input-wh.txt";
const splitter = file ? "\n" : "\r\n";
const input = fs.readFileSync(file).toString().trim().split(splitter);

const inputArr = input[0].split("");

const firstStack = [];
const lastStack = [];

// firstStack 채우기
inputArr.forEach((el) => firstStack.push(el));
const first = firstStack.join("");

// lastStack 채우기
for (let i = inputArr.length - 1; i >= 0; i--) {
  lastStack.push(inputArr[i]);
}
const last = lastStack.join("");

console.log(last === first ? 1 : 0);
