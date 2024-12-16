const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-check input");

let allKeys = [],
audio = new Audio("./src/sounds/a.wav"); // por padrão, audio src e o "a"

const playAudio =(key) => {
    audio.src = `./src/sounds/${key}.wav` // rodando audio do src atravez da tecla precionada
    audio.play(); // rodando audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`); // pegando a tecla clicada
    clickedKey.classList.add("active"); // adicionando a classe "active" para o elemento clicado
    setTimeout(() => { // removendo a classe "active" do elemento clicado apos 150ms
        clickedKey.classList.remove("active")
    }, 150);
};

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); // adicionando o valor data-key para o array allKeys
    // chamada da função playAudio passando o valor de data-key como argumento
    key.addEventListener("click", () => playAudio(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value; // passando a area do valor do slider como um volume de audio
}

const showHideKeys = () => {
    // transforma a classe hide em um interruptor em cada tecla ao clicar no checkbox
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) {
        playAudio(e.key);
    }
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);