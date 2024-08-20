// este código vai ser executado antes dos elementos do body existirem
// document.querySelector('button').addEventListener('click', () => {
//     document.querySelector('h1').innerText = 'Texto do título alterado';
// });

// console.log(document.readyState); // loading

// interactive: o documento foi carregado e analisado, mas sub-recursos como
// imagens, folhas de estilo e quadros ainda estão sendo carregados.

// document.addEventListener('readystatechange', (event) => {
//     // console.log(event.target.readyState); // interactive e complete
//     if (event.target.readyState === 'complete') {
//         document.querySelector('button').addEventListener('click', () => {
//             document.querySelector('h1').innerText = 'Texto do título alterado';
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', () => {
        document.querySelector('h1').innerText = 'Texto do título alterado';
    });
});
