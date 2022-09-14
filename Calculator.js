const previousDigit = document.getElementById("previousDigit");
const oparend = document.getElementById("oparend");
const currentDigit = document.getElementById("currentDigit");
const pecentageBtn = document.getElementById("pecentageBtn");
const squareRootBtn = document.getElementById("squareRootBtn");
const ceBtn = document.getElementById("ceBtn");
const clearBtn = document.getElementById("clearBtn");
const numOneBtn = document.getElementById("numOneBtn");
const numTwoBtn = document.getElementById("numTwoBtn");
const numThreeBtn = document.getElementById("numThreeBtn");
const numFourBtn = document.getElementById("numFourBtn");
const numFiveBtn = document.getElementById("numFiveBtn");
const numSixBtn = document.getElementById("numSixBtn");
const numSevenBtn = document.getElementById("numSevenBtn");
const numEightBtn = document.getElementById("numEightBtn");
const numNineBtn = document.getElementById("numNineBtn");
const numZeroBtn = document.getElementById("numZeroBtn");
const opSubBtn = document.getElementById("opSubBtn");
const opAddBtn = document.getElementById("opAddBtn");
const opMulBtn = document.getElementById("opMulBtn");
const opDivBtn = document.getElementById("opDivBtn");
const equalBtn = document.getElementById("equalBtn");
const decimalBtn = document.getElementById("decimalBtn");

//calculations
function getResult(firstnum, secondnum, val) {
  switch (val) {
    case "+":
      previousDigit.innerHTML = firstnum + secondnum;
      currentDigit.innerHTML = "";
      break;
    case "-":
      previousDigit.innerHTML = firstnum - secondnum;
      currentDigit.innerHTML = "";
      break;
    case "×":
      previousDigit.innerHTML = firstnum * secondnum;
      currentDigit.innerHTML = "";
      break;
    case "÷":
      previousDigit.innerHTML = firstnum / secondnum;
      currentDigit.innerHTML = "";
      break;
    case "%":
      previousDigit.innerHTML = (firstnum * secondnum) / 100;
      currentDigit.innerHTML = "";
      break;
    default:
      return "";
  }
}
function getSqureRoot(sqroot, val) {
  if (previousDigit.innerHTML === "" && currentDigit.innerHTML != "") {
    oparend.innerHTML = val;
    previousDigit.innerHTML = Math.sqrt(parseFloat(currentDigit.innerHTML));
    oparend.innerHTML = "";
    currentDigit.innerHTML = "";
  } else if (
    previousDigit.innerHTML != "" &&
    currentDigit.innerHTML == "" &&
    oparend.innerHTML != ""
  ) {
    currentDigit.innerHTML = val;
  }
}
function showResult() {
  let firstNumber = parseFloat(previousDigit.innerHTML);
  let secondNumber = parseFloat(currentDigit.innerHTML);
  let op = oparend.innerHTML;
  if (firstNumber === NaN || secondNumber === NaN) {
    return "";
  } else {
    previousDigit.innerHTML = "";
    currentDigit.innerHTML = "";
    oparend.innerHTML = "";
    getResult(firstNumber, secondNumber, op);
  }
}
function operations(type, val) {
  if (currentDigit.innerHTML.length <= 14) {
    switch (type) {
      case "digit":
        currentDigit.innerHTML = currentDigit.innerHTML + val;
        break;
      case "digitZero":
        if (currentDigit.innerHTML.length >= 1) {
          currentDigit.innerHTML = currentDigit.innerHTML + val;
        }
        break;
      case "dicimalPoint":
        if (currentDigit.innerHTML.includes(".")) {
          currentDigit.innerHTML = currentDigit.innerHTML;
        } else {
          currentDigit.innerHTML = currentDigit.innerHTML + val;
        }
        break;
      case "clear":
        currentDigit.innerHTML = "";
        previousDigit.innerHTML = "";
        oparend.innerHTML = "";
        break;
      case "delete":
        let text = currentDigit.innerHTML;
        currentDigit.innerHTML = text.slice(0, -1);
        break;
      case "calculate":
        let previeousop = oparend.innerHTML;
        if (previousDigit.innerHTML == "" && currentDigit.innerHTML != "") {
          previousDigit.innerHTML = currentDigit.innerHTML;
          oparend.innerHTML = val;
          currentDigit.innerHTML = "";
          break;
        } else if (
          previousDigit.innerHTML != "" &&
          currentDigit.innerHTML == ""
        ) {
          oparend.innerHTML = val;
          break;
        } else if (
          previousDigit.innerHTML != "" &&
          currentDigit.innerHTML != "" &&
          oparend.innerHTML != "" &&
          currentDigit.innerHTML.includes("√") === false
        ) {
          let firstnum = parseFloat(previousDigit.innerHTML);
          let secondnum = parseFloat(currentDigit.innerHTML);
          getResult(firstnum, secondnum, previeousop);
          break;
        } else if (
          previousDigit.innerHTML != "" &&
          currentDigit.innerHTML != "" &&
          oparend.innerHTML != "" &&
          currentDigit.innerHTML.includes("√") === true
        ) {
          let firstnum = parseFloat(previousDigit.innerHTML);
          let secondnNumber = currentDigit.innerHTML.slice(
            1,
            currentDigit.innerHTML.length
          );
          let secondnum = Math.sqrt(secondnNumber);
          console.log(Math.sqrt(secondnNumber));
          getResult(firstnum, secondnum, previeousop);
          break;
        }

        break;
      default:
        return "";
    }
  }
}

//create event listners
numOneBtn.addEventListener("click", () => {
  operations("digit", 1);
});
numTwoBtn.addEventListener("click", () => {
  operations("digit", 2);
});
numThreeBtn.addEventListener("click", () => {
  operations("digit", 3);
});
numFourBtn.addEventListener("click", () => {
  operations("digit", 4);
});
numFiveBtn.addEventListener("click", () => {
  operations("digit", 5);
});
numSixBtn.addEventListener("click", () => {
  operations("digit", 6);
});
numSevenBtn.addEventListener("click", () => {
  operations("digit", 7);
});
numEightBtn.addEventListener("click", () => {
  operations("digit", 8);
});
numNineBtn.addEventListener("click", () => {
  operations("digit", 9);
});
numZeroBtn.addEventListener("click", () => {
  operations("digitZero", 0);
});
decimalBtn.addEventListener("click", () => {
  operations("dicimalPoint", ".");
});
clearBtn.addEventListener("click", () => {
  operations("clear", "");
});
ceBtn.addEventListener("click", () => {
  operations("delete", "");
});
equalBtn.addEventListener("click", () => {
  showResult();
});

//add eventlistner to oparands
opAddBtn.addEventListener("click", () => {
  operations("calculate", "+");
});
opSubBtn.addEventListener("click", () => {
  operations("calculate", "-");
});
opMulBtn.addEventListener("click", () => {
  operations("calculate", "×");
});
opDivBtn.addEventListener("click", () => {
  operations("calculate", "÷");
});
pecentageBtn.addEventListener("click", () => {
  operations("calculate", "%");
});

//take aqure root
squareRootBtn.addEventListener("click", () => {
  getSqureRoot("squreroot", "√");
});
