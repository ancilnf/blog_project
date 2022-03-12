
window.addEventListener('load', ()=> {
    triggerWindowRefresh();

    var button = localStorage.getItem('btn_checked');

    //Light Mode
    if (button === 'false') {
        document.getElementById('switchld').checked = false
        const variables1 = document.querySelector(':root');
        variables1.style.setProperty('--bg-mode', 'linear-gradient(90deg,#f5f7fa,#c3cfe2)');
        variables1.style.setProperty('--form-bg-mode', 'rgb(255, 255, 255)');
        variables1.style.setProperty('--comment-bg-mode', 'rgb(240, 240, 240)');
        variables1.style.setProperty('--color', 'rgb(0, 0, 0)');
        variables1.style.setProperty('--mode-icon-color', 'rgb(0, 26, 255)');
        variables1.style.setProperty('--box-shadow', '0 10px 6px -8px #777');

        // const darkMode = document.querySelector('.switch__label');
        //     darkMode.classList.remove("bi-brightness-high");
        //     darkMode.classList.add("bi-moon-stars");

        const navIcon= document.querySelector(".techfont");
            navIcon.classList.remove("navbar-dark");
            navIcon.classList.add("navbar-light");
    }
    //Dark Mode
        else{
            document.getElementById('switchld').checked = true
            const variables2 = document.querySelector(':root');
            variables2.style.setProperty('--bg-mode', 'linear-gradient(270deg, #101118,#0e0d0d)');
            variables2.style.setProperty('--form-bg-mode', 'rgb(30, 30, 30)');
            variables2.style.setProperty('--comment-bg-mode', 'rgb(15, 15, 15)');
            variables2.style.setProperty('--color', 'rgb(255, 255, 255)');
            variables2.style.setProperty('--mode-icon-color', 'rgb(238, 255, 0)');
            variables2.style.setProperty('--box-shadow', '0 10px 6px -8px rgb(0, 0, 0)');

        // const lightMode = document.querySelector('.switch__label');
        //     lightMode.classList.remove("bi-moon-stars");
        //     lightMode.classList.add("bi-brightness-high");

        const navIcon= document.querySelector(".techfont");
            navIcon.classList.remove("navbar-light");
            navIcon.classList.add("navbar-dark");

        }

    const btnClicked = document.getElementById('switchld').addEventListener('change', (el) => {
            const variables = document.querySelector(':root');
        //Dark Mode
        if (el.target.checked){
            variables.style.setProperty('--bg-mode', 'linear-gradient(270deg, #101118,#0e0d0d)');
            variables.style.setProperty('--form-bg-mode', 'rgb(30, 30, 30)');
            variables.style.setProperty('--comment-bg-mode', 'rgb(15, 15, 15)');
            variables.style.setProperty('--color', 'rgb(255, 255, 255)');
            variables.style.setProperty('--mode-icon-color', 'rgb(238, 255, 0)')
            variables.style.setProperty('--box-shadow', '0 10px 6px -8px rgb(0, 0, 0)');

        // const lightMode = document.querySelector('.switch__label');
        //     lightMode.classList.remove("bi-moon-stars");
        //     lightMode.classList.add("bi-brightness-high");

        const navIcon= document.querySelector(".techfont");
            navIcon.classList.remove("navbar-light");
            navIcon.classList.add("navbar-dark");

        }
        //Light Mode
        else {
            variables.style.setProperty('--bg-mode', 'linear-gradient(90deg,#f5f7fa,#c3cfe2)');
            variables.style.setProperty('--form-bg-mode', 'rgb(255, 255, 255)');
            variables.style.setProperty('--comment-bg-mode', 'rgb(240, 240, 240)');
            variables.style.setProperty('--color', 'rgb(0, 0, 0)');
            variables.style.setProperty('--mode-icon-color', 'rgb(0, 26, 255)')
            variables.style.setProperty('--box-shadow', '0 10px 6px -8px #777');

        // const darkMode = document.querySelector('.switch__label');
        //     darkMode.classList.remove("bi-brightness-high");
        //     darkMode.classList.add("bi-moon-stars");

        const navIcon= document.querySelector(".techfont");
            navIcon.classList.remove("navbar-dark");
            navIcon.classList.add("navbar-light");
        }
            localStorage.setItem('btn_checked', el.target.checked);
    });

    if(window.location.href.indexOf("q=")> -1){
        window.scroll({
                top:675, left:0, behavior: 'smooth'
            });
        }

            document.getElementById("skip").addEventListener('click', (e) =>{
             window.scroll({
                    top:500, left:0, behavior: 'smooth'
                    });
             });

// WEATHER API FETCH
    try {
        var weatherBtn = localStorage.getItem('weather_data');

        var city= document.getElementById("city");

            if(weatherBtn !== null && weatherBtn !== ''){
                if(city.value !== null){
                document.getElementById("city").value = weatherBtn;

                weatherBalloon(weatherBtn);
            }
            else{
                weatherBalloon('Earth');
            }
            }

        // document.getElementById("city").addEventListener('blur', (event) =>{
        // event.preventDefault();
        // citySearch();
        // });

        document.getElementById("city").addEventListener('keydown', (eve) =>{
        if (eve.code === "Enter" || eve.code === "NumpadEnter"){
        citySearch();
        }
      });
    }
    catch(err) {}
});

let citySearch = () => {
    const city= document.getElementById("city").value;
    loadImg(city);
    localStorage.setItem('weather_data', city);

    if (city !== ''){
     weatherBalloon(city);
    }
    else{
        weatherBalloon('Earth');
    }
}

 //Repoponsive reload on window resize
 window.addEventListener('resize',triggerWindowRefresh);

 function triggerWindowRefresh() {
 let windowSize= window.matchMedia("(min-width: 1000px)")
 if (windowSize.matches){
     document.querySelector("nav").classList.add("fixed-top");
     let uImageId= document.querySelectorAll("#unsplashImageId");
         for(var i =0; i<uImageId.length; i++)
         {
             uImageId[i].classList.remove("unsplashImageMob");
             uImageId[i].classList.add("unsplashImageDesktop");
         }

     document.onscroll= ()=> {
         if(document.documentElement.scrollTop > 25){
         document.querySelector("nav").classList.add("nav-bgscroll");
         document.querySelector("nav").classList.add("nav-bgscroll-out");
         }
         else{
             document.querySelector("nav").classList.remove("nav-bgscroll");
         }
     };
    }
    else{
     document.querySelector("nav").classList.remove("fixed-top");
     let uImageId= document.querySelectorAll("#unsplashImageId");
     for(var i =0; i < uImageId.length; i++)
         {
             uImageId[i].classList.remove("unsplashImageDesktop");
             uImageId[i].classList.add("unsplashImageMob");
         }

            const cityChk = document.getElementById("city");
            if (cityChk !== null){
             document.getElementById("city").addEventListener('blur', citySearch);
            }
    }
 }

//Weather API
function weatherBalloon(cityID) {
    var key = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityID}&units=metric&APPID=${key}`)
    .then(res=> res.json())
    .then((data) => {

        const weatherDescription = data.weather[0].description;

        let description = document.getElementById('description');
        if (description.innerHTML !== '[object HTMLInputElement]') {
        document.getElementById('description').innerHTML = weatherDescription;
        }

        const temp = (data.main.temp);
        const temp_max = (data.main.temp_max);
        const temp_min = (data.main.temp_min);

        document.getElementById('temp').innerHTML =`Temp: ${Math.trunc(temp)}${`&deg;`}C`;
        document.getElementById('temp-max').innerHTML = `Max: ${Math.trunc(temp_max)}${`&deg;`}C`;
        document.getElementById('temp-min').innerHTML = `Min: ${Math.trunc(temp_min)}${`&deg;`}C`;
	    document.getElementById('location').innerHTML = `${(data.name)} ${(data.sys.country)}`;
        document.getElementById('openweathercredits').innerHTML = 'Data provided by <span> OpenWeather </span>';

    })
      .catch((error) => {
          console.error("GET ERROR", error);
          document.getElementById('description').innerHTML = 'Error';
          document.getElementById('temp').innerHTML ='';
          document.getElementById('temp-max').innerHTML = 'Please check city name and try again.';
          document.getElementById('temp-min').innerHTML = '';
	      document.getElementById('location').innerHTML = '';
          document.getElementById('openweathercredits').innerHTML = '';
      });

          //catch errors
        }

    //Unsplash Images
    function loadImg(city){
        const clientId = ''
        const url = `https://api.unsplash.com/photos/random?query=${city} landscape&client_id=${clientId}`;

        let imageElement = document.querySelectorAll(".unsplashImage");
        let imageElementMain = document.querySelectorAll(".unsplashImageMain");
        let imageLink = document.querySelectorAll(".imageRedirect");

        fetch(url)
            .then(res => res.json())
            .then((picture) => {
                imageElementMain[0].src = picture.urls.regular;
                imageLink[0].innerHTML =picture.user.name;
                imageLink[0].href= picture.links.html;
                imageElementMain[0].onerror ='';
            //   for(img in imageElement){
            //     imageElement[img].src = picture.urls.small;
            //     imageElement[img].title = `Photo by ${picture.user.name} on Unsplash`;
            //     imageLink[img].href= picture.links.html;
            //     imageElement[img].onerror ='';
            // }
            })
            .catch((err)=> {
                console.error("ERROR", err);
            });
        }