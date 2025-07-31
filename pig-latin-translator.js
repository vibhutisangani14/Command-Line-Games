const args = process.argv.slice(2);
let translatorArray = [];
console.log(args);

const isVowel = (letter) => {
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  )
    return true;
};

for (let element of args) {
  let isCapital;
  if (element[0] === element[0].toUpperCase()) {
    isCapital = true;
  }
  element = element.toLowerCase();

  if (isVowel(element[0])) {
    element = element + "way";
  } else if (!isVowel(element[0]) && isVowel(element[1])) {
    const firstLetter = element[0];
    element = element.slice(1) + firstLetter + "ay";
  } else if (!isVowel(element[0] && !isVowel[element[1]])) {
    const firstTwoLetters = element[0] + element[1];
    element = element.slice(2) + firstTwoLetters + "ay";
  }
  if (isCapital) {
    translatorArray.push(element[0].toUpperCase() + element.slice(1));
    isCapital = false;
  } else {
    translatorArray.push(element);
  }
}

const output = translatorArray.join(" ");
console.log(`Output: ${output}`);
