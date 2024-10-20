<?php

// DATA TYPES - tipos de dados

// As variáveis (assim como as constantes), guarda valores de um determinado tipo.
// No PHP as variáveis não são tipadas.
// Isso vai ser mais complexo de processar e pode gerar erros.

// ------------------------------------------------
// TIPO DE DADOS ESCALARES

// bool / booleano - aceita valores verdadeiro ou falso (true | false)
$apresentar_dados = true;

// int / inteiros - são valores numéricos sem casas decimais
$valor = 0;
$valor1 = 12512765;
$valor2 = -34676;

// float - valores flutuantes (números com casas decimais)
$float1 = 1.5;
$float2 = 2356.345;
$float3 = 0.0035;
$float4 = -0.4;

// string - valores alfanuméricos (letras, palavras, frases, textos, ...)
$nome = 'joao';
$apelido = 'ribeiro';
$letra_escolhida = 'A';
$frase_do_dia = 'Lorem ipsum dolor sit amet.';

// ------------------------------------------------

echo $apresentar_dados . '<br>';    // caso específico dos booleanos
echo '-------------------' . '<br>';
echo $valor . '<br>';
echo $valor1 . '<br>';
echo $valor2 . '<br>';
echo '-------------------' . '<br>';
echo $float1 . '<br>';
echo $float2 . '<br>';
echo $float3 . '<br>';
echo $float4 . '<br>';
echo '-------------------' . '<br>';
echo $nome . '<br>';
echo $apelido . '<br>';
echo $letra_escolhida . '<br>';
echo $frase_do_dia . '<br>';
echo '-------------------' . '<br>';

// apresentar os tipos de cada variável
echo gettype($apresentar_dados) . '<br>'; // boolean
echo gettype($valor) . '<br>'; // integer
echo gettype($float1) . '<br>'; // double
echo gettype($nome) . '<br>'; // string

echo '-------------------' . '<br>';
// apresentar informações da variável
var_dump($apresentar_dados); // bool(true)
echo '<br>';
var_dump($valor1); // int(12512765)
echo '<br>';
var_dump($nome); // string(4) "joao"
