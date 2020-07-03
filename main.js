const form = document.getElementById("mailing-list-form");
const signUpConfirmationMessageBox = document.getElementById(
    "sign-up-confirmation-message-box"
);
const errorMessage = document.getElementById("error-message");

const storedMailingListEmail = localStorage.getItem("mailingListEmail");

if (storedMailingListEmail) handleAlreadySubmitted();

function submitForm() {
    const emailInput = form.elements["email-input"].value;
    console.log(emailInput);
    if (!isValidEmail(emailInput)) {
        errorMessage.innerText = "Invalid email";
    } else {
        errorMessage.innerText = "";
        // To simulate an api call.
        setTimeout(function () {
            localStorage.setItem("mailingListEmail", emailInput);
            handleAlreadySubmitted();
        }, 1000);
    }
}

function isValidEmail(s) {
    return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(s);
}

function handleAlreadySubmitted() {
    form.style = "display: none;";
    signUpConfirmationMessageBox.style = "display: block;";
}
