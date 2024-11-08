<?php

include_once('conexao.php');

// Obtendo o ID do comércio da URL
$id = $_GET['id']; // Certifique-se de que está pegando o id corretamente

// Consultando as avaliações do comércio pelo ID
$query = $pdo->prepare("
    SELECT avaliacao.avalia_visual, 
           avaliacao.avalia_fisica, 
           avaliacao.avalia_auditiva, 
           avaliacao.feedback, 
           avaliacao.usuario_id 
    FROM avaliacao 
    WHERE avaliacao.comercio_id = :id
");

$query->bindValue(':id', $id, PDO::PARAM_INT);
$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC); // Fetch de múltiplos resultados

if ($res) {
    $dados = array();

    // Loop pelas avaliações
    foreach ($res as $avaliacao) {
        // Garantir que os valores de avaliação sejam numéricos para evitar NaN
        $avalia_visual = is_numeric($avaliacao['avalia_visual']) ? $avaliacao['avalia_visual'] : 0;
        $avalia_fisica = is_numeric($avaliacao['avalia_fisica']) ? $avaliacao['avalia_fisica'] : 0;
        $avalia_auditiva = is_numeric($avaliacao['avalia_auditiva']) ? $avaliacao['avalia_auditiva'] : 0;

        // Calculando a média com uma casa decimal
        $media = ($avalia_visual + $avalia_fisica + $avalia_auditiva) / 3;

        $dados[] = array(
            'media_avaliacao' => round($media, 1),    // Média das três avaliações com uma casa decimal
            'feedback' => $avaliacao['feedback'],     // Feedback do usuário
            'usuario_id' => $avaliacao['usuario_id'], // ID do usuário
        );
    }

    $result = json_encode(array('success' => true, 'result' => $dados));
} else {
    $result = json_encode(array('success' => false, 'result' => 'Nenhuma avaliação encontrada'));
}

echo $result;

?>
