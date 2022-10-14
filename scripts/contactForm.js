const sendButton = document.querySelector("#send");
const ThankYouMessage = document.querySelector("#thanks_message");

function sendMail () {
    let params = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value
    };
    console.log("test");

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


sendButton.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("prevent");
    sendMail()
});