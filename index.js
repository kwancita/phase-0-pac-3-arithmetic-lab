// 1) 'add()' is a valid function
// 2) 'subtract()' is a valid function
// 3) 'multiply()' is a valid function
// 4) 'divide()' is a valid function
// 5) add(a, b) adds two numbers and returns the result
// 6) subtract(a, b) subtracts b from a and returns the result
// 7) multiply(a, b) multiplies two numbers and returns the result
// 8) divide(a, b) divides a by b and returns the result
// 9) increment(n) increments n and returns the result
// 10) decrement(n) decrements n and returns the result
function  add(num1,num2){
    return num1 + num2;
}
function  subtract(num1,num2){
    return num1 - num2;
}
function  multiply(num1,num2){
    return num1 * num2;
}
function  divide(num1,num2){
    return num1 / num2;
}
function  increment(n){
    n++;
    return  n;
}
function  decrement(n){
    n--
    return n;
}
function makeInt(n){
    return parseInt(n, 10);
}
function preserveDecimal(n){
    return parseFloat(n);
}