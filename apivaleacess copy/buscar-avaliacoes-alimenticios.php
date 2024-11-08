<?php 

include_once('conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

//NÃO ESQUEÇA DE ALTERAR AQUI O NOME DA SUA TABELA
$query = $pdo->prepare("SELECT * from avaliacao");


$querya
// uima query pra cada avalia, ai dps disso, usa o avg / media res i media

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {  }      

    $dados[] = array(
        //COLOQUE AQUI OS ATRIBUTOS DA SUA TABELA
        'avalia_visual' => $res[$i]['avalia_visual'],
        'avalia_fisica' => $res[$i]['avalia_fisica'],
        'avalia_auditiva' => $res[$i]['avalia_auditiva'],              
        'avalia_id' => $res[$i]['avalia_id'],              
        'feedback' => $res[$i]['feedback'],              
        'usuario_id' => $res[$i]['usuario_id'],           
        'comercio_id' => $res[$i]['comercio_id'],             
    );

    }

   if(count($res) > 0){
           $result = json_encode(array('success'=>true, 'result'=>$dados));

       }else{
           $result = json_encode(array('success'=>false, 'result'=>'0'));

       }

echo $result;

?>