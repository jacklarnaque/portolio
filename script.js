const navbar = document.getElementById("navbarSite");
const scrollTopButton = document.getElementById("scroll-top-button");

window.onscroll=function(){
    if(window.pageYOffset>200){
        navbar.classList.remove("bg-transparent", "navbar-dark");
        navbar.classList.add("bg-light", "navbar-light");
        scrollTopButton.classList.add("show");
    }
    else{
        navbar.classList.add("bg-transparent", "navbar-dark");
        navbar.classList.remove("bg-light", "navbar-light");
        scrollTopButton.classList.remove("show");
    }
}

const typeWriter = document.getElementById('type-writer');

let typewriter = new Typewriter(typeWriter, {
  loop: true
});

typewriter.typeString('Freelance')
  .pauseFor(1500)
  .deleteChars(9)
  .typeString('<span style="color: #FF5722;">HTML 5</span>')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString('<span style="color: #2196F3;">CSS 3</span>')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('<span style="color: #FFDF00;">JavaScript</span>')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<span style="color: #777BB3;">Php</span>')
  .pauseFor(1000)
  .deleteChars(3)
  .typeString('<span style="color: #fff;">Symfony</span>')
  .pauseFor(1000)
  .start();

var r = document.querySelector('body');


function changeColor(color, colorhover) {
  r.style.setProperty('--color-accent', color);
  r.style.setProperty('--color-accent-hover', colorhover);
}

function ChangeColorFromPicker(){
    let color = document.getElementById("colorAccent");
    let colorHover = document.getElementById("colorHover");

    changeColor(color.value, colorHover.value);
}


function ShowPanelColor(){
    let panel = document.getElementById("color-setter");
    if(panel.style.left == "0px"){
        panel.style.left = "-100px";
    }
    else{
        panel.style.left = "0px";
    }
}

var map = L.map('map').setView([43.212601, 2.355970], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([43.212601, 2.355970]).addTo(map)
    .bindPopup('Je suis pas loin !')
    .openPopup();
  