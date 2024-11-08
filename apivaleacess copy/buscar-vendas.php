<?php 

include_once('conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

//NÃO ESQUEÇA DE ALTERAR AQUI O NOME DA SUA TABELA
$query = $pdo->prepare("
    SELECT comercio.*, 
           (AVG(avaliacao.avalia_visual + avaliacao.avalia_fisica + avaliacao.avalia_auditiva) / 3) AS media_total 
    FROM comercio 
    LEFT JOIN avaliacao ON comercio.comercio_id = avaliacao.comercio_id 
    WHERE comercio.categoria = 'Vendas'
    GROUP BY comercio.comercio_id;
");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

$dados = []; // Inicializa o array $dados

for ($i=0; $i < count($res); $i++) { 
    $dados[] = array(
        //COLOQUE AQUI OS ATRIBUTOS DA SUA TABELA
        'cnpj' => $res[$i]['cnpj'],
        'comercio_id' => $res[$i]['comercio_id'],
        'nome' => $res[$i]['nome'],              
        'cidade' => $res[$i]['cidade'],              
        'rua' => $res[$i]['rua'],              
        'numero' => $res[$i]['numero'],              
        'categoria' => $res[$i]['categoria'],
        'media_total' => number_format($res[$i]['media_total'], 1, ',', '.') // Formata para uma casa decimal
    );
}

if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'result'=>$dados));
} else {
    $result = json_encode(array('success'=>false, 'result'=>'0'));
}

echo $result;

?>
