function tocaSomPom (idElementoAudio) { 
    document.querySelector(idElementoAudio).play();
}
    
const listaDeBotoes = document.querySelectorAll('tecla')

let contador = 0;

while(contador < listaDeBotoes.length){
    listaDeBotoes[contador].onclick = tocaSom;
    contador = contador + 1;
}


