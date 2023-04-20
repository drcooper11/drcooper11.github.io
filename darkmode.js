var icon = document.getElementById("icon");
var btnr1 = document.getElementsByClassName("buttonr1");
var btnl1 = document.getElementsByClassName("buttonl1");



icon.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(checkClassListForDarkMode() == true)
    {
        icon.src='img/sun.png';
        window.localStorage.setItem('theme', 'dark')
    }
    else 
    {
        icon.src = 'img/moon.png';
        window.localStorage.setItem('theme', 'light');
    }
}


function checkDarkModeAndSetAccordingly() 
{
    var theme = window.localStorage.getItem('theme');
    if (theme == 'dark') {
        if (checkClassListForDarkMode() == true) {
            console.log("Already on dark mode!");
            icon.src='img/sun.png';
        } else {
            document.body.classList.toggle('dark-theme');
            icon.src='img/sun.png';
        }
    }
    else
    {
        if (checkClassListForDarkMode() != true) {
            console.log("Already on dark mode!");
        } else {
            document.body.classList.toggle('dark-theme');
        }    }
}

function checkClassListForDarkMode() {
    if (document.body.classList.contains("dark-theme")) {
        return true;
    }
    else {
        return false;
    }
}
    

window.onload = checkDarkModeAndSetAccordingly();
