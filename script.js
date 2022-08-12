const emailInput = document.querySelector(".email-input");
const singupButton = document.querySelector(".singup-button");
const message = document.querySelector(".message");

singupButton.addEventListener("click", () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
        emailInput.value = "";
        message.textContent = "Thank You!";
    } else {
        message.textContent = "Eamil is not valid!";
    }
})