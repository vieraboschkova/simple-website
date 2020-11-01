/* GET ELEMENTS */

const submitButton = document.getElementById('contactFormButton');

/* CHECK IF INPUTS AND TEXTAREA NOT EMPTY TO ENABLE THE BUTTON */

function enableButtonIfAllFieldsFilled() {
    const nameNotEmpty = document.getElementById('contactName').value !== '';
    const emailNotEmpty = document.getElementById('contactEmail').value !== '';
    const msgNotEmpty = document.getElementById('contactMsg').value !== '';

    if (nameNotEmpty && emailNotEmpty && msgNotEmpty) {
        console.log('not all empty');
        console.log(nameNotEmpty, emailNotEmpty, msgNotEmpty)
        submitButton.disabled = false;
    } else { 
        console.log('not all filled'); 
        console.log(
            nameNotEmpty, emailNotEmpty, msgNotEmpty,
            document.getElementById('contactName').value,
            document.getElementById('contactEmail').value,
            document.getElementById('contactMsg').value
        ); 
    }
}


/* VALIDATE INPUTS */

function validateForm() {
    console.log('trying to submit');
}

/* CLEAR FORM ON LOAD */

function clearContactForm () {
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactMsg').value = '';

}