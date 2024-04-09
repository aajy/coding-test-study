// 문제출처: https://www.acmicpc.net/problem/10809
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "../../../input-wh.txt";
const splitter = file ? "\n" : "\r\n";
const input = fs.readFileSync(file).toString().trim().split(splitter);

console.log("asd JEJEje".split(" ")[1].toLowerCase());

/*
  영문자의 댓문자 변경은
  toLowerCase, toUpperCase 를 활용한다.
*/
