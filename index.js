// Using typeof

let button = document.querySelector('.button')
let firstInput = document.querySelector('#first-input')
let secondInput = document.querySelector('#second-input')
let screen = document.querySelector('.screen')
 
function addNumbers(a,b) {
    if (typeof a === 'number' && typeof b === 'number') {
        screen.innerHTML = a + b
    } else screen.innerHTML = parseInt(a) + parseInt(b)
}
 
button.addEventListener('click', () => addNumbers(firstInput.value, secondInput.value))

