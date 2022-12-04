const {readFileSync} = require("fs");

const contents = readFileSync("day_1.txt", 'utf-8');
const arr = contents.split(/\r?\n/);

let buffer = 0
let reduced = [];

for (let cal of arr) {
    if (cal === "") {
        reduced.push(buffer);
        buffer = 0;
    } else {
        buffer += parseInt(cal)
    }
}

reduced.sort()
console.log(reduced.slice(-3))