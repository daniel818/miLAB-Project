<?php
//require 'vendor/autoload.php';
//
//use Parse\ParseClient;
//$xx = "A";
//ParseClient::initialize('EoP2P9g5Ic5lc6Mxebgx4FcEA6Ro7AQmsAtKMRUL', 'b9Q8l6GujZd0vafu425eyepmH4k32myJeUvGgbS3', 'zZeJlsPDd1mBxsRojtyX3QJi9RfynZI4m9soO9xM');
//ParseClient::setServerURL('http://localhost:1337/vendor/parse');
//
//use Parse\ParseObject;
//
//$restObject = ParseObject::create("TestObject");
//$restObject->set("foo", "bar");
//$restObject->save();
//
//var_dump($_GET['meeting_id']);
//
//// get the object from parse
//
////exit();

//'studentMail=' + from + '&mentorMail=' + to + '&con=' + content


$studentMail = $_POST['studentMail'];
$mentorMail = $_POST['mentorMail'];
$content = $_POST['con'];



$to      = 'avital.daniel@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: info@yodapp.co.il' . "\r\n" .
    'Reply-To: eranilani@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

var_dump(mail($to, $subject, $message, $headers));

echo $content;