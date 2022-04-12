function add(a, b) {
	return +a + +b;
};

function subtract(a, b) {
	return +a - +b;
};

function multiply(a,b){
    return +a * +b
}

function divide(a,b){
    return +a / +b
}

function operate(a, b, callback){
    return callback(a,b)
}

function whichOp(operator){
    return (operator === "+")?add:
    (operator === "-")?subtract:
    (operator === "*")?multiply:
    divide
}

function backspace(){
    dummy = (dummy)?dummy.toString().slice(0,-1):dummy;
    display.value = (display.value)?display.value.slice(0,-1):display.value;
}

const display = document.querySelector("#display")
const numbers = document.querySelectorAll(".number")
const dot = document.querySelector("#dot")
const operators = document.querySelectorAll("#operators button")
const clear = document.querySelector("#clear")
const equal = document.querySelector("#equal")
const del = document.querySelector("#del")
let dummy = ""
let ans = ""
let finalAns =""
let dumNum = {}

function addNumber(number){
    if (!dummy)display.value=""
    dummy += number.textContent;
    display.value += number.textContent;
}

function addDot(){
    if(dummy && !dummy.split("").includes(".")){
        dummy += ".";
        display.value += "."
    }
}

function tempCalculation(op){
    finalAns = "";
    if (!dumNum.a) {
        dumNum.a = dummy
    } else {
        dumNum.b = dummy;
        ans = +operate(dumNum.a, dumNum.b, dumNum.operator).toFixed(5)
        if (ans === Infinity) alert("Stop trying to divide by zero lmao. Click AC or hit spacebar for reset.")
        dumNum.a = ans;
        display.value = ans;      
    }
    dumNum.operator = whichOp(op.textContent)
    dummy = ""
}

function finalCalculation(){
    dumNum.b = dummy;
    if (!finalAns){
        finalAns = +operate(dumNum.a, dumNum.b, dumNum.operator).toFixed(5)
    }
    if (finalAns === Infinity) alert("Stop trying to divide by zero lmao. Click AC or hit spacebar for reset.")
    display.value = finalAns;
    dumNum = {};
    dummy = finalAns;
}

function cleanUp(){
    dummy = ""
    display.value = ""
    dumNum = {}
    clear.blur();
}

document.addEventListener("keydown", (event)=>{
    numbers.forEach(number=>{
        if (number.textContent === event.key) addNumber(number)
    })
    operators.forEach(op=>{
        if (op.textContent === event.key) tempCalculation(op)
    })
    switch (event.key){
        case ".":
            addDot();
            break;
        case "=":
        case "Enter":
            finalCalculation();
            break;
        case "Backspace":
            backspace();
            break;
        case " ":
            cleanUp();
            break;
        default: break;
        
    }
})
numbers.forEach(number=>number.addEventListener("click", ()=>addNumber(number)))
operators.forEach(op=>op.addEventListener("click", ()=>tempCalculation(op)))
equal.addEventListener("click", finalCalculation)
dot.addEventListener("click", addDot)
clear.addEventListener("click", cleanUp)
del.addEventListener("click",backspace )


