// APLICAR ESTILOS INLINE COM JAVASCRIPT

// let el = document.querySelector('h1');
// el.style.color = 'rgb(255,0,0)';
// el.style.backgroundColor = 'yellow';

let el = document.querySelector('p');
const estilos = window.getComputedStyle(el);
console.log(estilos.getPropertyValue('color'));
console.log(estilos.getPropertyValue('font-size'));
