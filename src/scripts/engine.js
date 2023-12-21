const pianoKeys = document.querySelectorAll(".piano-keys .key");
let tune = new Audio();

pianoKeys.forEach(key => {
    key.addEventListener('mousedown', () => playTune(key.dataset.key));
});

const playTune = (key) => {
    tune.src = `src/tunes/${key}.wav`;
    console.log(tune);
    tune.play();
}

document.addEventListener('keydown', (e) => {
    playTune(e.key);
});