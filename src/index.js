import './style.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

let url;
let kepszelesseg;
let kepkeretvastagsag;
let kepkeretszine;

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
function kepUrl() {
   // var element = document.img;
   // document.getElementById("kep").src = "hackanm.gif";
    document.getElementById("kep").style.width = document.getElementById("szelesseg").value + 'px';
    document.getElementById("kep").style.border = document.getElementById("keret").value + 'px solid';
    document.getElementById("kep").style.borderColor = document.getElementById("szin").value;
 }



 
document.getElementById("darkMode").addEventListener("click", darkMode);
document.getElementById("darkMode").addEventListener("click", darkMode);
document.getElementById("szelesseg").addEventListener("keyup", kepUrl);
document.getElementById("keret").addEventListener("keyup", kepUrl);
document.getElementById("szin").addEventListener("keyup", kepUrl);
document.addEventListener('DOMContentLoaded', init)