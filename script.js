document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the input values
        const locationInput = document.querySelector('.form-input:nth-of-type(1)').value;
        const topicInput = document.querySelector('.form-input:nth-of-type(2)').value;
        const courseInput = document.querySelector('.form-input:nth-of-type(3)').value;

        // Log the input values to the console
        console.log('Location:', locationInput);
        console.log('Topic:', topicInput);
        console.log('Course:', courseInput);

        // Perform AJAX request (replace with your actual AJAX code)
        // Example using Fetch API
        fetch('your-api-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                location: locationInput,
                topic: topicInput,
                course: courseInput
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle response data as needed
            console.log('Response:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    // Add event listener to the form submit event
    document.querySelector('form').addEventListener('submit', handleFormSubmission);
});