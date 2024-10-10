<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once("conexao.php");
$tabela = 'avaliacao';

$postjson = json_decode(file_get_contents('php://input'), true);

// Captura os dados da denúncia e do usuário
$avalia_visual = @$postjson['avalia_visual'];
$avalia_fisica = @$postjson['avalia_fisica'];
$avalia_auditiva = @$postjson['avalia_auditiva'];
$feedback = @$postjson['feedback'];
$usuario_id = @$postjson['usuario_id']; // Captura o ID do usuário

error_log("Dados recebidos: " . json_encode($postjson)); // Log dos dados recebidos

// Prepara a query para inserir a denúncia
$pdo->query("SELECT 1"); // Test the connection
$res = $pdo->prepare("INSERT INTO $tabela (avalia_visual, avalia_fisica, avalia_auditiva, feedback, usuario_id) VALUES (:avalia_visual, :avalia_fisica, :avalia_auditiva, :feedback, :usuario_id)");

$res->bindValue(":avalia_visual", $avalia_visual);
$res->bindValue(":avalia_fisica", $avalia_fisica);
$res->bindValue(":avalia_auditiva", $avalia_auditiva);
$res->bindValue(":feedback", $feedback);
$res->bindValue(":usuario_id", $usuario_id); // Vincula o ID do usuário

if($res->execute()) {
    error_log("Denúncia salva com sucesso!"); // Log de sucesso
    $result = json_encode(array('mensagem'=>'Denúncia salva com sucesso!', 'sucesso'=>true));
} else {
    error_log("Erro ao salvar denúncia! - Error: " . $res->errorInfo()[2]); // Log de erro
    $result = json_encode(array('mensagem'=>'Erro ao salvar denúncia!', 'sucesso'=>false));
}

error_log("Bound values: " . json_encode($res->getBoundParams()));
error_log("Query execution result: " . ($res->execute() ? "success" : "failure") . " - Error: " . $res->errorInfo()[2]);

echo $result;
?>