<?php 

include_once('conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

//NÃO ESQUEÇA DE ALTERAR AQUI O NOME DA SUA TABELA
$query = $pdo->prepare("SELECT * from comercio where categoria = 'alimenticio'");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {  }      

    $dados[] = array(
        //COLOQUE AQUI OS ATRIBUTOS DA SUA TABELA
        'cnpj' => $res[$i]['cnpj'],
        'comercio_id' => $res[$i]['comercio_id'],
        'nome' => $res[$i]['nome'],              
        'cidade' => $res[$i]['cidade'],              
        'rua' => $res[$i]['rua'],              
        'numero' => $res[$i]['numero'],              
        'categoria' => $res[$i]['categoria']              
    );

    }

   if(count($res) > 0){
           $result = json_encode(array('success'=>true, 'result'=>$dados));

       }else{
           $result = json_encode(array('success'=>false, 'result'=>'0'));

       }

echo $result;

?>