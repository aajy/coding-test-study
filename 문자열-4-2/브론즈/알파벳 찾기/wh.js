// 문제출처: https://www.acmicpc.net/problem/10809
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "../../../input-wh.txt";
const splitter = file ? "\n" : "\r\n";
const input = fs.readFileSync(file).toString().trim().split(splitter);

const targetInput = input[0].split("");
const arr = "qwertyuiopasdfghjklzxcvbnm";
const alphabets = arr.split("").sort();

for (let i = 0; i < alphabets.length; i++) {
  console.log(targetInput.indexOf(alphabets[i]));
}
/*

*/

/*
  영문자의 댓문자 변경은
  toLowerCase, toUpperCase 를 활용한다.
*/

/* [a - z] 배열은 암기를 해야한다. */
// 객체.속성 꼴은 대상의 행위, 대상의 값 으로 이해한다. (주어가 아니라는 말)
