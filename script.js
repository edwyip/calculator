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
const numbers = document.querySelectorAll(".number")
const dot = document.querySelector("#dot")
const operators = document.querySelector("#operators")
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

function tempCalculation(op){
    finalAns = "";
    if (!dumNum.a) {
        dumNum.a = dummy
    } else {
        dumNum.b = dummy;
        ans = +operate(dumNum.a, dumNum.b, dumNum.operator).toFixed(5);
        dumNum.a = ans;
        display.value = ans;      
    }
    dumNum.operator = whichOp(op.textContent)
    dummy = ""
}

// Not sure why the code below don't work
// numbers.forEach(number=>number.addEventListener("keydown", (event)=>{
//     if (event.key === number.textContent){
//         addNumber(number);
//     }
// }))

document.addEventListener("keydown", (event)=>{
    numbers.forEach(number=>{
        if (number.textContent === event.key){
            addNumber(number)
        }
    })
    operators.childNodes.forEach(op=>{
        if (op.textContent === event.key){
            tempCalculation(op)
        }
    })
    if (event.key === "."){
        if(dummy && !dummy.split("").includes(".")) {
            dummy += "."
            display.value += "."
    }} else if (event.key === "=" || event.key === "Enter"){
        dumNum.b = dummy;
        finalAns = (!finalAns)?+operate(dumNum.a, dumNum.b, dumNum.operator).toFixed(5):finalAns;
        display.value = finalAns;
        dumNum = {};
        console.log(dumNum)
        dummy = finalAns;
    } else if (event.key === "Backspace"){
        dummy = dummy.slice(0,-1);
        display.value = display.value.slice(0,-1)
    }

})
numbers.forEach(number=>number.addEventListener("click", ()=>addNumber(number)))

dot.addEventListener("click", (event)=> {
    if(dummy && !dummy.split("").includes(".")) {
        dummy += event.target.textContent;
        display.value += event.target.textContent;
}})

operators.addEventListener("click", (op)=>{
        finalAns = "";
        if (!dumNum.a) {
            dumNum.a = dummy
        } else {
            dumNum.b = dummy;
            ans = +operate(dumNum.a, dumNum.b, dumNum.operator).toFixed(5);
            dumNum.a = ans;
            display.value = ans;      
        }
        dumNum.operator = whichOp(op.target.textContent)
        dummy = ""
    })

equal.addEventListener("click", ()=>{
    dumNum.b = dummy;
    finalAns = (!finalAns)?+operate(dumNum.a, dumNum.b, dumNum.operator).toFixed(5):finalAns;
    display.value = finalAns;
    dumNum = {};
    dummy = finalAns;
})

clear.addEventListener("click", ()=>{
    dummy = ""
    display.value = ""
    dumNum = {}
})

del.addEventListener("click",()=>{
    dummy = dummy.slice(0,-1);
    display.value = display.value.slice(0,-1)
} )

