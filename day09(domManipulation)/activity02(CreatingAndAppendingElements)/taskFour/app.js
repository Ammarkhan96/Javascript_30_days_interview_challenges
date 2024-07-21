//Task 04: (Create a new li element and add it to existing ul list.)

function appendListItem(){
    const newListItem = document.createElement('li')

    newListItem.textContent = 'New List Item'

    const list = document.getElementById('myList')
    list.appendChild(newListItem)
}