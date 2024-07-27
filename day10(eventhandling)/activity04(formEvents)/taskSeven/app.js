//Task 07: (Add a submit event listener to a form that prevents the default submission and logs the form
//data to the console.)

const form = document.getElementById('exampleForm')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const formData = new FormData(form)

    const formDetails = {}

    formData.forEach((value, key) => {
        formDetails[key] = value
    })
    console.log('Form Data:', formDetails);
})