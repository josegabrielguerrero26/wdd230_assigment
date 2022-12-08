//ADD the key and change units to imperial
const url = "https://api.openweathermap.org/data/2.5/weather?zip=92008,us&appid=1d92c36998cc7c9d157023eb6487b160&units=imperial"//metric

//Go fetch it and then wait for a response.

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      // displayResults(data);

    // assigning atributes API to ids in HTML
    //document.getElementById('place').innerHTML=data.name;
    document.getElementById('currentTemp').innerHTML=data.main.temp;
    document.getElementById('windSpeed').innerHTML=data.wind.speed;
    document.getElementById('description').innerHTML=data.weather[0].description;
    document.getElementById('humidity').innerHTML=data.main.humidity;
    
    // Assigning icon-images from API in HTML
    const iconcode=data.weather[0].icon;
    console.log(iconcode);
    const icon_path ='//openweathermap.org/img/w/'+ iconcode+".png";
    console.log(icon_path);
    document.getElementById('weather_icon').src=icon_path;
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}
//end of "then" fat arrow function


apiFetch();

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?zip=92008,us&appid=1d92c36998cc7c9d157023eb6487b160&units=imperial";
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        
        const peaksforecast = jsObject.list.filter(x =>
            x.dt_txt.includes(`18:00:00`));

        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = 0;
        peaksforecast.slice(0, 3).forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            document.getElementById(`weekday${day+1}`).textContent = weekdays[d.getDay()];
            day++;
        });

        for (let i = 0; i <3; i++) {
            const imagesrc = 'https://openweathermap.org/img/w/' + peaksforecast[i].weather[0].icon + '.png';
            const desc = peaksforecast[i].weather[0].description;
            document.getElementById(`icon${i+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i+1}`).setAttribute('alt', desc);
            document.getElementById(`day${i+1}`).innerHTML = `${Math.round(peaksforecast[i].main.temp)}&#8457`;
        }
        
});