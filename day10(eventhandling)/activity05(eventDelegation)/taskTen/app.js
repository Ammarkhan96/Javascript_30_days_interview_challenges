//Task 10: (Add an event listener to a parent element that listens for events from dynamically child
//elements.)

const parentElement = document.getElementById('parentElement')
const addButton = document.getElementById('addButton')

let buttonCount = 0;

parentElement.addEventListener('click', function(event){
    if(event.target && event.target.tagName === 'BUTTON' && event.target.id !== 'addButton'){
        console.log(`You clicked: ${event.target.textContent}`);

        event.target.textContent = 'Clicked!'
    }
})

addButton.addEventListener('click', function(){
    buttonCount++

    const newButton = document.createElement('button')
    newButton.textContent = `Button ${buttonCount}`
    newButton.id = `button-${buttonCount}`

    parentElement.appendChild(newButton)
})