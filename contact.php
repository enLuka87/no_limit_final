<?php

$name = $_POST["firstName"];
$from = $_POST["email"];
$subject = "Wiadomość z formularza na stronie";
$to = "nlv.niezbecki@gmail.com";
$message = $_POST["msg"];

$txt = "Imię: " . $name . "\r\n" . "e-mail: " . $from . "\r\n" . "Treść: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-to: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status){
    header("Location: /index.html?mail_status=sent");
} else{
    header("Location: /index.html?mail_status=error");
}