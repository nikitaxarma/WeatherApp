
# 🌤️ Weather App

A clean and simple weather application that shows the current temperature, location, date & time, and weather conditions using the WeatherAPI.


---

## 🚀 Features

- 🌡️ Displays real-time temperature
- 📍 Shows location and local time
- 🌤️ Displays weather condition (e.g., Sunny, Cloudy)
- 🔍 Search for any city across the globe

---

## 📦 Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- WeatherAPI (https://www.weatherapi.com/)

---

## 🛠️ Setup Instructions

1. **Clone the repository**  
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app

2. **Get a free API key from WeatherAPI**

3. **Update the API key**
   In scripts.js, replace the sample key with your own:
   ```bash
   const url = `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${targetLocation}&aqi=no`;