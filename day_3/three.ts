import { readFileSync } from 'fs';

const contents = readFileSync("/Users/sperrochsy/Projects/advent_of_codez/2022/day_3/day_3.txt", 'utf-8');
const arr = contents.split(/\r?\n/);

let chars = "abcdefghijklmnopqrstuvwxyz";
chars += chars.toUpperCase();

let priorities = {}
let priority = 1
for (let c of chars) {
    priorities[c] = priority;
    priority += 1
}

let sum_of_priorities = 0;

while (arr.length > 0) {
    let next_three = arr.splice(0, 3);
    let first = next_three[0].split('');
    let second = new Set(next_three[1].split(''))
    let third = new Set(next_three[2].split(''))

    const intersection = new Set(first.filter((x) => second.has(x) && third.has(x)))
    sum_of_priorities += priorities[Array.from(intersection)[0]]
}

console.log(sum_of_priorities)