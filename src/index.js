const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let array = expr.split('');
  let result = [];
  let letter = '';
  let resultLetter = [];
  let resultSentence = '';
  console.log(array.length);
  for (let i = 0; i <= expr.length; i++) {
    result.push(array.splice(0, 10).join(''));
  }
  for (let i = 0; i < result.length; i++) {
    let value = result[i];
    for (let j = 0; j < value.length; j += 2) {
      if ((value[j] + value[j + 1]) === '00') {
        continue;
      }
      if ((value[j] + value[j + 1]) === '10') {
        letter += '.';
        resultLetter.push(letter);
        letter = '';
      }
      if ((value[j] + value[j + 1]) === '11') {
        letter += '-';
        resultLetter.push(letter);
        letter = '';
      }
    }
    resultSentence += MORSE_TABLE[resultLetter.join('')];
    resultLetter = [];
  }
  return resultSentence.replaceAll(/undefined/g, ' ').trimRight();
}

module.exports = {
  decode
}