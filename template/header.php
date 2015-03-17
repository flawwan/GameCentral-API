<?php
session_start();
$match = intval(isset($_GET['match']) ? $_GET['match'] : 0);
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="css/style.css"/>
</head>
<body>