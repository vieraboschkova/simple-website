/* GET ELEMENTS */

const nameInput = document.getElementById('contactName');
const emailInput = document.getElementById('contactEmail');
const msgInput = document.getElementById('contactMsg');
const submitButton = document.getElementById('contactFormButton');
const contactForm = document.getElementById('contactForm');

/* CHECK IF INPUTS AND TEXTAREA NOT EMPTY TO ENABLE THE BUTTON */

function enableButtonIfAllFieldsFilled() {
    const nameNotEmpty = nameInput.value  !== '';
    const emailNotEmpty = emailInput.value  !== '';
    const msgNotEmpty = msgInput.value !== '';

    if (nameNotEmpty && emailNotEmpty && msgNotEmpty) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

/* CREATE INVALID INPUT MESSAGES */

function alertInvalidName () {
    const nameValidationErrorMsg = 'What is your reaaaaal name? Please submit a valid name! Like Lisa Minelli or John Travolta...';
    alert(nameValidationErrorMsg);
}

function alertInvalidEmail () {
    const emailValidationErrorMsg = 'If you want me to get back to you, please submit a valid email address! Like hey@you.go or hello@world.now';
    alert(emailValidationErrorMsg);
}

/* VALIDATE INPUTS */

function validateName() {
    const nameToValidate = nameInput.value;
    const nameIsEmpty = nameInput.value === '';
    const nameRegex = /^(\b[A-Z][a-z]*\s?)+$/;
    const whitespacesRegex = /^\s+$/;
    const hasOnlyWhitespace = whitespacesRegex.test(nameToValidate);
    const nameIsValid = nameRegex.test(nameToValidate);

    if (nameIsEmpty || hasOnlyWhitespace || !nameIsValid) {
        alertInvalidName();
        return false;
    } else {
        return nameIsValid;
    }
}

function validateEmail() {
    const emailToValidate = emailInput.value;
    const emailIsEmpty = emailInput.value === '';
    const emailRegex = /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i;
    const whitespacesRegex = /^\s+$/;
    const hasOnlyWhitespace = whitespacesRegex.test(emailToValidate);
    const emailIsValid = emailRegex.test(emailToValidate);

    if (emailIsEmpty || hasOnlyWhitespace || !emailIsValid) {
        alertInvalidEmail();
        return false;
    } else {
        return emailIsValid;
    }
}

/* CLEAR FORM AFTER SUBMIT */

function clearForm () {
    submitButton.disabled = true;
    contactForm.reset();
}

/* VALIDATE FORM AND SUBMIT FORM */

function validateForm() {
    const nameIsValid = validateName();
    const emailIsValid = validateEmail();

    if (nameIsValid && emailIsValid) {
        alert('Contact established!');
        clearForm();
    }
}
