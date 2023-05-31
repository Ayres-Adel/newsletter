function validateEmail(event) {
    var emailInput = document.getElementById("emailInput");
    var email = emailInput.value.trim();
    var errorMessage = document.getElementById("errorMessage");
    var form = document.getElementById("myForm");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        event.preventDefault(); 
        errorMessage.textContent = "Invalid email";
        errorMessage.style.display = "block";
        emailInput.classList.add("error-border");
    } else {
        errorMessage.style.display = "none";
        emailInput.classList.remove("error-border");
        form.submit();
    }
}