<?php

/*
Dada a coleção de nomes, apresenta toda a coleção excepto o nome cujo índice = 4 (maria)
*/

$nomes = ['joao', 'ana', 'carlos', 'marco', 'maria', 'silvia', 'helena', 'ricardo'];

?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 3</title>
</head>

<body>

    <?php foreach ($nomes as $key => $nome) : ?>
    <?php if ($key == 4) {
        continue;
    } ?>
    <p><?= $nome ?></p>
    <?php endforeach; ?>

</body>

</html>