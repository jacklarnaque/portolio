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
  .typeString('<span style="color: #777BB3;">WordPress</span>')
  .pauseFor(1000)
  .deleteChars(9)
  .typeString('<span style="color: #fff;">React</span>')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('<span style="color: #9c113d;">English</span>')
  .pauseFor(1000)
  .deleteChars(7)
  .typeString('<span style="color: #240a88;">French</span>')
  .pauseFor(1000)
  .start();

var r = document.querySelector('body');

var map = L.map('map').setView([51.589605, -0.111379], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.589605, -0.111379]).addTo(map)
    .bindPopup('Im close !')
    .openPopup();
  