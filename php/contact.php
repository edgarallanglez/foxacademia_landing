<?php
header('Content-type: application/json; charset=utf-8');

$api=$_GET['con'];

if($api=='mail'){
	$email=$_GET['email'];
	$course=$_GET['course'];

	/*$html="<div>
				<p>El usuario <strong>$email</strong> solictó información del curso: <strong>$course</strong>.</p>
		   </div>";
	mailAttachment("foxacademia85@gmail.com", $course,$html);*/

	$fp = fopen('../data_base.txt', 'a');
	fwrite($fp, $email.' = '.$course.PHP_EOL);
	fclose($fp);

	$message="success";
    $data =  array('message' => $message);
    echo json_encode($data);
}

function mailAttachment($mailto, $subject, $message) {
	require_once("PHPMailer/class.phpmailer.php");
	//$file = $path.$filename;
	$mail = new PHPMailer();

	$mail->From     = "hello@foxacademia.com";
	$mail->FromName = "Fox";
	$mail->AddAddress($mailto);

	$mail->CharSet = 'UTF-8';
	$mail->Subject  = $subject;
	$mail->Body     = $message;
	$mail->IsHTML(true);
	$mail->WordWrap = 75;
	//$mail->AddAttachment($file);

    if(!$mail->Send()) {
      $message="error";
    }else{
      $message="success";
    }
    $data =  array('message' => $message);
    echo json_encode($data);

}


?>