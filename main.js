const form = document.forms["mailing-list-form"];
const errorMessage = document.getElementById("error-message");

function submitForm() {
    const emailInput = form.elements["email-input"].value;
    if (!isValidEmail(emailInput)) {
        errorMessage.innerText = "Invalid email";
    } else {
        errorMessage.innerText = "";
    }
}

function isValidEmail(s) {
    return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(s);
}
