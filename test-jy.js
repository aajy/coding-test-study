let fs = require('fs');
let inputArr = fs.readFileSync('input-jy.txt').toString().split(/\r?\n/);
console.log('inputArr: ', inputArr);

// const file = process.platform === 'linux' ? '/dev/stdin' : 'input-jy.txt';
// const inputArr = fs.readFileSync(file).toString().split('\r\n');

let len = parseInt(inputArr[0]);

for (let i = 1; i <= len; i++) {
	let words = inputArr[i].split(' ');
	console.log('words: ', words);
	let answer = words.map((word) => word.split('').reverse().join('')).join(' ');
	console.log(answer);
}
