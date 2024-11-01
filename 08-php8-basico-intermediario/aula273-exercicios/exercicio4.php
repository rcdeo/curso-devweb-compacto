<?php

/*
    Constrói a lógica condicional que permite apresentar apenas
    o parágrafo correspondente ao valor da variável $nome
*/

$nome = 'Ana';
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 4</title>
</head>

<body>

    <?php if ($nome == 'João') : ?>
    <p>O nome é João</p>
    <?php elseif ($nome == 'Ana') : ?>
    <p>O nome é Ana</p>
    <?php elseif ($nome == 'Carlos') : ?>
    <p>O nome é Carlos</p>
    <?php else : ?>
    <p>É um nome desconhecido</p>
    <?php endif; ?>

</body>

</html>