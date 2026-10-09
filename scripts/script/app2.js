const listaDeTeclas = document.querySelectorAll('.tecla');
let audioAtual = "";

function tocarSom(idElementoSom) {
    const elemento = document.querySelector(idElementoSom);

    if (elemento && elemento.localName === 'audio') {
        if (audioAtual) {
            audioAtual.pause();
            audioAtual.currentTime = 0;
        }

        elemento.play();
        audioAtual = elemento;
    } else {
        console.warn(`Elemento de áudio não encontrado: ${idElementoSom}`);
    }
}

listaDeTeclas.forEach((tecla) => {
    const classeInstrumento = tecla.classList[1]; 
    const nomeSom = classeInstrumento ? classeInstrumento.replace('tecla_', '') : '';
    const idAudio = `#som_tecla_${nomeSom}`;

    tecla.onclick = function () {
        tocarSom(idAudio);
    };

    tecla.onkeydown = function (event) {
        if (
            event.code === 'Enter' ||
            event.code === 'Space' ||
            event.code === 'NumpadEnter'
        ) {
            tecla.classList.add('ativa');
            tocarSom(idAudio);
        }
    };

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    };
});