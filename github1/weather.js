window.addEventListener('load', () => {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', () => {
        const searchInput = document.getElementById('searchInput');
        const location = searchInput.value.trim();
        if (location !== '') {
            const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your API key
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Failed to fetch data');
                    }
                })
                .then(data => {
                    displayClimate(data);
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Failed to fetch weather data. Please try again.');
                });
        } else {
            alert('Please enter a location');
        }
    });

    function displayClimate(data) {
        const forecastInfo = document.querySelector('.forecast-info');
        forecastInfo.innerHTML = '';

        const locationName = document.createElement('h2');
        locationName.textContent = `Climate in ${data.name}`;

        const climate = document.createElement('p');
        climate.textContent = `Climate: ${data.weather[0].main}`;

        forecastInfo.appendChild(locationName);
        forecastInfo.appendChild(climate);
    }
});
