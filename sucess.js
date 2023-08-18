function validation (){
    const emailInput = document.getElementById("email");
    const errorSpan = document.getElementById("error_message");

    if(emailInput.value === ""){
        errorSpan.textContent = "Valid E-mail Required";
        errorSpan.style.display = "inline";
        emailInput.style.border = "1px solid red";
        return false; // prevent form submission
    } else if (!validateEmail(emailInput.value)){
        errorSpan.textContent = "Invalid E-mail Format";
        errorSpan.style.display = "inline";
        emailInput.style.border = "1px solid red";
        return false;
    } else {
        errorSpan.style.display = "none";
        emailInput.style.border = "1px solid black";
        return true; // allow form submission
    }
}

function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}