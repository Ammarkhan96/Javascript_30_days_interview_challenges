// Task 03: (Create a new div element with some text content and append it to the body.)

function appendDiv(){
    const newDiv = document.createElement('div')

    newDiv.textContent = 'This is a new div element. '

    document.body.appendChild(newDiv)
}