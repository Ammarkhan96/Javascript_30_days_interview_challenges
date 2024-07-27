//Task 05: (Add a keydown event listener to an input field that logs the key pressed to the console.)

const inputField = document.getElementById('keyInput')

inputField.addEventListener('keydown', function(){
    console.log(`Key pressed: ${event.key}`);
})