var toggle = document.getElementById('titlescreen_audio_audio'); toggle.muted = !toggle.muted;

window.onload = function() {
    document.getElementById("titlescreen_audio_audio").play();
}
