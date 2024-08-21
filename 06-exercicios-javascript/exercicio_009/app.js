/* ----------------------------------------------------------------------------

Exercício: 009
Enunciado:
    Exercício simples: O texto é branco e o elemento range vai servir para
    alterar a transparência do texto. Do valor mais opaco à esquerda, até
    à transparência total à direita.

    NOTA: Deves definir os valores do range.
---------------------------------------------------------------------------- */
// let range = document.querySelector('#range');
// range.setAttribute('min', 0);
// range.setAttribute('max', 100);
// range.value = 0;
// range.addEventListener('input', (e) => {
//     document.querySelector('h3').style.opacity = 1 - e.target.value / 100;
// });

const range = document.querySelector('#range');
const texto = document.querySelector('h3');
range.setAttribute('min', 0);
range.setAttribute('max', 100);
range.value = 0;
range.addEventListener('input', (e) => {
    texto.style.opacity = 1 - e.target.value / 100;
});
