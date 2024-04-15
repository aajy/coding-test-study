// 문제출처: https://www.acmicpc.net/problem/1100
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "../../../input-wh.txt";
const splitter = file ? "\r\n" : "\r\n";
const input = fs.readFileSync(file).toString().trim().split(splitter);

let answer = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[0].length; j++) {
    if ((i + j) % 2 === 0 && input[i][j] === "F") {
      answer++;
    }
  }
}

console.log(answer);

// [0, 0], [0, 2], [0, 4]
// [1, 1], [1, 3], [1, 5]
// i + j 가 짝수일 때 하얀칸이다.

// 규칙은 인덱스로 찾는다.
