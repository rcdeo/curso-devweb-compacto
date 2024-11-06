<?php

// CICLO FOREACH

/*
No cenário de PHP embebido em HTML
*/

$nomes = ['joao', 'ana', 'carlos', 'francisco', 'maria'];

?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>aula279</title>
</head>

<body>

    <div>

        <?php foreach($nomes as $nome): ?>
        <h2><?= $nome ?></h2>
        <?php endforeach; ?>

    </div>

</body>

</html>