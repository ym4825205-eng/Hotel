function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks) {
        navLinks.classList.toggle("active");
    }
}

function updateClock() {
    var now = new Date();
    var timeString = now.toLocaleTimeString();
    var clockElement = document.getElementById("myClock");
    if (clockElement) {
        clockElement.innerText = "الوقت: " + timeString;
    }
}
setInterval(updateClock, 1000);
updateClock();
