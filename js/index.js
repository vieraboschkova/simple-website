/* GET ELEMENTS */
const nameInput = document.getElementById('contactName');
const emailInput = document.getElementById('contactEmail');
const msgInput = document.getElementById('contactMsg');
const submitButton = document.getElementById('contactFormButton');

/* CHECK IF INPUTS AND TEXTAREA NOT EMPTY TO ENABLE THE BUTTON */

function enableButtonIfAllFieldsFilled() {
    const nameNotEmpty = nameInput.value  !== '';
    const emailNotEmpty = emailInput.value  !== '';
    const msgNotEmpty = msgInput.value !== '';

    if (nameNotEmpty && emailNotEmpty && msgNotEmpty) {
        submitButton.disabled = false;
    }
}


/* VALIDATE INPUTS */

function validateName() {
    const nameRegex = /^(\b[A-Z][a-z]+\s?)+$/;
    const nameToValidate = nameInput.value;
    console.log(nameToValidate);
    console.log(nameRegex.test(nameToValidate))
    // if (nameToValidate.length < 7) {
    //     console.log('longer')
    // }
}

function validateForm() {
    validateName();
    console.log('trying to submit');
}

/* CLEAR FORM */

function clearContactForm () {
    nameInput = '';
    emailInput.value = '';
    msgInput.value = '';

}