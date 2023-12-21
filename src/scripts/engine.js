const pianoKeys = document.querySelectorAll(".piano-keys .key");
let tune = new Audio();
const mapedKeys = [];

const pressKey = (key) => {
    tune.src = `src/tunes/${key}.wav`;
    tune.play();

    const pressedKey = document.querySelector(`[data-key="${key}"]`);
    pressedKey.classList.add("active");
    setTimeout(() => pressedKey.classList.remove("active"), 150);
}

pianoKeys.forEach(key => {
    key.addEventListener('mousedown', () => pressKey(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener('keydown', (e) => {
    /* mapedKeys.forEach(key => {
        if (key === e.key) {
            pressKey(e.key);
        }
    }) */

    if (mapedKeys.includes(e.key)) {
        pressKey(e.key);
    }
});