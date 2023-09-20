function onChangeEmail(){
    const email = form.email().value;
    form.emailInvalidError().style.display = validateEmail(email) || !email ? "none" : "block";
    form.emailRequiredError().style.display = email ? "none" : "block";
    toggleRegisterButtonDisable()
}

function onChangePassword(){
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
    form.passwordMinLengthError().style.display = password.length >= 6  || !password ? "none" : "block";
    validatePasswordsMatch();
    toggleRegisterButtonDisable()
}

function onChangeConfirmPassword(){
    validatePasswordsMatch();
    toggleRegisterButtonDisable()
}

function validatePasswordsMatch(){
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;
    form.confirmPasswordDoesntMatchError().style.display = 
    password == confirmPassword ? "none" : "block";
}

function toggleRegisterButtonDisable(){
    form.registerButton().disabled = !isFormValid();
}

function isFormValid(){
    const email = form.email().value;
    if (!email || !validateEmail(email)) {
        return false;
        
    }
    const password = form.password().value;
    if (!password || password.length < 6) {
        return false;
        
    }
    const confirmPassword = form.confirmPassword().value;
    if (password != confirmPassword) {
        return false;
    }

    return true;
}

const form = {
    confirmPassword: ()=> document.getElementById("confirmPassword"),
    confirmPasswordDoesntMatchError: () => document.getElementById("password-doesnt-match-error"),
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    passwordMinLengthError: () => document.getElementById("password-min-length-error"),
    registerButton: () => document.getElementById("register-button")

}