// 문제출처:
const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'input-jy.txt';
const splitter = file ? '\n' : '\r\n';
const input = fs.readFileSync(file).toString().trim().split(splitter);
console.log(input);
const arr = input.split(' ');
console.log(arr.length);
