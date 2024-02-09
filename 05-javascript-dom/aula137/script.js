var nome          = "João Ribeiro";  // string
var idade         = 21;              // number
var administrador = false;           // boolean

console.log(nome);

var cidade;
cidade = "Lisboa";

var valor1  = 100,
    nome2   = "Ana",
    apelido = "Silva";

// var  : escopo global ou funcao e podem ser atualizadas e declaradas novamente dentro de seu escopo.
// let  : escopo de bloco e podem ser atualizadas, mas nao podem ser declaradas novamente.
// const: escopo de bloco e nao podem ser atualizadas e nem declaradas novamente.

let   texto = "texto";
const pi    = 3.14;

texto = "novo texto";
pi    = 25; // Error: Assignment to constant variable.

/**
 *  REGRAS P/VARIAVEIS
 *  1) Os nomes devem comecar sempre por uma letra, um _underscore ou um $dollar sign.
 *  2) Os nomes nunca podem comecar por um numero.
 *  3) Os nomes so podem conter letras maiusculas, minusculas, o _underscore e algarismos.
 *  4) O nome de uma variavel nunca pode conter espacos.
 *  5) O nome nao pode ser igual a uma palavra reservada do JavaScript.
 */

var idade = 10;
var IDADE = 20; // sao duas variaveis, idade e IDADE