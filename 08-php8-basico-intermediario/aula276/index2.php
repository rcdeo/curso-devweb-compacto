<?php

// OPERADOR TERNÁRIO

$erro = true;

?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>aula276</title>
    <style>
        .erro {
            background-color: red;
            color: white;
        }
    </style>
</head>

<body>

    <div
        class="<?= $erro ? 'erro' : '' ?>">
        RESULTADO
    </div>

    <!-- 

    O mesmo que:
    <div class="erro">RESULTADO</div>

    -->

</body>

</html>