// 문제출처: https://www.acmicpc.net/problem/1213
// 문제풀이: https://breathtaking-life.tistory.com/166#toc-[%EC%BD%94%EB%93%9C&%ED%92%80%EC%9D%B4]
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "../../../input-wh.txt";
const splitter = file ? "\n" : "\r\n";
const input = fs.readFileSync(file).toString().trim().split(splitter);
const inputArr = input[0].split("");

let table = new Map();
// Map 객체를 활용할 경우 for of 를 사용할 수 있다.
for (const el of inputArr) {
  table.has(el) ? table.set(el, table.get(el) + 1) : table.set(el, 1);
}

// [...table] 은 table 객체의 모든 요소를 추출한 후 배열에 할당하는 과정을 축약한 것
// (a, b) => a[0].localCompare(b[0])); 는 사전식 정렬을 의미함
table = Object.values([...table].sort((a, b) => a[0].localeCompare(b[0])));

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


*/
