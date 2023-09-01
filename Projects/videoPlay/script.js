let myVideoE1 = document.getElementById("video1");
let playPauseButton = document.getElementById("play-pause-button");

playPauseButton.addEventListener("click", function() {
    if (myVideoE1.paused) {
        myVideoE1.play();
        playPauseButton.textContent = "Pause";
    } else {
        myVideoE1.pause();
        playPauseButton.textContent = "Play";
    }
});
