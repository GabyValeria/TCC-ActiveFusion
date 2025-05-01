<?php
session_start();
include 'db_connection.php'; // Conectar ao banco de dados

// Verificar se a requisição é POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obter dados da requisição
    $data = json_decode(file_get_contents("php://input"), true);
    $user_id = $data['userId'];
    $avatar_file = $data['avatarFile']; // Ex: 1.png, 2.png, etc.

    // Atualizar o avatar no banco de dados
    $sql = "UPDATE users SET profile_picture = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $avatar_file, $user_id);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Erro ao atualizar avatar']);
    }

    // Fechar a conexão com o banco de dados
    $stmt->close();
    $conn->close();
}
?>
