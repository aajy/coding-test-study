// 문제출처: https://www.acmicpc.net/problem/1213
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "../../../input-wh.txt";
const splitter = file ? "\n" : "\r\n";
const input = fs.readFileSync(file).toString().trim().split(splitter);

// 1차원배열을 순회하면서 table을 만들기
const inputArr = input[0].split("");
const table = {};

inputArr.forEach((el) => {
  if (!table[el]) table[el] = 1;
  else table[el]++;
});

console.log(table);

// 개수를 통해 규칙찾기
