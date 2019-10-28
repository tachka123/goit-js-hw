import fetchWeather from './fetchWeather';
import showWeather from './showWeather';
import PNotify from 'pnotify/dist/es/PNotify';

export default function() {
  const searchForm = document.getElementById('search-form');
  const getWeather = searchForm.querySelector('button');
  const inputWeather = searchForm.querySelector('input');
  let cityNameFromApi;
  getWeather.addEventListener('click', e => {
    e.preventDefault();
    const cityName = inputWeather.value;
    const loading = document.querySelector('.loading');
    loading.style.display = 'flex';
    const cityTarget = fetch(
      `https://eu1.locationiq.com/v1/search.php?key=9c8bd24f982849&q=${cityName}&format=json`,
    )
      .then(result => result.json())
      .then(result =>  {
        cityNameFromApi = result[0].display_name.split(',')[0];
        return result[0]
      })
    cityTarget
      .then(result => fetchWeather(result.lat, result.lon))
      .then(result => result.json())
      .then(result => {
        showWeather(result, cityNameFromApi);
        loading.style.display = 'none';
      })
      .catch(error => {
        loading.style.display = 'none';
        PNotify.error('Can`t find inputed city! Please, try again');
      });
  });
}
