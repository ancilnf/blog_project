
window.addEventListener('load',function(){

    var button = localStorage.getItem('btn_checked');
    if (button === 'false') {
        document.getElementById('mode-btn').checked = false
        const variables1 = document.querySelector(':root');
        console.log("Im in")
        variables1.style.setProperty('--bg-mode', 'rgb(255, 255, 255)');
        variables1.style.setProperty('--form-bg-mode', 'rgb(240, 240, 240)');
        variables1.style.setProperty('--comment-bg-mode', 'rgb(255, 255, 255)');
        variables1.style.setProperty('--color', 'rgb(0, 0, 0)');
    }
        else{
            document.getElementById('mode-btn').checked = true
            const variables2 = document.querySelector(':root');
            variables2.style.setProperty('--bg-mode', 'rgb(0, 0, 0)');
            variables2.style.setProperty('--form-bg-mode', 'rgb(15, 15, 15)');
            variables2.style.setProperty('--comment-bg-mode', 'rgb(0, 0, 0)');
            variables2.style.setProperty('--color', 'rgb(255, 255, 255)');
        }

    console.log(localStorage.getItem('btn_checked'))
    console.log("I'm here now")
    const btnClicked = document.getElementById('mode-btn').addEventListener('change', (el) => {
            const variables = document.querySelector(':root');
            console.log(variables);
        if (el.target.checked){
            variables.style.setProperty('--bg-mode', 'rgb(0, 0, 0)');
            variables.style.setProperty('--form-bg-mode', 'rgb(15, 15, 15)');
            variables.style.setProperty('--comment-bg-mode', 'rgb(0, 0, 0)');
            variables.style.setProperty('--color', 'rgb(255, 255, 255)');
        }else {
            variables.style.setProperty('--bg-mode', 'rgb(255, 255, 255)');
            variables.style.setProperty('--form-bg-mode', 'rgb(240, 240, 240)');
            variables.style.setProperty('--comment-bg-mode', 'rgb(255, 255, 255)');
            variables.style.setProperty('--color', 'rgb(0, 0, 0)');
        }
            localStorage.setItem('btn_checked', el.target.checked);
            console.log(localStorage.getItem('btn_checked'))
            console.log("I'm here finally")
    }); 
});