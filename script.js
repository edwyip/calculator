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
    return (+b !== 0)?+a / +b:"Can't divided by zero, idiot."
}

function operate(a, b, callback){
    return callback(a,b)
}

function whichOp(operator){
    return (operator === "+")?add:
    (operator === "-")?subtract:
    (operator === "*")?multiply:
    (operator === "/")?divide:"SYNTAX ERROR"
}

const display = document.querySelector("#display")
const numbers = document.querySelector("#numbers")
const dot = document.querySelector("#dot")
const operators = document.querySelector("#operators")
const clear = document.querySelector("#clear")
const equal = document.querySelector("#equal")
let dummy = ""
let ans = ""
let finalAns =""
let dumNum = {}

numbers.addEventListener("click", (event)=>{
    if (event.target.nodeName === 'BUTTON') {
        if (!dummy)display.value=""
        dummy += event.target.textContent;
        display.value += event.target.textContent;
    }})

dot.addEventListener("click", (event)=> {
    if(dummy && !dummy.split("").includes(".")) {
        dummy += event.target.textContent;
        display.value += event.target.textContent;
}})

operators.addEventListener("click", (event)=>{
    if (event.target.nodeName === 'BUTTON') {
        finalAns = "";
        if (!dumNum.a) {
            dumNum.a = dummy
            
        } else {
            dumNum.b = dummy;
            ans = operate(dumNum.a, dumNum.b, dumNum.operator)
            dumNum.a = ans;
            display.value = ans;      
        }
        dumNum.operator = whichOp(event.target.textContent)
        dummy = ""
}})

equal.addEventListener("click", ()=>{
    dumNum.b = dummy;
    finalAns = (!finalAns)?operate(dumNum.a, dumNum.b, dumNum.operator).toFixed(5):finalAns;
    display.value = finalAns;
    dumNum = {}
    dummy = finalAns;
})

clear.addEventListener("click", ()=>{
    dummy = ""
    display.value = ""
    dumNum = {}
})

