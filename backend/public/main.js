import axios from 'axios';

// Function to fetch data from backend
const fetchData = async () => {
    try {
        const response = await axios.get('/api/example');
        console.log(response.data); // Handle the response data
        document.querySelector('#results').textContent = response.data.message;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.querySelector('#results').textContent = 'Failed to fetch data.';
    }
};

// Call the function to fetch data when the page loads
document.addEventListener('DOMContentLoaded', fetchData);
