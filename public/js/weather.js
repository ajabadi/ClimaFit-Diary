
    const apiKey = '0237cfe82d42fa668919693e084185e5';
    // const apiKey = process.env.OPENWEATHER_API_KEY;



const weatherButton = document.querySelector(".search-weather");

  // Elements
  var searchForm = document.querySelector('.weatherform');
  let weatherIcon = $(".weathericon");




  // Event Listener for Form Submission
weatherButton.addEventListener('click', async function (e) {
    e.preventDefault();
    var weathercard = document.querySelector('.weathercard')
    var lat;
    var lon; 
    var description;
    var temp;
    var icon;
    var city = document.getElementById('weathersearch').value;
    var locationurl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    try {
        var response = await fetch(locationurl);
        var data = await response.json();
        console.log(data);
        lat = data[0].lat;
        lon = data[0].lon;
        const weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
        response = await fetch(weatherurl);
        var weatherData = await response.json();
        console.log(weatherData)
          var weatherdisplay = weatherData
        display = document.querySelector('.weathercard').textContent = weatherdisplay.weather[0].description;
        temp = document.querySelector('.temperature').textContent = weatherdisplay.main.temp;
        iconcode = weatherdisplay.weather[0].icon;
        const iconurl = `https://openweathermap.org/img/wn/${iconcode}@2x.png`;

        icondisplay = document.querySelector('.weathericon').src = iconurl;
        
    } catch (err) {
        console.log(err);
    }
});