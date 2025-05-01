<?php
// Conectar ao banco de dados
include('db_connect.php');

// Consultar os posts mais recentes
$sql = "SELECT posts.id, posts.post_content, posts.created_at, users.first_name, users.last_name, users.profile_picture 
        FROM posts 
        JOIN users ON posts.user_id = users.id
        ORDER BY posts.created_at DESC";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($post = $result->fetch_assoc()) {
        $post_id = $post['id'];
        $post_content = htmlspecialchars($post['post_content']);
        $post_date = date("d/m/Y H:i", strtotime($post['created_at']));
        $user_name = $post['first_name'] . " " . $post['last_name'];
        $profile_picture = $post['profile_picture'] ? 'avatares/' . $post['profile_picture'] : 'avatares/default.png';

        echo "
        <div class='post'>
            <div class='post-header'>
                <img src='$profile_picture' alt='$user_name' class='post-avatar'>
                <span class='post-username'>$user_name</span>
                <span class='post-date'>$post_date</span>
            </div>
            <div class='post-content'>
                <p>$post_content</p>
            </div>
            <div class='post-footer'>
                <button class='btn-like'>Curtir</button>
                <button class='btn-comment'>Comentar</button>
            </div>
        </div>";
    }
} else {
    echo "<p>Não há posts para exibir.</p>";
}

// Fechar a conexão com o banco de dados
$conn->close();
?>
