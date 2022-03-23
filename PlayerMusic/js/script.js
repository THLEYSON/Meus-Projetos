let musicas = [
    { titulo: 'ESPELHO DO PODER - DVD Livre Pra Voar', Artista: 'Conde Só Brega', src: 'music/ESPELHO DO PODER - DVD Livre Pra Voar.mp3', img: 'img/Conde.jpg'},
    {titulo: 'Tiffany', Artista: 'MD Chefe', src: 'music/Md Chefe.mp3', img: 'img/md chefe.jpg'},
    {titulo: 'Bendito', Artista: 'NGC Daddy', src: 'music/Ngc daddy.mp3', img: 'img/ngc daddy.jpg'},
    {titulo: 'Um Minuto Para o Fim do Mundo', Artista: 'CPM 22', src: 'music/CPM 22 - Um Minuto Para o Fim do Mundo (Ao Vivo no Rock in Rio) (128 kbps).mp3', img: 'img/cpm22.jpg'},
    {titulo: 'Dias Atrás (Ao Vivo no Rock in Rio)', Artista: 'CPM 22', src: 'music/cpm22.mp3', img: 'img/cpm22.jpg'}
]


let musica = document.querySelector('audio');

let duracaoMusica = document.querySelector('.fim');

let imagen = document.querySelector('img');

let nomeMusica = document.querySelector('.descricao h2');

let nomeArtista = document.querySelector('.descricao i');

let indexMusica = 0;

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

//eventos do script
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('#botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

window.onload = duration;

document.querySelector('.anterior'). addEventListener('click', () => {
    indexMusica --;
    if(indexMusica < 0){
        indexMusica = 5;
    }
    redenrizarMusica (indexMusica);
});

document.querySelector('.proxima'). addEventListener('click', () => {
    indexMusica ++;
    if(indexMusica > 5){
        indexMusica = 0;
    }
    redenrizarMusica (indexMusica);
});


//funcoes

function redenrizarMusica(index){
    musica.setAttribute('src', musicas [index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].Artista;
        imagen.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });

}
function tocarMusica() {
    musica.play();
    document.querySelector('#botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica() {
    musica.pause();
    document.querySelector('#botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}
function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));

}
function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;
}
function duration() {
    durationMusic.textContent = secondsForMinutes(Math.floor(currentSong.duration));
}


