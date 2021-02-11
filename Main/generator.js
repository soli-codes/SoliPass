let alphaNumeric = [
  [
    'A',
    'a',
    'B',
    'b',
    'C',
    'c',
    'D',
    'd',
    'E',
    'e',
    'F',
    'f',
    'G',
    'g',
    'H',
    'h',
    'I',
    'i',
    'J',
    'j',
    'K',
    'k',
    'L',
    'l',
    'M',
    'm',
    'N',
    'n',
    'O',
    'o',
    'P',
    'p',
    'Q',
    'q',
    'R',
    'r',
    'S',
    's',
    'T',
    't',
    'U',
    'u',
    'V',
    'v',
    'W',
    'w',
    'X',
    'x',
    'Y',
    'y',
    'Z',
    'z',
  ],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '=', '+', '-'],
];

let generateRandomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

let generateAlphaNumericNoSpecialChars = () => {
  let arrFirstNum = generateRandomNumber(2);
  if (arrFirstNum === 0) {
    return alphaNumeric[0][generateRandomNumber(52)];
  } else return alphaNumeric[1][generateRandomNumber(9)];
};

let generateAlphaNumericWithSpecialChars = () => {
  let arrFirstNum = generateRandomNumber(3);
  if (arrFirstNum === 0) {
    return alphaNumeric[0][generateRandomNumber(52)];
  } else if (arrFirstNum === 1) {
    return alphaNumeric[1][generateRandomNumber(9)];
  } else return alphaNumeric[2][generateRandomNumber(14)];
};

let generatePassword = () => {
  let pwLength = document.querySelector('#passwordLength').value;
  let password = '';
  let i = 0;
  if (document.querySelector('#hasSpecialCharacters').checked) {
    while (i < pwLength) {
      password += generateAlphaNumericWithSpecialChars();
      i++;
    }
  } else
    while (i < pwLength) {
      password += generateAlphaNumericNoSpecialChars();
      i++;
    }
  return password;
};
