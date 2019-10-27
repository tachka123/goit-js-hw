export default function getWeatherByCords(long, lat) {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b715457808493e49927c694168fcb19d/${long},${lat}`,
  );
}
