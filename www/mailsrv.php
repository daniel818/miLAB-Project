<?php
var_dump($_GET['meeting_id']);

// get the object from parse

exit();


$to      = 'avital.daniel@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: info@yodapp.co.il' . "\r\n" .
    'Reply-To: eranilani@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

var_dump(mail($to, $subject, $message, $headers));