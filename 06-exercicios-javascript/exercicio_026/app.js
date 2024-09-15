/* ----------------------------------------------------------------------------

Exercício: 026
Enunciado:
    Existem 4 inputs de texto, cada um com um id diferente.
    Cada input só pode receber um caracter.
    O focus deve iniciar no primeiro input.
    Ao digitar um algarismo, o focus deve ir para o próximo input.
    Ao digitar o último algarismo, o focus deve ir para o primeiro input.
    Se todos os inputs estiverem preenchidos, o sistema deve verificar se o
    número constituído pela concatenacao dos 4 algarismos é igual a 1234.
    Se for igual, deve aparecer uma mensagem de sucesso, caso contrário,
    a mensagem de sucesso deve estar escondida.
---------------------------------------------------------------------------- */
const inputs = document.querySelectorAll('input[type="text"]');
const success = document.querySelector('.text-success');
inputs[0].focus();
success.classList.add('d-none');

let index = 0;
inputs.forEach((input) => {
    input.setAttribute('maxlength', 1);
    input.addEventListener('input', () => {
        if (input.value != '') {
            index++;
            if (index == 4) index = 0;
        }
        inputs[index].focus();
        validar();
    });
});

function validar() {
    let number = '';
    inputs.forEach((input) => {
        number += input.value;
    });
    if (number == '1234') {
        success.classList.remove('d-none');
    } else {
        success.classList.add('d-none');
    }
}
