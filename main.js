const form = document.getElementById("mailing-list-form");
const signUpConfirmationMessageBox = document.getElementById(
    "sign-up-confirmation-message-box"
);
const errorMessage = document.getElementById("error-message");

const storedMailingListEmail = localStorage.getItem("mailingListEmail");

if (storedMailingListEmail) handleAlreadySubmitted();

function submitForm() {
    const emailInput = form.elements["email-input"].value;
    console.log("yoo");
    if (!isValidEmail(emailInput)) {
        errorMessage.innerText = "Invalid email";
    } else {
        errorMessage.innerText = "";
        // To simulate an api call.

        signUp(emailInput)
            .then(function (result) {
                localStorage.setItem("mailingListEmail", emailInput);
                handleAlreadySubmitted();
                console.log(result);
            })
            .catch(function (error) {
                errorMessage.innerText = "An error occured";
                console.log(error);
            });
    }
}

function isValidEmail(s) {
    return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(s);
}

function handleAlreadySubmitted() {
    form.style = "display: none;";
    signUpConfirmationMessageBox.style = "display: block;";
}

function signUp(email) {
    return fetch(
        "https://stem-bound-api-4ea6ol7fuq-uc.a.run.app/api/mailing-list",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email }),
        }
    ).then(async function (response) {
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            return Promise.reject(data);
        }
    });
}
