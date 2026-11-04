roll = new Audio("https://www.myinstants.com/media/sounds/never-gonna-give-u-up.mp3");

function rickTime(){
    document.getElementById("header").style.display = "none";
    document.getElementById("rick").style.display = "block";
    roll.play();
}