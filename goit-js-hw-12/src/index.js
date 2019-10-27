import './styles.css';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css'
import getCurrentLocation from './js/getGeoPosition';
import fetchWeather from './js/fetchWeather'
import showWeather from './js/showWeather'
import weatherByCity from './js/weatherByCity'
import PNotify from 'pnotify/dist/es/PNotify';




getCurrentLocation().then(onGetPosSuccess).catch(onGetPosError)

function onGetPosError () {
  PNotify.error('No location permissions, use search by city name');
}

function onGetPosSuccess(result){
  fetchWeather(result.coords.latitude,result.coords.longitude).then(result => result.json()).then(result => showWeather(result))
}

weatherByCity()
