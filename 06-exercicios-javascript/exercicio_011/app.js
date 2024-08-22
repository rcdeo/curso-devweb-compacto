/* ----------------------------------------------------------------------------

Exercício: 011
Enunciado:
    A grelha inicial contém dezesseis imgs sem source.
    Quando clicamos numa das imgs, vamos apresentar o símbolo X (imagem)
    No clique seguinte, que só pode acontecer numa img que não tenha símbolo,
    vamos apresentar o símbolo 'O'.
---------------------------------------------------------------------------- */

let quadros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let simbolo = 'x';

document.querySelectorAll('[id^="img"]').forEach((img) => {
    img.addEventListener('click', (img) => {
        let index = img.target.id.substring(3);
        preenchimento(index);
    });
});

function preenchimento(index) {
    // verifica se o espaço vazio foi preenchido anteriormente
    if (quadros[index - 1] != 0) return;

    document.querySelector('#img' + index).setAttribute('src', './' + simbolo + '.png');
    quadros[index - 1] = 1;

    simbolo == 'x' ? (simbolo = 'o') : (simbolo = 'x');
}
