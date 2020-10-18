<?php
if (isset($_GET['order'])) {
	$recepient = "video@a5.ru";
	$sitename = "a5.ru";
	$name = trim($_GET["name"]);
	$phone = trim($_GET["phone"]);
	$pagetitle = "\"$sitename\"";

	if (isset($_GET['order'])) {
		$message = "Имя: $name \nТелефон: $password";
		mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
	}
}