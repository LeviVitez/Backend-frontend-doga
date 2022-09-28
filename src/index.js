import './style.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
function kepUrl() {
    document.getElementById("kep").style.width = document.getElementById("kepszelesseg").value + 'px';
    document.getElementById("kep").style.border = document.getElementById("kepkeretvastagsag").value + 'px solid';
    document.getElementById("kep").style.borderColor = document.getElementById("kepkeretszine").value;
 }

 
document.getElementById("darkMode").addEventListener("click", darkMode);
document.getElementById("darkMode").addEventListener("click", darkMode);
document.getElementById("kepszelesseg").addEventListener("keyup", kepUrl);
document.getElementById("kepkeretvastagsag").addEventListener("keyup", kepUrl);
document.getElementById("kepkeretszine").addEventListener("keyup", kepUrl);
document.addEventListener('DOMContentLoaded', init)