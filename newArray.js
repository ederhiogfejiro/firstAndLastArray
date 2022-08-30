const theTrue = document.querySelector(".trueClass");
const theFalse = document.querySelector(".falseClass");
const arrayNum = document.querySelector(".array");

let indexArr = [43, 44, 42, 45, 34, 45, 43, 23];
arrayNum.innerHTML = indexArr;

function index(arr) {
  if (arr[0] === arr[arr.length - 1]) {
    return  theTrue.innerHTML = `the first and last number are Equal & true`;
  } else {
    return theTrue.innerHTML = `the first and last number are not Equal`;
  } 
}

console.log(index(indexArr));
