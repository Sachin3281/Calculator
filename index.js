
let outputEl = document.getElementById('output-el')
// let oneEl = document.getElementById('one')
// let twoEl = document.getElementById('two')
// let threeEl = document.getElementById('three')
// let fourEl = document.getElementById('four')
// let fiveEl = document.getElementById('five')
// let sixEl = document.getElementById('six')
// let sevenEl = document.getElementById('seven')
// let eightEl = document.getElementById('eight')
// let nineEl = document.getElementById('nine')

let num = 0


function appendDigit(digit){
    num = num * 10 + digit
    outputEl.innerText = Math.round(num)
}

function zero(){
    appendDigit(0)
    // num = num * 10 + 0
    // outputEl.innerText = num
}
function one(){
    appendDigit(1)
    // num = num * 10 + 1
    // outputEl.innerText = num
}

function two(){
    appendDigit(2)
    // num = num * 10 + 2
    // outputEl.innerText = num
}

function three(){
    appendDigit(3)
    // num = num * 10 + 3
    // outputEl.innerText = num
}

function four(){
    appendDigit(4)
    // num = num * 10 + 4
    // outputEl.innerText = num
}

function five(){
    appendDigit(5)
    // num = num * 10 + 5
    // outputEl.innerText = num
}

function six(){
    appendDigit(6)
    // num = num * 10 + 6
    // outputEl.innerText = num
}

function seven(){
    appendDigit(7)
    // num = num * 10 + 7
    // outputEl.innerText = num
}

function eight(){
    appendDigit(8)
    // num = num * 10 + 8
    // outputEl.innerText = num
}

function nine(){
    appendDigit(9)
    // num = num * 10 + 9
    // outputEl.innerText = num
}


// Operations
let prev = 0
let prevOperator = ""
let currOperator = ""
let equalBool = false

// function check previous operator
function previousOperatorUsed(prevOperator){
    if(prevOperator == "+"){
        prev = prev + num
        num = prev
        return true
    }else if(prevOperator == '-'){
        prev = prev - num
        num = prev
        return true
    }else if(prevOperator == '*'){
        prev = prev * num
        num = prev
        return true
    }else if(prevOperator == '/'){
        if(num === 0){
            alert("Invalid. Please Enter a valid num")
            return true
        }
        prev = prev / num
        num = prev
        return true
    }
    return false
}

// AC
function AcOperator(){
    prev = 0
    num = 0
    outputEl.innerText = Math.round(num,2)
}

// +/-
let negCount = 0;
function isNeg(){
    num = num * -1
    outputEl.innerText = Math.round(num,2)
}

// Plus operation

function plusOperator(){
    // console.log("inside Plus ops")
    if(previousOperatorUsed(prevOperator));
    else{
        prev += num
    }
    num = prev
    outputEl.innerText = Math.round(num,2)
    prevOperator = "+"
    console.log(num)
    num = 0
    console.log(prevOperator)
    
}

// Subtraction
function minusOperator(){
    if(previousOperatorUsed(prevOperator));
    else{
        prev += num
    }
    prevOperator = "-"
    outputEl.innerText = Math.round(num,2)
    num = 0
    console.log(prev)
}


// / Operator
function divideOperator(){
    if(previousOperatorUsed(prevOperator));
    else{
        prev += num
    }
    prevOperator = "/"
    outputEl.innerText = Math.round(num,2)
    num = 0
    console.log(prev)
}
// % Operator
function modulousOperator(){
    // console.log(equalBool)
    if(!equalBool){
        prev = (prev * num)/100
        num = prev
    }else{
        prev = num/100
        num = prev
    }
    
    prevOperator = ""
    outputEl.innerText = Math.round(num,2)
    // num = 0
    console.log(prev)
}
// *
function multiplyOperator(){
    if(previousOperatorUsed(prevOperator));
    else{
        prev += num
    }
    prevOperator = "*"
    outputEl.innerText = Math.round(num,2)
    num = 0
    console.log(prev)
}

// =
function equalOperator(){
    previousOperatorUsed(prevOperator);
    prevOperator = ""
    outputEl.innerText = Math.round(num,2)
    equalBool = true
    prev = 0
}