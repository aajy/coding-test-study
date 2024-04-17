// 문제출처: https://www.acmicpc.net/problem/1213
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "../../../input-wh.txt";
const splitter = file ? "\n" : "\r\n";
const input = fs.readFileSync(file).toString().trim().split(splitter);

// 1차원배열을 순회하면서 table을 만들기 === 객체만들기
const inputArr = input[0].split("");
const table = new Map();

inputArr.forEach((el) => {});

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

  오버로딩과 오버라이딩의 차이점을 아나요?

  오버로딩은 이름은 같지만 시그니쳐가 다른 함수를 만들어서 사용하는 것
  오버라이딩은 상속관계에서 자식클래스에서 부모클래스의 메소드와 시그니처가 같은 메소드를 만드는 것

*/
