// Variables Assignment Phase
// Special Buttons
const clear = document.getElementById('clear')
const reminder = document.getElementById('reminder')
const erase = document.getElementById('erase')
const equalsTo = document.getElementById('equals')
// Numerical Buttons
const btnDecimal = document.getElementById('.')
const btn0 = document.getElementById('0')
const btn00 = document.getElementById('00')
const btn1 = document.getElementById('1')
const btn2 = document.getElementById('2')
const btn3 = document.getElementById('3')
const btn4 = document.getElementById('4')
const btn5 = document.getElementById('5')
const btn6 = document.getElementById('6')
const btn7 = document.getElementById('7')
const btn8 = document.getElementById('8')
const btn9 = document.getElementById('9')
// Arithmetic Operator buttons
const division = document.getElementById('division')
const multiplication = document.getElementById('multiplication')
const addition = document.getElementById('substraction')
const substraction = document.getElementById('addition')
// Logical Variables
let emptyString = "";

////////////////////////////////////////////////////////////////

// AddEventListeners Phase
// special Buttons
clear.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.id)
})
erase.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.id)
})
equalsTo.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.id)
})

// Operational Buttons
reminder.addEventListener('click', (e)=>{
    e.preventDefault()
    const remOperator = e.target.getAttribute('arOperator')
    console.log(remOperator);
})
division.addEventListener('click', (e)=>{
    e.preventDefault()
    const divOperator = e.target.getAttribute('arOperator')
    console.log(divOperator);
})
multiplication.addEventListener('click', (e)=>{
    e.preventDefault()
    const multOperator = e.target.getAttribute('arOperator')
    console.log(multOperator);
})
addition.addEventListener('click', (e)=>{
    e.preventDefault()
    const addOperator = e.target.getAttribute('arOperator')
    console.log(addOperator);
})
substraction.addEventListener('click', (e)=>{
    e.preventDefault()
    const subOperator = e.target.getAttribute('arOperator')
    console.log(subOperator);
})

// Valued Buttons
btnDecimal.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.id)
})
btn0.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.id)
})
btn00.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.id)
})
btn1.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.id)
})
btn2.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.id)
})
btn3.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.id)
})
btn4.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.id)
})
btn5.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.id)
})
btn6.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.id)
})
btn7.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.id)
})
btn8.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.id)
})
btn9.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.id)
})

////////////////////////////////////////////////////////////////

// Logical Phase
