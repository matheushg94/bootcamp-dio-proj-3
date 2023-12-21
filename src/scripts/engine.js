const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume input");
const keyLabelInput = document.querySelector(".key-labels input");

const mapedKeys = [];
const tune = new Audio();

tune.volume = '0.5';

const pressKey = (key) => {
    tune.src = `src/tunes/${key}.wav`;
    tune.play();

    const pressedKey = document.querySelector(`[data-key="${key}"]`);
    pressedKey.classList.add("active");
    setTimeout(() => pressedKey.classList.remove("active"), 150);
}

const handleVolume = (e) => {
    tune.volume = e.target.value;
}

const toggleKeyLabels = () => {
    pianoKeys.forEach(key => key.classList.toggle('hide-label'));
}

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

volumeSlider.addEventListener('input', handleVolume);

keyLabelInput.addEventListener('click', toggleKeyLabels);

pianoKeys.forEach(key => {
    key.addEventListener('mousedown', () => pressKey(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});