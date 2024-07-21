//Task 02: (Select an HTML elements by its class and change its background color. )

function changeBackgroundColor(){
    const elements = document.getElementsByClassName('colorChange')

    for(let i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = 'lightblue'
    }
}

