const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const equalBtn = document.querySelector('.equal');
const firstInput = document.querySelector('.first-input');
const secondInput = document.querySelector('.second-input');

let storedNumber1 = '';
let storedNumber2 = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numberBtn.forEach(number => {
  number.addEventListener('click', (e) => {
    if(e.target.innerText === '.' && !haveDot){
      haveDot = true;
    }else if (e.target.innerText === '.' && haveDot){
      return;
    }
    storedNumber2 += e.target.innerText;
    secondInput.innerText = storedNumber2;
  })
})

operatorBtn.forEach(operator => {
  operator.addEventListener('click', (e) => {
    if(!storedNumber2) return;
    haveDot = false;
    let operationName = e.target.innerText;
    if(storedNumber1 && storedNumber2 && lastOperation){
      doMath();
    }
    else{
      result = parseFloat(storedNumber2);
    }
    clearVar(operationName);
    lastOperation = operationName;
  })
})

function clearVar(name = ''){
  storedNumber1 = storedNumber2 + ' ' + name + ' ';
  firstInput.innerText = storedNumber1;
  storedNumber2 = '';
}

function doMath(){
  if(lastOperation === '*'){
    result = parseFloat(result) * parseFloat(storedNumber2);
  } else if (lastOperation === '+'){
    result = parseFloat(result) + parseFloat(storedNumber2);
  }else if (lastOperation === '-'){
    result = parseFloat(result) - parseFloat(storedNumber2);
  }else if (lastOperation === '/'){
    result = parseFloat(result) / parseFloat(storedNumber2);
  }
  
  storedNumber2 = result;
  secondInput.innerText = result;
}

equalBtn.addEventListener('click', (e) => {
  if(!storedNumber1 || !storedNumber2) return;
  haveDot = false;
  doMath();
  clearVar();
  secondInput.innerText = '';
  lastOperation = '';
  firstInput.innerText = storedNumber1;
  storedNumber2 = result;
  console.log(storedNumber1);
})

clearBtn.addEventListener('click', (e) => {
  storedNumber1 = '';
  storedNumber2 = '';
  firstInput.innerText = storedNumber1;
  secondInput.innerText = storedNumber2;
})

deleteBtn.addEventListener('click', () => {
  storedNumber2 = storedNumber2.substr(0, storedNumber2.length -1);
  secondInput.innerText = storedNumber2;
})