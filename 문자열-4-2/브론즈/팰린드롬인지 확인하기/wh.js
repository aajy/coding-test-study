// 문제출처: https://www.acmicpc.net/problem/10988
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "../../../input-wh.txt";
const splitter = file ? "\n" : "\r\n";
const input = fs.readFileSync(file).toString().trim().split(splitter);
