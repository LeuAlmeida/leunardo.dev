<?php
$to = "leo@webid.net.br";

$subject = "Mensagem de contato via leunardo.dev :D";

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$body = '<html lang="pt"><body>';
$body .= "name: $name <br/>";
$body .= "Email: $email <br/>message: $message";
$body .= "</body></html>";

$email_headers = implode("\n", array("De: $name", "E-mail: $email", "Assunto: $subject", "Return-Path: $email", "MIME-Version: 1.0", "X-Priority: 3", "Content-Type: text/html; charset=UTF-8"));

if (!empty($name) && !empty($email) && !empty($message)) {
  mail($to, $subject, $body, $email_headers);
  $msg = "Sua message foi enviada com sucesso.";
  echo "<script>alert('$msg')</script>";
} 

?>