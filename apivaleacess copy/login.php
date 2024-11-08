<?php 
require_once("conexao.php");

$postjson = json_decode(file_get_contents('php://input'), true);
$email = @$postjson['email'];
$senha = @$postjson['senha'];

// Log para verificar os dados recebidos
file_put_contents('debug.log', print_r($postjson, true), FILE_APPEND);

// Prepare a consulta
$res = $pdo->prepare("SELECT * FROM usuario WHERE email = :email AND senha = :senha");    
$res->bindValue(":email", $email);
$res->bindValue(":senha", $senha);

if ($res->execute()) {
    if ($res->rowCount() > 0) {
        $user = $res->fetch(PDO::FETCH_ASSOC);
        $result = json_encode(array('sucesso' => true, 'result' => [$user]));
    } else {
        $result = json_encode(array('sucesso' => false, 'mensagem' => 'Dados Incorretos!'));
    }
} else {
    // Log de erro em caso de falha na consulta
    file_put_contents('debug.log', print_r($res->errorInfo(), true), FILE_APPEND);
    $result = json_encode(array('sucesso' => false, 'mensagem' => 'Erro ao executar a consulta!'));
}

echo $result;
?>
