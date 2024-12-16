const pianoKeys = document.querySelectorAll(".piano-keys .key");

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

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) {
        playAudio(e.key);
    }
}

document.addEventListener("keydown", pressedKey);