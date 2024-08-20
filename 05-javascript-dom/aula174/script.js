// INTRODUÇÃO À VALIDAÇÃO DE FORMULÁRIOS
document.formulario_login.addEventListener('submit', (event) => {
    // buscar valores dos campos
    let usuario = event.target.usuario.value;
    let senha = event.target.senha.value;
    let submit = true;

    // validar usuario
    if (usuario === '') {
        submit = false;

        // erro
        let tmp = document.querySelector('input[name="usuario"]');
        tmp?.insertAdjacentHTML('afterend', '<span class="error">O usuário é obrigatório.</span>');
    }

    // validar senha
    if (senha === '') {
        submit = false;

        // erro
        let tmp = document.querySelector('input[name="senha"]');
        tmp?.insertAdjacentHTML('afterend', '<span class="error">A senha é obrigatória.</span>');
    }

    // verificar se o formulário pode ser enviado
    if (!submit) {
        event.preventDefault();

        setTimeout(() => {
            document.querySelectorAll('.error').forEach((e) => e.remove());
        }, 2000);
    }
});
