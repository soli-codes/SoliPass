const dialog = require('electron').remote.dialog;

const alphaNumeric = [
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
let pwLength = document.querySelector('#passwordLength');
let pwName = document.querySelector('#passwordName');

const generateRandomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

const generateAlphaNumericNoSpecialChars = () => {
  let arrFirstNum = generateRandomNumber(2);
  if (arrFirstNum === 0) {
    return alphaNumeric[0][generateRandomNumber(52)];
  } else return alphaNumeric[1][generateRandomNumber(9)];
};

const generateAlphaNumericWithSpecialChars = () => {
  let arrFirstNum = generateRandomNumber(3);
  if (arrFirstNum === 0) {
    return alphaNumeric[0][generateRandomNumber(52)];
  } else if (arrFirstNum === 1) {
    return alphaNumeric[1][generateRandomNumber(9)];
  } else return alphaNumeric[2][generateRandomNumber(14)];
};

// Generates a random password, with special characters if box is checked when called
const generatePassword = () => {
  let password = '';
  let i = 0;
  if (document.querySelector('#hasSpecialCharacters').checked) {
    while (i < pwLength.value) {
      password += generateAlphaNumericWithSpecialChars();
      i++;
    }
  } else
    while (i < pwLength.value) {
      password += generateAlphaNumericNoSpecialChars();
      i++;
    }
  return password;
};

// Writes password to pw.json file
const writePasswordToFile = () => {
  let name = pwName.value;
  // Makes sure a length was given, and generates password if so
  if (pwLength.value < 1) {
    dialog.showErrorBox(
      'Wrong Length',
      'Please enter a length greater than 0.'
    );
    return;
  }
  let password = generatePassword();
  // Checks if pw is false or not (if false, pw.json does not exist) and creates the base object to turn into JSON if not
  if (pw === false) {
    let baseObject = {
      passwords: {},
    };
    baseObject['passwords'][name] = password;
    let baseData = JSON.stringify(baseObject, null, 2);
    fs.writeFileSync(`${__dirname}/pw.json`, baseData);
    return;
  }
  // Makes sure something was input into name
  if (name.length < 1) {
    dialog.showErrorBox('No Name', 'Please enter a name.');
    return;
  }
  // Makes sure password does not already exist
  if (pw['passwords'][name] != null) {
    dialog.showErrorBox(
      'Already Exists',
      'That password already exists, please try another name'
    );
    return;
  } else {
    pw['passwords'][name] = password;
  }
  let data = JSON.stringify(pw, null, 2);
  fs.writeFileSync(`${__dirname}/pw.json`, data);
};
