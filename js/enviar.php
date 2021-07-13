<?php

if(isset($_POST['send'])){
	if (!empty($_POST['name']) && !empty($_POST['asunto']) && !empty($_POST['mail']) && !empty($_POST['msg'])) {
		$name = $_POST['name'];
		$asunto = $_POST['asunto'];
		$email = $_POST['mail'];
		$message = $_POST['msg'];
		
		$header = 'From:'. $email . "\r\n";
		$header.= "Reply-To:". $email . "\r\n";
		$header.= "X-Mailer: PHP/". phpversion();
		
		$para = "yonatanpalac@gmail.com";
		mail($para,$asunto,$message,$header);

		echo"<script> setTimeout(\"location.href='../index.html'\",2000)</script>";
	}
}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
	<title>Enviado con exito</title>
</head>
<style>
	body{
		display:flex;
		justify-content:center;
		align-items:center;
		background:#ddd;
	}
	.container{
		width:800px;
		height:500px;
		background: linear-gradient(to right, #3c0066 0%, #9f0033 100%);
		text-align:center;
		padding:50px;
		margin:auto;
		margin-top:100px;
	}
	h2{
		color:#fff;
	}
	i{
		font-size:200px;
		color:#fff;
		margin-top:100px;
	}
</style>
<body>
	<div class="container">
		<h2>Mensaje enviado con exito</h2>
		<i class="fas fa-paper-plane"></i>
	</div>
</body>
</html>