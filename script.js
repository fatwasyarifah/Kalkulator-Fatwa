/** Menampilkan NOMOR pada screen */
const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen (event.target.value)
    })
})

/** Membedakan bilangan 1 dengan bilangan 2 */
let prevNumber = ''
let calculationperator = ''
let currentNumber= '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    }else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen (currentNumber)
    })
})

/** Memasukan Operator */
const operators = document.querySelectorAll (".operator")

operators.forEach ((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator (event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationperator === '') {
    prevNumber = currentNumber
    }
    calculationperator = operator
    currentNumber = '0'
}

/** Menghitung Bilanga dengan pilihan tombol operator */
const calculate = () => {
    let result = ''
    switch (calculationperator){
        case '+':
            result = (parseFloat(prevNumber)*10)/10 + (parseFloat(currentNumber)*10)/10
            break;
        case '-':
            result = prevNumber - currentNumber
            break;
        case '/':
            result = prevNumber / currentNumber
            break;
        case '*':
            result = prevNumber * currentNumber
            break;
        default:
            return;
    }
    currentNumber = result
    calculationperator = ''
}

/** SAMA DENGAN */
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen (currentNumber)
})

/** Clear  */
const clearAll = () => {
    prevNumber= ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll ()
    updateScreen (currentNumber)
})

/** DESIMAL */

inputDecimal = (dot) => {
    if (currentNumber.includes ('.')){
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector ('.decimal')

decimal.addEventListener ('click', (event) =>{
    inputDecimal (event.target.value)
    updateScreen (currentNumber)
})

const persen = document.querySelector (".persen")
persen.addEventListener ("click", (event) => {
    calculatorScreen.value = currentNumber / 100       
})
