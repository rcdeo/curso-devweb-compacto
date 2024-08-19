/* 
OBJETIVO:
Apresentar 25 caixas em stack vertical
com gradação de cores vermelho, verde ou azul
com variação do valor RGB em 10 pontos
*/

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (event) => {
        excluir_elementos();
        for (let i = 0; i <= 250; i += 10) {
            let tmp = document.createElement('div');
            tmp.classList.add('caixa');
            let id = event.target.id;
            if (id === 'btn_vermelho') {
                tmp.style.backgroundColor = `rgb(${i},0,0)`;
            } else if (id === 'btn_verde') {
                tmp.style.backgroundColor = `rgb(0,${i},0)`;
            } else {
                tmp.style.backgroundColor = `rgb(0,0,${i})`;
            }
            document.body.appendChild(tmp);
        }
    });
});

function excluir_elementos() {
    document.querySelectorAll('.caixa').forEach((e) => e.remove());
}
