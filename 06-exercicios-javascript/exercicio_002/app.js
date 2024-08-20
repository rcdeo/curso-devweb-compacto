/* ----------------------------------------------------------------------------

Exercício: 002
Enunciado: CONTADOR COM INTERVALO DE VALORES
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    O valor nunca poderá ser inferior a -10 ou superior a 10.

---------------------------------------------------------------------------- */

let resultado = 0;
const valor = document.querySelector('#valor');

document.querySelector('#btn_decremento')?.addEventListener('click', () => {
    if (resultado == -10) return;
    valor.textContent = --resultado;
});

document.querySelector('#btn_incremento')?.addEventListener('click', () => {
    if (resultado == 10) return;
    valor.textContent = ++resultado;
});
