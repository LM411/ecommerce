<?php
	include('connect.php');
	$roomid = $_POST['roomid'];
	$type=$_POST['type'];
	$rate=$_POST['rate'];
	$description=$_POST['description'];
	mysqli_query($link,"UPDATE internet_shop SET name='$type', price='$rate', description='$description' WHERE id='$roomid'");
	header("location: store_products.php");
?>