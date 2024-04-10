// 문제출처: https://www.acmicpc.net/problem/9093
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "../../../input-wh.txt";
const splitter = file ? "\n" : "\r\n";
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(splitter)
  .map((el) => el.trim());
input.shift();

for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(" ");
  const answer = [];
  for (let j = 0; j < arr.length; j++) {
    answer.push(arr[j].split("").reverse().join(""));
  }
  console.log(answer.join(" "));
}
