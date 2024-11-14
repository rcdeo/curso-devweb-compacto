<?php

/*
Constrói uma apresentação em HTML que mostra a tabuáda dos 5.
Exemplo:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50
*/

// $valor = 1;
// while ($valor <= 10) {
//     echo "5 x $valor = " . 5 * $valor . '<br>';
//     $valor++;
// }

?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 1</title>
</head>

<body>

    <?php for ($i = 0; $i <= 10 ; $i++) : ?>
    <p> 5 x <?= $i ?> =
        <?= 5 * $i ?>
    </p>
    <?php endfor ?>

</body>

</html>