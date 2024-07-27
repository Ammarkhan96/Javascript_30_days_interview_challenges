//Task 03: (Add a mouseover event listener to an element that changes its background color.)

const hoverBox = document.getElementById('hoverBox')

const hoverColor = '#FF5733'
const originalColor = '#4CAF50'

hoverBox.addEventListener('mouseover', function(){
    hoverBox.style.backgroundColor = hoverColor
})

hoverBox.addEventListener('mouseout', function(){
    hoverBox.style.backgroundColor = originalColor
})