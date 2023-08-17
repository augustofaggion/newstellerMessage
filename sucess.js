function validation (){
    let valide = true;
    const emailInput = document.getElementById("email");

    if(email.value === ""){
        document.getElementById("error_message").innerHTML = "Valid E-mail Required";
        emailInput.nextElementSibling.style.display = "block";
        emailInput.style.border = "1px solid red";
        valide = false;
    } else {
        emailInput.nextElementSibling.style.display = "none";
        emailInput.style.border = "1px solid black";
    }
}