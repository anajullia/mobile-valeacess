<?php 
include_once('conexao.php');

// Defina o ID do comércio manualmente aqui
$comercio_id = 5; // Altere esse valor manualmente conforme necessário

// Query para buscar as duas últimas avaliações do comércio específico com dados do usuário
$query = $pdo->prepare("
    SELECT a.avalia_visual, a.avalia_fisica, a.avalia_auditiva, a.feedback, 
           u.nome, u.deficiencia 
    FROM avaliacao a 
    LEFT JOIN usuario u ON a.usuario_id = u.usuario_id 
    WHERE a.usuario_id IS NOT NULL AND a.comercio_id = ?
    ORDER BY a.avalia_id DESC
    LIMIT 2
");
$query->execute([$comercio_id]);

$res = $query->fetchAll(PDO::FETCH_ASSOC);

if(count($res) > 0){
    echo json_encode(array('success'=>true, 'result'=>$res));
} else {
    echo json_encode(array('success'=>false, 'result'=>'0'));
}
?>
