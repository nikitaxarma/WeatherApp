const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".location");
const dateField = document.querySelector(".datetime");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search");
const form = document.querySelector('form');
const errorDiv = document.querySelector('.error');

form.addEventListener('submit', searchLocation);
let target = 'assam';

const fetchResults = async (targetLocation) => {
    try {
        errorDiv.style.display = 'none';
        let url = `https://api.weatherapi.com/v1/current.json?key=0d42dbab06c04b7c887185112252705&q=${targetLocation}&aqi=no`;
        
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error('Location not found');
        }
        
        const data = await res.json();
        console.log(data);
      
        let locationName = data.location.name;
        let region = data.location.region;
        let country = data.location.country;
        let time = data.location.localtime;
        let temp = data.current.temp_c;
        let condition = data.current.condition.text;
        
        // Create full location string with state/region and country
        let fullLocation = locationName;
        if (region && region !== locationName) {
            fullLocation += `, ${region}`;
        }
        if (country) {
            fullLocation += `, ${country}`;
        }
        
        updateDetails(temp, fullLocation, time, condition);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        errorDiv.textContent = 'Error: Could not fetch weather data. Please check the location name.';
        errorDiv.style.display = 'block';
    }
}

function updateDetails(temp, fullLocation, time, condition) {
    let splitDate = time.split(' ')[0];
    let splitTime = time.split(' ')[1];

    let currentDay = getDayName(new Date(splitDate).getDay());
    
    temperatureField.innerText = temp;
    locationField.innerText = fullLocation;
    dateField.innerText = `${splitTime} - ${currentDay} ${splitDate}`;
    conditionField.innerText = condition;
}

function searchLocation(e) {
    e.preventDefault();
    target = searchField.value.trim();
    if (target) {
        fetchResults(target);
    }
}

function getDayName(number) {
    switch(number) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return 'Unknown';
    }
}

// Initialize with default location
fetchResults(target);