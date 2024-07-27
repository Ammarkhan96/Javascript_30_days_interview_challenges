//Task 06: (Add a keyup event listener to an input field that displays the current value in a paragraph.)

const inputField = document.getElementById('keyInput')
const outputText = document.getElementById('outputText')

inputField.addEventListener('keyup', function(){
    outputText.textContent = `Current Value: ${inputField.value}`
})