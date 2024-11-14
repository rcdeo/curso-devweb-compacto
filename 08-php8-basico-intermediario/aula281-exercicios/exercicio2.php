<?php

/*
1. Constrói um array com todos os resultados da tabuáda dos 327.
2. Apresenta os dados do array com um ciclo foreach (apenas os valores)
*/

$resultados = [];
for ($i = 1; $i <= 10 ; $i++) {
    $resultados[] = 327 * $i;
}

?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 2</title>
</head>

<body>

    <?php foreach ($resultados as $resultado): ?>
    <p><?= $resultado ?></p>
    <?php endforeach; ?>

</body>

</html>