<div id="liveClock" style="font-size: 22px; font-weight: bold; text-align: center; padding: 15px; background-color: #f1f1f1; border-radius: 5px; margin: 10px 0;"></div>

<script>
function displayTime() {
    const time = new Date();
    document.getElementById("liveClock").innerText = time.toLocaleTimeString();
}
setInterval(displayTime, 1000);
window.onload = displayTime;
</script>
