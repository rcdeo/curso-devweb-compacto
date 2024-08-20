// INTRODUÇÃO À VALIDAÇÃO DE FORMULÁRIOS

// usuario
document.querySelector('input[name="usuario"]')?.addEventListener('keyup', () => {
    document.querySelector('input[name="usuario"] + span')?.remove();
    // if (document.querySelector('input[name="usuario"] + span') !== null) {
    //     document.querySelector('input[name="usuario"] + span').remove();
    // }
});

// senha
document.querySelector('input[name="senha"]')?.addEventListener('keyup', () => {
    document.querySelector('input[name="senha"] + span')?.remove();
    // if (document.querySelector('input[name="senha"] + span') !== null) {
    //     document.querySelector('input[name="senha"] + span').remove();
    // }
});

document.formulario_login.addEventListener('submit', (event) => {
    // buscar os valores dos campos
    let usuario = event.target.usuario.value;
    let senha = event.target.senha.value;
    let submit = true;

    // remover erros que eventualmente possam existir (anteriores)
    document.querySelectorAll('.error').forEach((e) => e.remove());

    // validar se usuário está preenchido
    if (usuario === '') {
        submit = false;

        // erro
        let tmp = document.querySelector('input[name="usuario"]');
        tmp?.insertAdjacentHTML('afterend', '<span class="error">O usuário é de preenchimento obrigatório.</span>');
    }

    // validar se senha está preenchida
    if (senha === '') {
        submit = false;

        // erro
        let tmp = document.querySelector('input[name="senha"]');
        tmp?.insertAdjacentHTML('afterend', '<span class="error">A senha é de preenchimento obrigatório.</span>');
    }

    // verificar se o formulário pode ser enviado
    if (!submit) {
        event.preventDefault();
    }
});
