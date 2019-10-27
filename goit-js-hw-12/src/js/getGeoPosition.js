export default function GetCurrentLocation() {
  const options = {
    maximumAge: 60000
  }
  return new Promise((resolve, reject) => {
    return navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
