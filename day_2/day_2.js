const {readFileSync} = require("fs");

const contents = readFileSync("day_2.txt", 'utf-8');
const arr = contents.split(/\r?\n/);

const sign_score = { "X": 0, "Y": 3, "Z": 6 };

let score = 0

for (let round of arr) {
    let [p1, p2] = round.split(" ");
    score += sign_score[p2];

    if (p1 === "A") {
        if (p2 === "X") {
            score += 3;
        } else if (p2 === "Y") {
            score += 1;
        } else {
            score += 2;
        }
    } else if (p1 === "B") { //paper
        if (p2 === "X") {
            score += 1
        } else if (p2 === "Y") {
            score += 2
        } else {
            score += 3
        }
    } else { // "C" "scissors"
        if (p2 === "X") {
            score += 2
        } else if (p2 === "Y") {
            score += 3
        } else {
            score += 1
        }
    }
}

console.log(score)