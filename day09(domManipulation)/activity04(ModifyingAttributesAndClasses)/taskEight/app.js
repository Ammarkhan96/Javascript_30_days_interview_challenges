//Task 08: (Add and remove a CSS class to/from an HTML element.)

function addClass(){
    const element = document.getElementById('myParagraph')

    element.classList.add('highlight')
}

function removeClass(){
    const element = document.getElementById('myParagraph')

    element.classList.remove('highlight')
}