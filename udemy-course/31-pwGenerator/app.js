// *======= SELECTOR =======*
const resultEl = document.getElementById("result");
const clipboardEl = document.getElementById("clipboard");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");

const alertEl = document.getElementById("alert");
const resultContainer = document.querySelector("result-container");
// *======= GLOBAL VAR =======*
const funcContainer = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// *======= EVENT LISTENER =======*
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const upperVal = uppercaseEl.checked;
  const lowerVal = lowercaseEl.checked;
  const numbersVal = numbersEl.checked;
  const symbolsVal = symbolsEl.checked;

  resultEl.innerText = generatePw(
    length,
    upperVal,
    lowerVal,
    numbersVal,
    symbolsVal
  );
});

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;
  textarea.value = password;
  if (!password || password == "Choose the settings!") {
    showAlert("Select at least 1 setting!", "warning");
    return "";
  }

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  showAlert("Password has been copied.", "success");
});

// *======= FUNCTION =======*
function getRandomLower() {
  // refer: HTML ASCII -> w3sch | String -> MozDev
  return String.fromCharCode(mathRandom(26, 97));
}

function getRandomUpper() {
  return String.fromCharCode(mathRandom(26, 65));
}

function getRandomNumber() {
  return String.fromCharCode(mathRandom(10, 48));
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[mathRandom(symbols.length)];
}

function generatePw(length, upper, lower, number, symbol) {
  let pwContainer = "";

  const activeSettings = upper + lower + number + symbol;
  if (activeSettings === 0) {
    return "Choose the settings!";
  }

  const activeSettingsArr = [
    { upper },
    { lower },
    { number },
    { symbol },
  ].filter((setting) => Object.values(setting)[0]);

  for (let i = 0; i < length; i += activeSettings) {
    activeSettingsArr.forEach((setting) => {
      const usedFunc = Object.keys(setting)[0];
      pwContainer += funcContainer[usedFunc]();
    });
  }

  const generatedPw = pwContainer.slice(0, length).split("");
  //?hint? console.log(generatedPw);

  const finalPw = shuffle(generatedPw).join("");
  return finalPw;
}

function showAlert(text, action) {
  alertEl.innerText = text;
  alertEl.classList.add(`alert-${action}`);
  setTimeout(() => {
    alertEl.innerText = "";
    alertEl.classList.remove(`alert-${action}`);
  }, 2000);
}

function mathRandom(multiplier, ascii = null) {
  return Math.floor(Math.random() * multiplier) + ascii;
}

function shuffle(array) {
  for (let i = array.length; i !== 0; i--) {
    const randomIndex = mathRandom(i);
    //?hint? console.log("i = " + i, "randomIndex = " + randomIndex);

    tempValue = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = tempValue;

    //?hint? console.log(`tempValue = ${tempValue}`);
    //?hint? console.log(`array[i] = ${array[i]}`);
    //?hint? console.log(`array[randomIndex] = ${tempValue}`);
  }

  return array;

  // let currentIndex = array.length,
  //   temporaryValue,
  //   randomIndex;

  // // While there remain elements to shuffle...
  // while (0 !== currentIndex) {
  //   // Pick a remaining element...
  //   currentIndex -= 1;

  //   // And swap it with the current element.
  //   temporaryValue = array[currentIndex];
  //   array[currentIndex] = array[randomIndex];
  //   array[randomIndex] = temporaryValue;
  // }
}

// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());
