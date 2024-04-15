// 문제출처: https://www.acmicpc.net/problem/1213
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "../../../input-wh.txt";
const splitter = file ? "\n" : "\r\n";
const input = fs.readFileSync(file).toString().trim().split(splitter);

// 1차원배열을 순회하면서 table을 만들기 === 객체만들기
const inputArr = input[0].split("");
const table = {};

inputArr.forEach((el) => {
  if (!table[el]) table[el] = 1;
  else table[el]++;
});

let even = 0;
let odd = 0;

console.log(table);
for (const key in table) {
  table[key] % 2 === 0 ? even++ : odd++;
}

if (odd > 1) console.log("I'm Sorry Hansoo");

// 개수를 통해 규칙찾기
/*
  A:2 B:2 => 짝수는 무제한 + 홀수 0개
  A:3 B:2 => 짝수는 무제한 + 홀수 1개
  A:4 B:2 C:1 => 짝수는 무제한 + 홀수 1개 
  A:1 B:1 C:1 D:1 => 홀수 4개 
  A:2 B:2 C:1 D:1 => 짝수 2개 홀수 2개
*/

/* 
  table 만들기: Map vs Object

  Object은 iteration이 귀찮음
  Map은 익숙해지면 함수형으로 테이블을 다룰 수 있고, iteration이 가능해짐
*/
