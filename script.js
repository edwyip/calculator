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

numbers.forEach(number=>number.addEventListener("keydown", (e)=>{
    // if (e.key === number.textContent){
        console.log(e.key)
    // }
}))
numbers.forEach((e)=>e.addEventListener("click", ()=>{
        if (!dummy)display.value=""
        dummy += e.textContent;
        display.value += e.textContent;
    }))

dot.addEventListener("click", (event)=> {
    if(dummy && !dummy.split("").includes(".")) {
        dummy += event.target.textContent;
        display.value += event.target.textContent;
}})

operators.addEventListener("click", (event)=>{
        if (event.target.id != "equal"){
            finalAns = "";
            if (!dumNum.a) {
                dumNum.a = dummy
            } else {
                dumNum.b = dummy;
                ans = +operate(dumNum.a, dumNum.b, dumNum.operator).toFixed(5);
                dumNum.a = ans;
                display.value = ans;      
            }
            dumNum.operator = whichOp(event.target.textContent)
            dummy = ""
        }
    })

equal.addEventListener("click", ()=>{
    dumNum.b = dummy;
    finalAns = (!finalAns)?+operate(dumNum.a, dumNum.b, dumNum.operator).toFixed(5):finalAns;
    display.value = finalAns;
    dumNum = {};
    console.log(dumNum)
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

