<?php 

include_once('conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$id_usu = @$_GET['user'];

$total_alimenticios = 0;

//NÃO ESQUEÇA DE ALTERAR AQUI O NOME DA SUA TABELA
$query = $pdo->query("SELECT * from comercio where categoria = 'alimenticio' ");
$res = $query->fetchAll(PDO::FETCH_ASSOC);
$total_alimenticios = @count($res);


$result = json_encode(array('success'=>true, 
    'total_alimenticios'=>$total_alimenticios
        
));

echo $result;


