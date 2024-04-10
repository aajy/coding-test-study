// 문제출처: https://www.acmicpc.net/problem/1157
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "../../../input-wh.txt";
const splitter = file ? "\n" : "\r\n";
const input = fs.readFileSync(file).toString().trim().split(splitter);

const target = input[0];
// 배열에서 '여러개의' 원소의 개수를 세는 방법
