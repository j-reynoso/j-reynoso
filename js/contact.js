const form = document.querySelector("#message");

function saveMessage() {
    alert("Function reached");
}

form.addEventListener('submit', (event) => {
    alert("Your message has been noted.");
    saveMessage();
});