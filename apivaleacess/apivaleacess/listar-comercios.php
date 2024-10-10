<?php 

// listar_comercios.php
require_once("conexao.php");

$query = "
    SELECT 
        c.comercio_id,
        c.nome,
        c.categoria,
        c.imagemp,
        AVG(a.avalia_visual + a.avalia_fisica + a.avalia_auditiva) / 3 AS media_avaliacao
    FROM 
        comercio c
    LEFT JOIN 
        avaliacao a ON c.comercio_id = a.comercio_id
    GROUP BY 
        c.comercio_id
";

$res = $pdo->query($query);
$dados = $res->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($dados);


 ?>