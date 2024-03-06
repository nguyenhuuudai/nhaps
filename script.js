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
        .catch(error => {// Lấy tất cả các phần tử có class là 'course-item' và 'news-item'
            const courseItems = document.querySelectorAll('.course-item');
            const newsItems = document.querySelectorAll('.news-item');
            
            // Thêm sự kiện khi di chuột qua các phần tử
            courseItems.forEach(item => {
                item.addEventListener('mouseenter', () => {
                    item.style.transform = 'scale(1.05)';
                    item.style.transition = 'transform 0.3s ease';
                });
            
                item.addEventListener('mouseleave', () => {
                    item.style.transform = 'scale(1)';
                });
            });
            
            newsItems.forEach(item => {
                item.addEventListener('mouseenter', () => {
                    item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                    item.style.transition = 'box-shadow 0.3s ease';
                });
            
                item.addEventListener('mouseleave', () => {
                    item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                });
            });
    document.querySelector('form').addEventListener('submit', handleFormSubmission);
});
