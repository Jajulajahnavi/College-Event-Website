document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const message = document.getElementById("message");

    message.textContent =
        "Thank you, " + name + "! Your registration has been submitted successfully.";

    document.getElementById("registrationForm").reset();

});