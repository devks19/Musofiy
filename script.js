// window.addEventListener('load', function() {
//     const audio = document.getElementById('music-player');
//     const playPauseButton = document.getElementById('play-pause');
//     const albumImage = document.getElementById('rotatingImage');

//     playPauseButton.addEventListener('click', function() {
//         if (audio.paused) {
//             audio.play();
//             playPauseButton.classList.remove('play');
//             playPauseButton.classList.add('pause');
//             albumImage.classList.remove('active'); // Add the "active" class
//         } else {
//             audio.pause();
//             playPauseButton.classList.remove('pause');
//             playPauseButton.classList.add('play');
//             albumImage.classList.add('active'); // Remove the "active" class
//         }
//     });




window.addEventListener('load', function() {
    const audio = document.getElementById('music-player');
    const playPauseButton = document.getElementById('play-pause');
    const discImage = document.getElementById('rotatingImage');
    const seekBar = document.getElementById('seek-bar');
    const volumeControl = document.getElementById('volume-control');



    playPauseButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseButton.classList.remove('play');
            playPauseButton.classList.add('pause');
            discImage.classList.add('disc'); // Add the "rotating" class
        } else {
            audio.pause();
            playPauseButton.classList.remove('pause');
            playPauseButton.classList.add('play');
            discImage.classList.remove('disc'); // Remove the "rotating" class
        }
   
    });
    audio.addEventListener('timeupdate', function() {
        // Update the seek bar value as the audio plays
        seekBar.value = audio.currentTime;
        seekBar.max = audio.duration;
        });
    seekBar.addEventListener('input', function() {
        audio.currentTime = seekBar.value;
    
    
});
    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });
});
