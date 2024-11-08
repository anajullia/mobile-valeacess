<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once("conexao.php");
$tabela = 'denuncia'; // A tabela que será usada

$postjson = json_decode(file_get_contents('php://input'), true);

// Captura os dados da avaliação e do usuário
$avalia_visual = @$postjson['avalia_visual_d'];
$avalia_fisica = @$postjson['avalia_fisica_d'];
$avalia_auditiva = @$postjson['avalia_auditiva_d'];
$feedback = @$postjson['feedback'];
$usuario_id = @$postjson['usuario_id']; // Captura o ID do usuário
$comercio_id = @$postjson['comercio_id']; // Captura o ID do comércio

error_log("Dados recebidos: " . json_encode($postjson)); // Log dos dados recebidos

try {
    // Testar a conexão
    $pdo->query("SELECT 1"); 

    // Prepara a query para inserir a avaliação
    $res = $pdo->prepare("INSERT INTO $tabela 
        (avalia_visual_d, avalia_fisica_d, avalia_auditiva_d, feedback, usuario_id, comercio_id) 
        VALUES (:avalia_visual, :avalia_fisica, :avalia_auditiva, :feedback, :usuario_id, :comercio_id)");

    // Vincula os valores aos parâmetros
    $res->bindValue(":avalia_visual", $avalia_visual);
    $res->bindValue(":avalia_fisica", $avalia_fisica);
    $res->bindValue(":avalia_auditiva", $avalia_auditiva);
    $res->bindValue(":feedback", $feedback);
    $res->bindValue(":usuario_id", $usuario_id);
    $res->bindValue(":comercio_id", $comercio_id);

    // Executa a query e verifica se foi bem-sucedida
    if($res->execute()) {
        error_log("Avaliação salva com sucesso!"); // Log de sucesso
        $result = json_encode(array('mensagem'=>'Avaliação salva com sucesso!', 'sucesso'=>true));
    } else {
        error_log("Erro ao salvar avaliação! - Error: " . $res->errorInfo()[2]); // Log de erro
        $result = json_encode(array('mensagem'=>'Erro ao salvar avaliação!', 'sucesso'=>false));
    }

} catch (Exception $e) {
    // Captura qualquer exceção e faz o log
    error_log("Erro na execução: " . $e->getMessage());
    $result = json_encode(array('mensagem'=>'Erro ao salvar avaliação!', 'sucesso'=>false));
}

echo $result;

?>
