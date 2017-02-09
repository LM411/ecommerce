<?php
	include('connect.php');
	$roomid = $_POST['roomid'];
	$status=$_POST['status'];
	mysqli_query($link,"UPDATE reservation SET status='$status' WHERE reservation_id='$roomid'");
	header("location: tables.php");
?>

