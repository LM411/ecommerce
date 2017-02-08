<?php
include('connect.php');
$transnum  = $_GET['trnasnum'];
if($_GET['id'])
{
$id=$_GET['id'];

 $sql = "DELETE from orders WHERE id='$id'";
 header("location: checkout/index.php?&trnasnum=$transnum");
 mysql_query( $sql);
}

?>