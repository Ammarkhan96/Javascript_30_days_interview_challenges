//Task 09: (Add a click event listener to a button that changes the text content of a paragraph. )

document.addEventListener('DOMContentLoaded',() => {
    const button = document.getElementById('myButton')

    button.addEventListener('click', () => {
        const paragraph = document.getElementById('myParagraph')

        paragraph.textContent = 'The text has been Changed! '
    })
})