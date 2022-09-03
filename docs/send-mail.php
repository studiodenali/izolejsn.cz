<?php

$to = 'admin@studiodenali.cz';

$from = $_POST['email'];
$subject = $_POST['subject'];
$name = $_POST['name'];
$tel = $_POST['tel'];
$message = $_POST['message'];

$headers = 'MIME-Version: 1.0' . '\r\n';
$headers .= 'Content-type:text/html;charset=utf-8' . '\r\n';
$headers .= 'From:' . $from;

if (mail($to, $subject, $message, $headers)) {
    echo 'Message was sent!';
} else {
    echo 'Message was not sent.';
}