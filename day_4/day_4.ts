import { readFileSync } from 'fs';

const contents = readFileSync("/Users/sperrochsy/Projects/advent_of_codez/2022/day_4/day_4.txt", 'utf-8');
const arr = contents.split(/\r?\n/);


// Part One
let count = 0;

for (let pair of arr) {
    let [first, second] = pair.split(",");
    let [first_start, first_end] = first.split("-").map(x => parseInt(x,10));
    let [second_start, second_end] = second.split("-").map(x => parseInt(x, 10));
    
    if ((first_start >= second_start && first_end <= second_end)
        || (second_start >= first_start && second_end <= first_end))
    {
        count += 1;
    }
}

console.log(count)

// Part Two
let cnt = 0;

for (let pair of arr) {
    let [first, second] = pair.split(",");
    let [first_start, first_end] = first.split("-").map(x => parseInt(x,10));
    let [second_start, second_end] = second.split("-").map(x => parseInt(x, 10));
    
    if ((first_start >= second_start && first_end <= second_end)
        || (second_start >= first_start && second_end <= first_end)
        || (first_start >= second_start && first_start <= second_end)
        || (second_start >= first_start && second_start <= first_end))
    {
        cnt += 1;
    }
}

console.log(cnt)