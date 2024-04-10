// 문제출처: https://www.acmicpc.net/problem/2744
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "../../../input-wh.txt";
const splitter = file ? "\n" : "\r\n";
const input = fs.readFileSync(file).toString().trim().split(splitter);

const targetStr = input[0];
const answer = [];

for (let i = 0; i < targetStr.length; i++) {
  if (targetStr[i] === targetStr[i].toUpperCase()) {
    answer.push(targetStr[i].toLowerCase());
  } else {
    answer.push(targetStr[i].toUpperCase());
  }
}

console.log(answer.join(""));

// 대문자, 소문자를 따지지 않고 toUpperCase, toLowerCase 를 통해 문자의 대소문자를 구분할 수 있다.
