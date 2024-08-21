/* ----------------------------------------------------------------------------

Exercício: 010
Enunciado:
    Existem 4 áreas a cinza.
    Ao clicar numa das áreas a área clicada deve ficar com fundo
    amarelo e as restantes a vermelho.
---------------------------------------------------------------------------- */
// document.querySelectorAll('[id^="box"]').forEach((box) => {
//     box.addEventListener('click', (box) => {
//         document.querySelectorAll('[id^="box"]').forEach((box) => {
//             box.style.backgroundColor = 'red';
//         });
//         box.target.style.backgroundColor = 'yellow';
//     });
// });

const boxes = document.querySelectorAll('[id^="box"]');

boxes.forEach((box) => {
    box.addEventListener('click', (box) => {
        allRedBoxes();
        box.target.style.backgroundColor = 'yellow';
    });
});

function allRedBoxes() {
    boxes.forEach((box) => {
        box.style.backgroundColor = 'red';
    });
}
