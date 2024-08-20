/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */

let resultado = 0;
const valor = document.querySelector('#valor');

document.querySelector('#btn_decremento')?.addEventListener('click', () => {
    --resultado;
    mostrarResultado();
});

document.querySelector('#btn_incremento')?.addEventListener('click', () => {
    ++resultado;
    mostrarResultado();
});

function mostrarResultado() {
    valor.textContent = resultado;

    // if (resultado === 0) valor.style.color = 'white';
    // else if (resultado > 0) valor.style.color = 'green';
    // else valor.style.color = 'red';

    valor.style.color = resultado == 0 ? 'white' : resultado < 0 ? 'red' : 'green';
}
