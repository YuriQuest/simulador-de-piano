const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("./src/sounds/a.wav"); // por padrão, audio src e o "a"

const playAudio =(key) => {
    audio.src = `./src/sounds/${key}.wav` // rodando audio do src atravez da tecla precionada
    audio.play(); // rodando audio
};

pianoKeys.forEach(key => {
    // chamada da função playAudio passando o valor de data-key como argumento
    key.addEventListener("click", () => playAudio(key.dataset.key));
});

