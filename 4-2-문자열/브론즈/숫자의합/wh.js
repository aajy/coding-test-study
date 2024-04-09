// 문제출처:
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "../../../input-wh.txt";
const splitter = file ? "\n" : "\r\n";
const input = fs.readFileSync(file).toString().trim().split(splitter);

const length = Number(input[0]);
const number = input[1];

// https://www.acmicpc.net/problem/11720
let answer = 0;
for (let i = 0; i < length; i++) {
  answer += Number(number[i]);
}

console.log(answer);

/* '공백없이' 를 다루는 방법 
- str.split('');
- 문자열은 index 를 통해 접근 가능하다.
*/
