//ADD the key and change units to imperial
const url = "https://api.openweathermap.org/data/2.5/weather?zip=84601,us&appid=1d92c36998cc7c9d157023eb6487b160&units=imperial"//metric

//Go fetch it and then wait for a response.

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      // displayResults(data);

    // assigning atributes API to ids in HTML
    document.getElementById('place').innerHTML=data.name;
    document.getElementById('currentTemp').innerHTML=data.main.temp;
    document.getElementById('windSpeed').innerHTML=data.wind.speed;
    
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



