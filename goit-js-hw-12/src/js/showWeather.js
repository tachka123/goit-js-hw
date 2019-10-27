
export default function(weather) {
  console.log(weather);
  const location = document.querySelector('[data-field="location"]');
  const temperature = document.querySelector('[data-field="temp"]');
  const Humidity = document.querySelector('[data-field="humidity"]');
  const Wind = document.querySelector('[data-field="wind"]');
  const Conditions = document.querySelector('[data-field="conditions"]');
  Humidity.textContent = weather.currently.humidity;
  temperature.textContent = Math.round(
    ((weather.currently.temperature - 32) * 5) / 9,
  );
  Wind.textContent = Math.round(weather.currently.windSpeed * 1.609344);
  Conditions.textContent = weather.currently.summary;
  location.textContent = weather.timezone
}
