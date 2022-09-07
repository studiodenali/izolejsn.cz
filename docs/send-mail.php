<?php

if (isset($_POST['email'], $_POST['subject'], $_POST['name'], $_POST['message'])) {
    // Sender details
    $from = $_POST['email'];
    $subject = $_POST['subject'];
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $message = $_POST['message'];

    // Recipient
    $to = 'brzy@studiodenali.cz';
    
    // Additional headers
    $headers = [
        'MIME-Version' => '1.0',
        'Content-type' => 'text/html; charset=utf8',
        'From' => $from,
        'Reply-To' => $from,
        'X-Mailer' => 'PHP/' . phpversion()
    ];
    
    if (mail($to, $subject, $message, $headers)) {
        echo 'E-mail byl odeslán!';
    } else {
        echo 'Vyskytla se chyba, zkuste to znovu.';
    }
}
