//Task 01: (Add a click event listener to a button that changes the next content of a paragraph. )

const button = document.getElementById('changeContentButton')
const paragraph = document.getElementById('contentParagraph')

button.addEventListener('click', function(){
    paragraph.textContent = "This is the new content of the Paragraph!"
})