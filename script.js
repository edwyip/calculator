function add(a, b) {
	return a+b;
};

function subtract(a, b) {
	return a-b;
};

function multiply(myArray) {
    return myArray.reduce((total, num)=> total *=  num, 1)
    };

function divide(a,b){
    return a/b;
}

function operate(a, b, callback){
    return callback(a,b)
}

buttons = document.querySelector("#buttons");
// for (i=0;i<10;i++){
//     button = document.createElement("button");
//     button.textContent = i;
//     button.id = i;
//     buttons.appendChild(button);
// }