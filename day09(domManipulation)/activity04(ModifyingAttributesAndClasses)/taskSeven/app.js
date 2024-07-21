//Task 07: (Select an HTML element and changes one of its attributes (e.g., src of an img tag). )

function changeImageSource(){
    const image = document.getElementById('myImage')

    image.setAttribute('src', 'new-image.png')
}