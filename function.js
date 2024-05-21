function add1(p1, p2) {
    return Number(p1) + Number(p2);
}


function subtract1(p1, p2) {
    return Number(p1) - Number(p2);
}

function subtractNumbers() {
    let num1 = document.getElementById('sub1').value;
    let num2 = document.getElementById('sub2').value;
    let result = subtract1(num1, num2);
    document.getElementById('sum1').value = result;
}


function multiply1(p1, p2) {
    return Number(p1) * Number(p2);
}

function multiplyNumbers() {
    let num1 = document.getElementById('mul1').value;
    let num2 = document.getElementById('mul2').value;
    let result = multiply1(num1, num2);
    document.getElementById('sum2').value = result;
}


function divide1(p1, p2) {
    if (Number(p2) === 0) {
        return 'ERROR';
    } else {
        return Number(p1) / Number(p2);
    }
   
}

function divideNumbers() {
    let num1 = document.getElementById('div1').value;
    let num2 = document.getElementById('div2').value;
    let result = divide1(num1, num2);
    document.getElementById('sum3').value = result;
}