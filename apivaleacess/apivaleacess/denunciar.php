<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once("conexao.php");
$tabela = 'denuncia';

$postjson = json_decode(file_get_contents('php://input'), true);

// Captura os dados da denúncia e do usuário
$avalia_visual_d = @$postjson['avalia_visual_d'];
$avalia_fisica_d = @$postjson['avalia_fisica_d'];
$avalia_auditiva_d = @$postjson['avalia_auditiva_d'];
$feedback = @$postjson['feedback'];
$usuario_id_d = @$postjson['usuario_id_d']; // Captura o ID do usuário

error_log("Dados recebidos: " . json_encode($postjson)); // Log dos dados recebidos

// Prepara a query para inserir a denúncia
$pdo->query("SELECT 1"); // Test the connection
$res = $pdo->prepare("INSERT INTO $tabela (avalia_visual_d, avalia_fisica_d, avalia_auditiva_d, feedback, usuario_id_d) VALUES (:avalia_visual_d, :avalia_fisica_d, :avalia_auditiva_d, :feedback, :usuario_id_d)");

$res->bindValue(":avalia_visual_d", $avalia_visual_d);
$res->bindValue(":avalia_fisica_d", $avalia_fisica_d);
$res->bindValue(":avalia_auditiva_d", $avalia_auditiva_d);
$res->bindValue(":feedback", $feedback);
$res->bindValue(":usuario_id_d", $usuario_id_d); // Vincula o ID do usuário

if($res->execute()) {
    error_log("Denúncia salva com sucesso!"); // Log de sucesso
    $result = json_encode(array('mensagem'=>'Denúncia salva com sucesso!', 'sucesso'=>true));
} else {
    error_log("Erro ao salvar denúncia! - Error: " . $res->errorInfo()[2]); // Log de erro
    $result = json_encode(array('mensagem'=>'Erro ao salvar denúncia!', 'sucesso'=>false));
}

echo $result;
?>
