
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
});