export default async function(weather, city) {
  if (!city) {
    await fetch(
      `https://us1.locationiq.com/v1/reverse.php?key=9c8bd24f982849&lat=${weather.latitude}&lon=${weather.longitude}&format=json`,
    )
      .then(result => result.json())
      .then(result => {
        city = result.display_name.split(',')
        city = `${city[1]},${city[2]},${city[3]},${city[4]}`
      });
  }
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
  location.textContent = city;
}
