const form = document.getElementById("contact-form");

const successMessage = document.getElementById("success-message");

const errorMessage = document.getElementById("error-message");

const submitButton = document.getElementById("submit-button");


form.addEventListener("submit", async function (event) {

    event.preventDefault();


    // Hide previous messages
    successMessage.style.display = "none";
    errorMessage.style.display = "none";


    // Change button while sending
    submitButton.disabled = true;

    submitButton.textContent = "Sending...";


    // Collect form information
    const formData = new FormData(form);


    try {

        const response = await fetch(
            "https://formspree.io/f/xqpavzdl",
            {
                method: "POST",

                body: formData,

                headers: {
                    "Accept": "application/json"
                }
            }
        );


        if (response.ok) {

            // Show success message
            successMessage.style.display = "block";


            // Clear the form
            form.reset();


            // Restore button
            submitButton.disabled = false;

            submitButton.textContent = "Message Sent ✓";


            // Return button to normal after a few seconds
            setTimeout(function () {

                submitButton.textContent = "Send Message →";

            }, 4000);


        } else {

            throw new Error("Form submission failed.");

        }


    } catch (error) {

        // Show error message
        errorMessage.style.display = "block";


        // Restore button
        submitButton.disabled = false;

        submitButton.textContent = "Send Message →";

    }

});