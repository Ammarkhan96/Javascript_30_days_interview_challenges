//Task 06: (Remove the last child of a specific HTML element.)

function removeLastChild(){
    const list = document.getElementById('myList')

    if(list.lastChild){
        list.removeChild(list.lastChild)
    }
}