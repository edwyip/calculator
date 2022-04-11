const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const multiply = function(myArray) {
    return myArray.reduce((total, num)=> total *=  num, 1)
    };

const divide = function(a,b){
    return a/b;
}