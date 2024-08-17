// EVENT HANDLERS

function alterar_texto(e) {
    document.querySelector('h1').textContent = 'Novo texto do título';
    console.log(e.target);
}
