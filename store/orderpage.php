<?php
include('connect.php');
$id=$_GET['id'];
$result2 = mysql_query("SELECT * FROM internet_shop WHERE id='$id'");
while($row2 = mysql_fetch_array($result2))
	{
	$price=$row2['price'];
	$name=$row2['name'];
  echo '<div style="margin:0 auto;width: 30%;">';
	echo '<img src="img/products/'.$row2['img'].'" alt="Wall-E" title="Wall-E" /><br>';
	echo '<span style="color:#B80000; font-size:16px; font-weight:bold; font-family:Arial, Helvetica, sans-serif;">'.$row2['name'].'</span><br>';
  echo '</div>';
	//echo '<span style="font-size:11px; font-family:Arial, Helvetica, sans-serif; text-align:left; line-height:17px;color:#000000;">'.$row2['description'].'</span>';
	}
?>
  


<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<script type="text/javascript" language="Javascript">
	var sum=0;
	price = document.frmOne.select1.value;
	document.frmOne.txtDisplay.value = price;
    function OnChange(value){
		
		price = document.frmOne.select1.value;
		quantity = document.frmOne.select2.value;
        sum = price * quantity;
		
		document.frmOne.txtDisplay.value = sum;
    }
</script>
<SCRIPT language=Javascript>
			  <!--
			  function isNumberKey(evt)
			  {
				 var charCode = (evt.which) ? evt.which : event.keyCode
				 if (charCode > 31 && (charCode < 48 || charCode > 57))
					return false;

				 return true;
			  }
			  //-->
		</SCRIPT>

  <div style="margin:0 auto;width: 20%;">  
    <form NAME = "frmOne" action="initiateorder.php" method="post" enctype="multipart/form-data">
    	<input type="hidden" name="transnum" value="<?php echo $_GET['trnasnum'] ?>" />
    	<INPUT TYPE = "Text" placeholder="0" class="form-control" name = "select1" size = "35" value ="<?php echo $price ?>" style="display:none;">

    	<INPUT TYPE = "Text"  name = "pname" size = "35" value ="<?php echo $name ?>" style="display:none;">
        <br>
        <span style="font-size:11px; font-family:Arial, Helvetica, sans-serif; text-align:left; line-height:17px;color:#000000;">Quantity : </span>
    	<input type="text" placeholder="0" name="select2" onkeyup="OnChange(this.value)" onKeyPress="return isNumberKey(event)" style="width:30%;" /> 
    	
    	 <span style="color:#B80000; font-size:16px; font-weight:bold; font-family:Arial, Helvetica, sans-serif;">=</span> 
        <INPUT TYPE = "Text"  name = "txtDisplay" size = "35" value ="" style="border:#999999 solid 1px; background-color:#FFF; width:30%; height:4%;" readonly><br>
       
        <input type="hidden" name="note" class="ed">
    	<br>
    	<input type="hidden" name="image" class="ed">
    	<br>
    	<input type="submit" value="Add To Cart" class="btn btn-lg btn-success" />
    </form>
  </div>  