//Task 02: (Add a double-click event listener to an image that toggles its visibility. )

const image = document.getElementById('toggleImage')

image.addEventListener('dblclick', function(){
    if(image.classList.contains('hidden')){
        image.classList.remove('hidden')
    } else {
        image.classList.add('hidden')
    }
})