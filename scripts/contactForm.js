const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const sendButton = document.querySelector("#send");
const ThankYouMessage = document.querySelector("#thanks_message");
let validName = false;
let validEmail = false;
let validMessage = false;
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const checkInputs = () => {
    const nameInputValue = nameInput.value.trim();
    const emailInputValue = emailInput.value.trim();
    const messageInputValue = messageInput.value.trim();

    validName = false;
    validEmail = false;
    validMessage = false;

    if (messageInputValue === "") {
        messageInput.classList.add("invalid__input");
        messageInput.classList.remove("valid__input");
        ThankYouMessage.innerText = "Please leave a message";
        validMessage = false;
    } else {
        messageInput.classList.remove("invalid__input");
        messageInput.classList.add("valid__input");
        ThankYouMessage.innerText = "";
        validMessage = true;
    }

    if (emailInputValue === "") {
        emailInput.classList.add("invalid__input");
        emailInput.classList.remove("valid__input");
        ThankYouMessage.innerText = "Please fill in your email";
        validEmail = false;
    } else if (!emailInputValue.match(pattern)) {
        emailInput.classList.add("invalid__input");
        emailInput.classList.remove("valid__input");
        ThankYouMessage.innerText = "Please fill in a valid email";
        validEmail = false;
    } else {
        emailInput.classList.remove("invalid__input");
        emailInput.classList.add("valid__input");
        ThankYouMessage.innerText = "";
        validEmail = true;
    }

    if (nameInputValue === "") {
        nameInput.classList.add("invalid__input");
        nameInput.classList.remove("valid__input");
        ThankYouMessage.innerText = "Please fill in your name";
        validName = false;
    } else {
        nameInput.classList.remove("invalid__input");
        nameInput.classList.add("valid__input");
        ThankYouMessage.innerText = "";
        validName = true;
    }
}

function sendMail () {

    checkInputs();

    if (validName === true && validEmail === true && validMessage === true) {
        let params = {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value,
        };

        const serviceID = "service_sa0ysej";
        const templateID = "template_7buuyfe";

        emailjs
            .send(serviceID, templateID, params)
            .then((response) => {
                document.querySelector("#name").value = "";
                document.querySelector("#email").value = "";
                document.querySelector("#message").value = "";
                console.log(response.status, response.text);
                ThankYouMessage.value = "Thank you for your message";
                //alert("bedankt voor uw bericht");
            })
            .catch((error) => {
                console.log(error);
            });
    }
}


sendButton.addEventListener("click", (event) => {
    event.preventDefault()
    //console.log("prevent");
    sendMail()
});