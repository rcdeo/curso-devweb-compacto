<?php

// CICLOS

// -------------------------------
// DO WHILE

// A diferença para o ciclo WHILE é que,
// neste caso, o bloco é executado pelo menos uma vez
// e só depois é avaliada a condição

$valor = 11;

do {
    echo "3 x $valor = " . $valor * 3 . '<br>';
    $valor++;
} while ($valor <= 10);

// se o valor for 11, ainda assim, o bloco é executado uma vez.
