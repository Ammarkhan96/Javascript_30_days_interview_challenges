//Task 08: (Add a change event listener to a select dropdown that displays the selected value ina paragraph.)

const selectDropdown = document.getElementById('selectOption')
const displayParagraph = document.getElementById('displaySelected')

selectDropdown.addEventListener('change', function(event){
    const selectedValue = event.target.value
    
    displayParagraph.textContent = `Selected Value: ${selectedValue}`
})