//Task 04: (Add a mouseout event listener to an element that resets its background color.)

const colorBox = document.getElementById('colorBox');


const hoverColor = '#FF5733'; 
const originalColor = '#3498db'; 


colorBox.addEventListener('mouseover', function() {
    colorBox.style.backgroundColor = hoverColor;
});


colorBox.addEventListener('mouseout', function() {
    colorBox.style.backgroundColor = originalColor;
});