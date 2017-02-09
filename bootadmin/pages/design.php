<?php
include('connect.php');
$id=$_GET['id'];
$result = mysqli_query($link,"SELECT * FROM orders WHERE id='$id'");
while($row = mysqli_fetch_array($result))
	{
		echo '<img src="../store/'.$row['design'].'"><br>';
		echo '<a href="../store/'.$row['design'].'">download</a>';
	}

?>