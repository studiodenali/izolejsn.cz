<?php

if (isset($_POST['email'], $_POST['subject'], $_POST['name'], $_POST['message'])) {
    // Sender details
    $from = $_POST['email'];
    $subject = $_POST['subject'];
    $name = $_POST['name'];
    //$tel = $_POST['tel'];
    $message = $_POST['message'];

    // Recipient
    $to = 'davidbrzy@outlook.com';
    
    // Additional headers
    $additional_headers = [
        'MIME-Version' => '1.0',
        'Content-type' => 'text/html; charset=utf8',
        'From' => $from,
        'Reply-To' => $from,
        'X-Mailer' => 'PHP/' . phpversion()
    ];
    
    if (mail($to, $subject, $message, $additional_headers)) {
        echo 'E-mail byl odeslán!';
    } else {
        echo 'Vyskytla se chyba, zkuste to znovu.';
    }
}