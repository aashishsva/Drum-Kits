let crash = document.querySelector(".crash");
let kick = document.querySelector(".kick");
let snare = document.querySelector(".snare");
let tom = document.querySelector(".tom");

crash.addEventListener("click", () => {
    let audioEl = document.createElement('audio');
    audioEl.src = 'crash.mp3';
    crash.appendChild(audioEl);
    audioEl.play();
});

kick.addEventListener("click", () => {
    let audioEl = document.createElement('audio');
    audioEl.src = 'kick.mp3';
    kick.appendChild(audioEl);
    audioEl.play();
});

snare.addEventListener("click", () => {
    let audioEl = document.createElement('audio');
    audioEl.src = 'snare.mp3';
    snare.appendChild(audioEl);
    audioEl.play();
});

tom.addEventListener("click", () => {
    let audioEl = document.createElement('audio');
    audioEl.src = 'tom.mp3';
    tom.appendChild(audioEl);
    audioEl.play();
});
