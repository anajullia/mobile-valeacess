<?php

include_once('conexao.php');

// Obtendo o ID do comércio da URL
$id = $_GET['id']; // Certifique-se de que está pegando o id corretamente

// Consultando o comércio específico pelo ID e suas avaliações
$query = $pdo->prepare("
    SELECT comercio.*, 
           avaliacao.avalia_visual, 
           avaliacao.avalia_fisica, 
           avaliacao.avalia_auditiva, 
           avaliacao.feedback, 
           avaliacao.usuario_id 
    FROM avaliacao 
    INNER JOIN comercio ON avaliacao.comercio_id = comercio.comercio_id 
    WHERE comercio.comercio_id = :id
");

$query->bindValue(':id', $id, PDO::PARAM_INT);
$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC); // Fetch de múltiplos resultados

if ($res) {
    // A primeira linha contém os dados do comércio, as demais as avaliações
    $dados = array(
        'comercio_id' => $res[0]['comercio_id'],
        'nome' => $res[0]['nome'],
        'cidade' => $res[0]['cidade'],
        'rua' => $res[0]['rua'],
        'numero' => $res[0]['numero'],
        'categoria' => $res[0]['categoria'],
        'avaliacoes' => [] // Inicializa o array de avaliações
    );

    // Loop pelas avaliações
    foreach ($res as $avaliacao) {
        $dados['avaliacoes'][] = array(
            'avalia_visual' => $avaliacao['avalia_visual'],    // Vem da tabela avaliacao
            'avalia_fisica' => $avaliacao['avalia_fisica'],    // Vem da tabela avaliacao
            'avalia_auditiva' => $avaliacao['avalia_auditiva'], // Vem da tabela avaliacao
            'feedback' => $avaliacao['feedback'],                // Vem da tabela avaliacao
            'usuario_id' => $avaliacao['usuario_id'],           // Vem da tabela avaliacao
        );
    }

    $result = json_encode(array('success' => true, 'result' => $dados));
} else {
    $result = json_encode(array('success' => false, 'result' => 'Nenhum dado encontrado'));
}

echo $result;


