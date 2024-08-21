/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    Existem 3 botões no layout. Cada botão está associado a uma área de
    informação. O objetivo é criar a lógica que permite apresentar cada
    uma das áreas de acordo com o botão clicado.
    A área de informação um deve estar visível por padrão.

    NOTA: quando uma área é apresentada, as outras devem ficar escondidas
---------------------------------------------------------------------------- */

// let tab1 = document.querySelector('#tab1');
// let tab2 = document.querySelector('#tab2');
// let tab3 = document.querySelector('#tab3');

// let info1 = document.querySelector('#info1');
// let info2 = document.querySelector('#info2');
// let info3 = document.querySelector('#info3');

// info1.style.backgroundColor = 'blue';
// info2.style.backgroundColor = 'green';
// info3.style.backgroundColor = 'purple';

// info1.style.display = 'block';
// info2.style.display = 'none';
// info3.style.display = 'none';

// tab1.addEventListener('click', () => {
//     info1.style.display = 'block';
//     info2.style.display = 'none';
//     info3.style.display = 'none';
// });

// tab2.addEventListener('click', () => {
//     info1.style.display = 'none';
//     info2.style.display = 'block';
//     info3.style.display = 'none';
// });

// tab3.addEventListener('click', () => {
//     info2.style.display = 'none';
//     info1.style.display = 'none';
//     info3.style.display = 'block';
// });

function hide() {
    document.querySelectorAll('[id^="info"]').forEach((el) => {
        el.classList.add('d-none');
    });
}

function show(id) {
    document.querySelector('#info' + id).classList.remove('d-none');
}

document.querySelectorAll('[id^="tab"]').forEach((btn) => {
    btn.addEventListener('click', (btn) => {
        hide();
        show(btn.target.id.substring(3));
    });
});

hide();
show(1);
