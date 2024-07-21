//Task 05: (Select an HTML element and remove it from the DOM. )


function removeElement(){
    const element = document.getElementById('paragraph')

    if(element){
        element.parentNode.removeChild(element)
    }
}