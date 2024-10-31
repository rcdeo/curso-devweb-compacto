<?php

// vejamos como adicionar condições de PHP dentro do HTML

$valor = 10;

?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>aula272</title>
</head>

<body>

    <?php if ($valor == 10) : ?>
    <p>Valor é igual a 10!</p>
    <?php else : ?>
    <p>Valor é diferente de 10</p>
    <?php endif; ?>

    <!-- e com o elseif -->

    <?php if ($valor > 100) : ?>
    <p>Valor é maior que 100!</p>
    <?php elseif ($valor > 50) : ?>
    <p>Valor é maior que 50!</p>
    <?php elseif ($valor > 10) : ?>
    <p>Valor é maior que 10!</p>
    <?php else : ?>
    <p>Valor é diferente de todas as outras condições!</p>
    <?php endif; ?>

</body>

</html>