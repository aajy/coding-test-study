// 문제출처:https://www.acmicpc.net/problem/1157
let fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'input-jy.txt';
let input = fs.readFileSync(file).toString().toUpperCase().split('');

let arr = [];
let arr2 = Array(26).fill(0);
for (let i = 'A'.charCodeAt(); i <= 'Z'.charCodeAt(); i++) {
	arr.push(String.fromCharCode(i));
}

for (let i = 0; i < input.length; i++) {
	arr2[arr.indexOf(input[i])]++;
}

const maxNum = Math.max.apply(null, arr2);
arr2.indexOf(maxNum) == arr2.lastIndexOf(maxNum) ? console.log(arr[arr2.indexOf(maxNum)]) : console.log('?');

// A-Z를 배열로 담을때 charCodeAt과 String.fromCharCode를 사용한다.
// Math.max(숫자, 숫자, 숫자) 일 때 가장 큰 수를 반환한다. 하지만 인자로 배열은 읽지 못하므로 아래 apply 함수를 사용한다.
// apply 메소드 구문 : func.apply(thisArg, [argsArray])
// func은 실행할 함수
// thisArg는 func 함수 내에서 사용될 this의 값
// [argsArray]는 함수에 전달될 인수의 배열
