/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

---------------------------------------------------------------------------- */

let resultado = 0;
const valor = document.querySelector('#valor');

document.querySelector('#btn_decremento')?.addEventListener('click', () => {
    valor.textContent = --resultado;
});

document.querySelector('#btn_incremento')?.addEventListener('click', () => {
    valor.textContent = ++resultado;
});
