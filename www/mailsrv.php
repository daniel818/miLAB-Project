<?php
require 'vendor/autoload.php';

//use Parse\ParseClient;
//
//ParseClient::initialize('EoP2P9g5Ic5lc6Mxebgx4FcEA6Ro7AQmsAtKMRUL', '', 'zZeJlsPDd1mBxsRojtyX3QJi9RfynZI4m9soO9xM');
//ParseClient::setServerURL('https://api.parse.com/parse/');
//
//use Parse\ParseObject;
//
//$restObject = ParseObject::create("TestObject");
//$restObject->set("foo", "bar");
//$restObject->save();

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