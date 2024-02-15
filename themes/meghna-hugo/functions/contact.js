
$(document).ready(function() {
    // Intercept the form submission
    $('#contact-form').submit(function(e) {
        // Prevent the default form submission
        e.preventDefault();

        // Get the form data
       // Get the form data as an object
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#subject').val(),
                text: $('#text').val()
        };
        console.log(formData)

        // Send a POST request to your API endpoint
        $.ajax({
            type: 'POST',
            url: 'http://localhost:9000/.netlify/functions/api/sendEmail',
            data: formData,
            success: function(response) {
                // Handle the successful response from the server
                console.log(response);
                // Optionally, you can redirect the user or show a success message here
            },
            error: function(error) {
                // Handle errors
                console.log(error);
                // Optionally, you can display an error message to the user
            }
        });
    }); 
});
