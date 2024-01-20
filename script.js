// hover over buttons
let buttons = document.querySelectorAll('.separator > div > div > div');
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('mouseover', () =>{
        buttons[i].style.cssText = 'opacity: 0.5'
    })
    buttons[i].addEventListener('mouseout', () =>{
        buttons[i].style.cssText = ''
    })
}
//===============================================

const numberButtons = document.querySelectorAll('.numbers > div')
//console.log(numbers)
const operatorButtons = document.querySelectorAll('.operators > div')
//console.log(operators)
const display = document.querySelector('.display')
const preview = document.querySelector('.preview')
//console.log(display, preview)

clearButton = document.querySelector('#clear');


function clearDisplay(){
    display.innerText = '';
    preview.innerText = '';
    return
}

function getNumber(number){
    return number
}

function updateDisplay(number){
    display.innerText = number;   
    return 
}

function updatePreview(number){
    preview.innerText = number;    
    return
}

function getOperatiom(operation){
    // get operation
    // store number from preview
    
}

function compute(operation){
    let secondNum = parseFloat(display.textContent)
    let firstNum = parseFloat(preview.textContent)

    switch(operation){
        case '+':
            return (firstNum + secondNum)
            break;

        case '-':
            return (firstNum - secondNum)
            break;

        case '*':
            return (firstNum * secondNum)
            break;

        case '/':
            return (firstNum / secondNum)
            break;
    }
}
   
    






function main(){
    let currentNum = '';
    let currentOperand = '';
    clearDisplay()

    numberButtons.forEach(button => {
        //console.log(button)
        button.addEventListener('click', () => {
            currentNum += getNumber(button.innerText);
            if (preview.innerText == ''){
                updatePreview(currentNum)                
            }
            
            //console.log(currentNum)
            updateDisplay(currentNum)
        })
    })

    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (display.innerText == '' || preview.innerText == '') {
                return
            }
            else{
                currentOperand = compute(button.textContent)
                updateDisplay('')
                currentNum = '';
                
                updatePreview(currentOperand);


            }
            
        })
    })

    clearButton.addEventListener('click', () => {
        clearDisplay()
        currentNum = ''
    })
}

main()


