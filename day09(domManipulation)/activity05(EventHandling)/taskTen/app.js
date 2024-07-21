//Task 10: (Add a mouseover event listener to an element that changes its border color. )

document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('myElement')

    element.addEventListener('mouseover', () => {
        element.style.borderColor = 'red'
    })

    element.addEventListener('mouseout', () => {
        element.style.borderColor = 'black'
    })
})