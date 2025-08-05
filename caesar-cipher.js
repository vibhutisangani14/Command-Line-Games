console.log(process.argv);
const alphabets = "abcdefghijklmnopqrstuvwxyz";

const userInput = process.argv.slice(2);
const inputString = userInput[0];
const inputArray = inputString.split("");
console.log(inputArray);

const position = userInput[1];
const inputPosition = parseInt(userInput[1]);
console.log("user Input :- " + inputPosition);

function isOnlyLetters(str) {
  return !/\d/.test(str);
}
// console.log(inputString);

if (inputPosition > 26 || inputPosition < -26) {
  console.log("Please enter position between -26 to 26");
  return;
} else if (!isOnlyLetters(inputString)) {
  console.log("Please enter first input only as a String");
  return;
} else if (isOnlyLetters(position)) {
  console.log("Please write the second input as a number");
  return;
}

let newArray = [];

for (let index = 0; index < inputArray.length; index++) {
  let shiftedLetter;
  const element = inputArray[index];

  if (element !== " ") {
    const letter = element.toLowerCase();
    const actualPosition = alphabets.indexOf(letter) + 1;
    let pos = actualPosition + inputPosition;
    if (pos > alphabets.length) {
      pos = alphabets.length - actualPosition;
      const finalPos = inputPosition - pos;

      shiftedLetter = alphabets[finalPos - 1];
    } else if (pos < 1) {
      pos = alphabets.length + pos;
      shiftedLetter = alphabets[pos - 1];
    } else {
      shiftedLetter = alphabets[pos - 1];
    }
    newArray[index] = shiftedLetter;
  } else {
    newArray[index] = element;
    console.log(element);
  }
}
console.log("Input :- " + inputString);

console.log("Output :- " + newArray.join(""));
