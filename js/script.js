var firstVal = '';
var secoundVal = '';
var operation = null;
var isOperation = false;
function userInput(val) {
    val = val.toString();
    if (isOperation) { // it will check first value section is done
        secoundVal += val;
        document.getElementById("secoundVal").innerText = secoundVal;

    } else
        firstVal += val;
    document.getElementById("firstVal").innerText = firstVal;

}
function userOperation(opt) {
    console.log(opt)
    operation = opt;
    document.getElementById("operation").innerText = operation;
    isOperation = true; //after selction of any operation +-*%

}
function userCancel() {
    document.getElementById("userResult").innerText = "";
    document.getElementById("firstVal").innerText = "";
    document.getElementById("secoundVal").innerText = "";
    document.getElementById("operation").innerText = "";
    firstVal = '';
    secoundVal = '';
    operation = null;
    isOperation = false;

}
function result() {
    let res = 0;
    // firstVal = firstVal.toString();
    // secoundVal = secoundVal.toString();
    firstVal = document.getElementById("firstVal").innerText;
    secoundVal = document.getElementById("secoundVal").innerText;
    firstVal = firstVal.indexOf(".") > -1 ? parseFloat(firstVal) : parseInt(firstVal);
    secoundVal = secoundVal.indexOf(".") > -1 ? parseFloat(secoundVal) : parseInt(secoundVal);
    switch (operation) {
        case '+':
            res = firstVal + secoundVal;
            break;
        case '-':
            res = firstVal - secoundVal;
            break;
        case '*':
            res = firstVal * secoundVal;
            break;
        case '%':
            res = firstVal % secoundVal;
            break;
        case '/':
            res = firstVal / secoundVal;
            break;
        default:
            res = "NAN"

    }
    const lenString = res.toString();
    if (lenString.length >= 16)
        document.getElementById("userResult").style.fontSize = "40px";
    else
    document.getElementById("userResult").style.fontSize = "70px";
    document.getElementById("userResult").innerText = "= " + res;
    console.log(res, 'result is ')
}
function userDeleteOperation() {
    if (!operation) {
        firstVal = firstVal.slice(0, -1);
        firstVal= firstVal?firstVal:0
        document.getElementById("firstVal").innerText = firstVal ;
    } else {
        secoundVal = secoundVal.slice(0, -1);
        secoundVal= secoundVal?secoundVal:0
        document.getElementById("secoundVal").innerText = secoundVal;
    }
}