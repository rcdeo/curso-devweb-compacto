/* 
OBJETIVO:
Ao clicar no botão, alterar a cor de fundo da caixa para aquamarine,
apresentar o texto 'clique' na consola e
remover o evento click do botão
*/

let cx = document.querySelector('.caixa');
let b = document.querySelector('button');

function executar(event) {
    cx?.classList.add('cor-fundo-caixa');
    console.log('clique');
    b?.removeEventListener('click', executar);
}

b?.addEventListener('click', executar);
