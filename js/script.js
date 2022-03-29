var firstVal = 0;
var secoundVal = 0;
var operation = null;
var isOperation = false;
function userInput(val) {
    if (isOperation) { // it will check first value section is done
        secoundVal += val;
    } else
        firstVal += val;
}
function userOperation(opt) {
    console.log(opt)
    operation = opt;
    isOperation = true; //after selction of any operation +-*%

}
function userCancel() {
    document.getElementById("userResult").innerHTML = "";
    firstVal = 0;
    secoundVal = 0;
    operation = null;
    isOperation = false;
}
function result() {
    let res = 0;
    switch (operation) {
        case '+':
            res = firstVal + secoundVal;
            break;
        case '-':
            res = firstVal - secoundVal;
            break
    }
    document.getElementById("userResult").innerHTML = "<strong>" + res + "</strong>";
    console.log(res, 'result is ')
}