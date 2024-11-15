<?php

// FUNÇÕES

apresentar();
executar();

function apresentar()
{
    echo 'Função apresentar<br>';
}

function executar()
{
    echo 'Função executar<br>';
}

// --------------------------------
for ($i = 0; $i <= 10; $i++) {
    funcao_teste();
}

function funcao_teste()
{
    echo 'Execução da função_teste<br>';
}

/*
Os nomes das funções devem começar por uma letra minúscula ou maiúscula,
seguido de letras, algarismos e underscores.

Os nomes das funções são case insensitive

apresentar() é igual a APREENTAR()

Não podem existir duas funções com o mesmo nome dentro do mesmo namespace

(Falaremos de namespaces noutro módulo)
*/
