var toggle = document.getElementById('my_audio'); toggle.muted = !toggle.muted;
window.onload = function() {
    document.getElementById("my_audio").play();
}
