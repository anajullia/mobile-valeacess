<?php 
require_once("conexao.php");
$tabela = 'usuario';

$postjson = json_decode(file_get_contents('php://input'), true);

$cpf = @$postjson['cpf'];
$nome = @$postjson['nome'];
$deficiencia = @$postjson['deficiencia'];
$email = @$postjson['email'];
$senha = @$postjson['senha'];

// Log para verificar os dados recebidos
file_put_contents('debug.log', print_r($postjson, true), FILE_APPEND);

$res = $pdo->prepare("INSERT INTO $tabela SET cpf = :cpf, nome = :nome, deficiencia = :deficiencia, email = :email, senha = :senha");    

$res->bindValue(":cpf", "$cpf");
$res->bindValue(":nome", "$nome");
$res->bindValue(":deficiencia", "$deficiencia");
$res->bindValue(":email", "$email");
$res->bindValue(":senha", "$senha");

if ($res->execute()) {
    $result = json_encode(array('mensagem' => 'Salvo com sucesso!', 'sucesso' => true));
} else {
    // Log de erro em caso de falha na inserção
    file_put_contents('debug.log', print_r($res->errorInfo(), true), FILE_APPEND);
    $result = json_encode(array('mensagem' => 'Erro ao salvar!', 'sucesso' => false));
}

echo $result;


?>


