document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("kYAGEEtyz6I6Gvr3g"); // Replace with your EmailJS User ID

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Send data via EmailJS
        emailjs.send("service_cf20mhg", "ejs-test-mail-service__", {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function (response) {
            document.getElementById("response-msg").innerText = "Message sent successfully!";
            document.getElementById("contact-form").reset();
        })
        .catch(function (error) {
            document.getElementById("response-msg").innerText = "Failed to send message. Try again.";
        });
    });
});
