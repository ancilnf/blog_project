
window.addEventListener('load',function(){

    var button = localStorage.getItem('btn_checked');
    if (button === 'false') {
        document.getElementById('switchld').checked = false
        const variables1 = document.querySelector(':root');
        variables1.style.setProperty('--bg-mode', 'rgb(235, 235, 235)');
        variables1.style.setProperty('--form-bg-mode', 'rgb(255, 255, 255)');
        variables1.style.setProperty('--comment-bg-mode', 'rgb(240, 240, 240)');
        variables1.style.setProperty('--color', 'rgb(0, 0, 0)');
        variables1.style.setProperty('--mode-icon-color', 'rgb(235, 235, 235)')

        const darkMode = document.querySelector('.switch__label');
            darkMode.classList.remove("bi-brightness-high")
            darkMode.classList.add("bi-moon-stars")
    }
        else{
            document.getElementById('switchld').checked = true
            const variables2 = document.querySelector(':root');
            variables2.style.setProperty('--bg-mode', 'rgb(20, 20, 20)');
            variables2.style.setProperty('--form-bg-mode', 'rgb(0, 0, 0)');
            variables2.style.setProperty('--comment-bg-mode', 'rgb(15, 15, 15)');
            variables2.style.setProperty('--color', 'rgb(255, 255, 255)');
            variables2.style.setProperty('--mode-icon-color', 'rgb(238, 255, 0)')

            const lightMode = document.querySelector('.switch__label');
            lightMode.classList.remove("bi-moon-stars")
            lightMode.classList.add("bi-brightness-high")
        }

    const btnClicked = document.getElementById('switchld').addEventListener('change', (el) => {
            const variables = document.querySelector(':root');
        if (el.target.checked){
            variables.style.setProperty('--bg-mode', 'rgb(20, 20, 20)');
            variables.style.setProperty('--form-bg-mode', 'rgb(0, 0, 0)');
            variables.style.setProperty('--comment-bg-mode', 'rgb(15, 15, 15)');
            variables.style.setProperty('--color', 'rgb(255, 255, 255)');
            variables.style.setProperty('--mode-icon-color', 'rgb(238, 255, 0)')

            const lightMode = document.querySelector('.switch__label');
            lightMode.classList.remove("bi-moon-stars")
            lightMode.classList.add("bi-brightness-high")

        }else {
            variables.style.setProperty('--bg-mode', 'rgb(235, 235, 235)');
            variables.style.setProperty('--form-bg-mode', 'rgb(255, 255, 255)');
            variables.style.setProperty('--comment-bg-mode', 'rgb(240, 240, 240)');
            variables.style.setProperty('--color', 'rgb(0, 0, 0)');
            variables.style.setProperty('--mode-icon-color', 'rgb(235, 235, 235)')

            const darkMode = document.querySelector('.switch__label');
            darkMode.classList.remove("bi-brightness-high")
            darkMode.classList.add("bi-moon-stars")
        }
            localStorage.setItem('btn_checked', el.target.checked);
    }); 

// WEATHER API FETCH

    const location = document.getElementById("locationData");
    location.addEventListener('submit', (event) =>{
        event.preventDefault();

        const city= location.elements['city'].value
        console.log(city)
    
        weatherBalloon(city)
})
});

function weatherBalloon(cityID) {
    var key = '60d7a2f1a6ebc07803526f75beb458ac';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityID}&units=metric&APPID=${key}`)
    .then(res=> res.json())
    .then(function (data){
        console.log(data)
        const weatherDescription = data.weather[0].description;
        document.getElementById('description').innerHTML = weatherDescription;

        const temp = (data.main.temp)
        const temp_max = (data.main.temp_max)
        const temp_min = (data.main.temp_min)

        document.getElementById('temp').innerHTML =`Temp: ${Math.trunc(temp)}${`&deg;`}C`;
        document.getElementById('temp-max').innerHTML = `Max Temp: ${Math.trunc(temp_max)}${`&deg;`}C`;
        document.getElementById('temp-min').innerHTML = `Min Temp: ${Math.trunc(temp_min)}${`&deg;`}C`;
	    document.getElementById('location').innerHTML = `${(data.name)} ${(data.sys.country)}`;
        document.getElementById('openweathercredits').innerHTML = 'Data provided by <span> OpenWeather </span>';

    })
      .catch((error) => {
          console.error("GET ERROR", error);
          document.getElementById('description').innerHTML = "Incorrect City name. Please try again.";
          document.getElementById('temp').innerHTML ='';
          document.getElementById('temp-max').innerHTML = '';
          document.getElementById('temp-min').innerHTML = '';
	      document.getElementById('location').innerHTML = '';
          document.getElementById('openweathercredits').innerHTML = '';
      });
      
          //catch errors
    }