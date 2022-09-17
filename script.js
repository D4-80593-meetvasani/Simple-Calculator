let history = document.getElementById('history');

var num1;

var op;

var num2;

let flag = 0;
function calculation(v) {
    let res = eval(v);
    let n = res.toFixed(2);
    flag = 1;
    if (v == "") {
        return null;
    }
    


    
    
    para = document.createElement('p');
    data = v + " = " + n;
   
    para.innerText = data;
    history.appendChild(para)
    
    
    return n;
}






   

// function pressNum(no){

//   if(op === undefined || num1 !== undefined){

    // if(no === '/' || no === '+' || no === '-' || no === '*'){

    //   num1 = parseInt(num.value);

    //   op = no;

    //   num.value = '';

    //   console.log(num1)

    //   console.log(op)

    // }else{

//       num.value += no;

//     }

//   }

//   else{

//     num.value += no;

//   }

 

// }

// function getAns(){

//   num2 = parseInt(num.value);

//   if(op === '+'){

    // num.value = num1+num2;

    // num1 = num.value;

//   }

// }

let input_area = document.querySelector('.inputArea');
const buttons = document.querySelectorAll('.bt');

buttons.forEach(button => button.addEventListener('click', () => {
    if (flag === 1) {
        input_area.value = "";
        flag = 0;
    }
    console.log(input_area.value);
    if(input_area.value.length<=10){
        input_area.value += button.innerHTML.trim();
    }
        
}))


const operands = document.querySelectorAll('.operations')
operands.forEach(operand => operand.addEventListener('click', () => {

    if (!isOperand(input_area.value)) {
        input_area.value += operand.innerHTML.trim();
    }
}))

const isOperand = (string) => {
    if (string.endsWith('+') || string.endsWith('-') || string.endsWith('*') || string.endsWith('/')) {
        return true
    }
    return false
}

const dot = document.querySelector('.dot')
dot.addEventListener('click', () => {
    string = dotReset(input_area.value)
    input_area.value = string

})

const dotReset = (string) => {



    if (string.length === 0) {
        return string += '.'
    }
    

    if (string.includes('+')) {
        
        let arr = string.split('+');
        if (arr[arr.length-1].length === 0) {
            return string += '.'
        }
        if (!arr[arr.length-1].includes('.')) {
            return string += '.'
        }
    }

    else if (string.includes('-')) {
        let arr = string.split('-');
        if (arr[arr.length-1].length === 0) {
            return string += '.'
        }
        if (!arr[arr.length-1].includes('.')) {
            return string += '.'
        }
    }

    else if (string.includes('*')) {
        let arr = string.split('*');
        if (arr[arr.length-1].length === 0) {
            return string += '.'
        }
        if (!arr[arr.length-1].includes('.')) {
            return string += '.'
        }
    }

    else if (string.includes('/')) {
        let arr = string.split('/');
        if (arr[arr.length-1].length === 0) {
            return string += '.'
        }
        if (!arr[arr.length-1].includes('.')) {
            return string += '.'
        }
    }
    else {
        if (!string.includes('.')) {
            return string += '.'
        }
    }

    return string



}




function backspace(b) {
    return b.slice(0, b.length - 1)
}

let hs = document.getElementById('history');
function userHistory() {

    if (hs.style.display === "none") {
        hs.style.display = "block";
    } else {
        hs.style.display = "none";
    }
}   


