async function fetchData() {
    let city = document.getElementById('city').value;
    
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    const options = {
        method: 'GET',
        headers: {
    'X-RapidAPI-Key': 'Your api key ',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
};

try {

const response = await fetch(url, options);
const result = await response.json();
document.getElementById('secImg').style.display = 'block';
document.getElementById('secImg1').style.display = 'block';
document.getElementById('name').innerHTML = city ;
document.getElementById('temp').innerHTML =  result.temp  +`°C`;
document.getElementById('wind').innerHTML = `Wind | ` +` `+ result.wind_speed + `km\h`;
document.getElementById('humidity').innerHTML = `Hum | ` + result.humidity;


var inputValue = result.cloud_pct;
      var imageElement = document.getElementById('sky');
      imageElement.style.display = 'block';
      var temp = document.getElementById('name');

      if (temp <= 1 || inputValue > 60  ) {
        imageElement.src = 'Images/snow.png'; // Change this to the path of your first image
      } else if (temp >= 20 || inputValue < 40) {
        imageElement.src = 'Images/clear.png'; // Change this to the path of your second image
      } else if (inputValue < 40 || temp <= 10  ) {
        imageElement.src = 'Images/mist.png'; // Change this to the path of your third image
      }else if (inputValue >= 20 || temp >=20  ) {
        imageElement.src = 'Images/clouds.png'; }
       else {
        imageElement.src = 'Image/rain.png'; // No image displayed if value is above 40
      }
    




console.log(result);
} catch (error) {
console.error(error);
}

document.getElementById('city').value='';

}