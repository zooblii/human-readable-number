module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 20) {
    return ones[number];
  }

  if (number < 100) {
    const partTens = tens[Math.floor(number / 10)];
    const partOnes = number % 10 === 0 ? '' : ones[number % 10];
    return `${partTens}${partOnes ? ` ${partOnes}` : ''}`;
  }

  if (number < 1000) {
    const partHundred = `${ones[Math.floor(number / 100)]} hundred`;
    const remainder = number % 100;
    let partTens = '';
    let partOnes = '';

    if (remainder < 20 && remainder > 0) {
      partOnes = ones[remainder];
    } else if (remainder >= 20) {
      partTens = tens[Math.floor(remainder / 10)];
      if (remainder % 10 !== 0) {
        partOnes = ones[remainder % 10];
      }
    }

    return remainder
      ? `${partHundred} ${remainder < 20 ? ones[remainder] : `${partTens}${partOnes ? ` ${partOnes}` : ''}`}`
      : partHundred;
  }

  if (number < 10000) {
    const partThousand = `${ones[Math.floor(number / 1000)]} thousand`;
    const remainder = number % 1000;
    const remainderPart = remainder ? toReadable(remainder) : '';
    return `${partThousand}${remainderPart ? ` ${remainderPart}` : ''}`;
  }

  return '';
};
