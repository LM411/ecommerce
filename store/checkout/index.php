

<head>
	 <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="checkoutstyle.css">
	
</head>

<h1>Checkout</h1>
<a href="../" class="btn btn-primary btn-lg active" role="button" >Back to Products</a>


<table style="margin-top: 7%" class="container">
	<thead>
		
		<tr>
			<th><h1>Remove</h1></th>
			<th><h1>Product Name</h1></th>
			<th><h1>Quantity</h1></th>
			<th><h1>Total</h1></th>
		</tr>
	</thead>
	<tbody>
						<?php
						require "../connect.php";
						$transnum  = $_GET['trnasnum'];
				$result3 = mysql_query("SELECT * FROM orders WHERE confirmation='$transnum'");
					while($row3 = mysql_fetch_array($result3))
						{
						echo '<tr>';
						echo '<td><a href="../deleteorder.php?id='.$row3['id'].'&trnasnum='.$transnum.'" class="delbutton" title="Click To Delete"><img src="../img/delete.png"></a></td>';
						echo '<td><div align="center">'.$row3['product'].'</div></td>';
						echo '<td>'.$row3['qty'].'</td>';
						echo '<td><div align="center">'.$row3['total'].'</div></td>';
						echo '</tr>';
						}
				?>
				<tr>
				  <td colspan="3"><div align="right"><span style="color:#B80000; font-size:13px; font-weight:bold; font-family:Arial, Helvetica, sans-serif;">Grand Total: </span></div></td>
				  <td><div align="center">
				  <?php
				  $result5 = mysql_query("SELECT sum(total) FROM orders WHERE confirmation='$transnum'");
					while($row5 = mysql_fetch_array($result5))
					  { 
						echo $row5['sum(total)']; 
						$sfdddsdsd=$row5['sum(total)'];
					  }
				  ?>
				  
				  
				  </div>
				  </td>
				</tr>
	</tbody>
<div style="   position: absolute;
    right: 20px;
    width: 200px;
    height: 130px;
    border: 3px solid #8AC007;
    ">

			<form method="post" action="../personalinfo.php" name="form1" onsubmit="return validateForm()">
			<input type="hidden" name="transnumber" value="<?php echo $transnum ?>" />
			<input type="hidden" name="total" value="<?php echo $sfdddsdsd ?>" />
			<input type="hidden" name="totalqty" value="
			<?php
				  $result5 = mysql_query("SELECT sum(qty) FROM orders WHERE confirmation='$transnum'");
					while($row5 = mysql_fetch_array($result5))
					  { 
						echo $row5['sum(qty)']; 
					  }
				  ?>
			" />
			<div class="form-group">
  <label for="sel1">Payment Method:</label>
  <select style="width: 90%" name="state" class="form-control" id="sel1">

				<option value="Cash On delivery">Cash On delivery</option>
				<option value="Shipping Inside Batangas">M-Pesa</option>
				<option value="Shipping Outside Batangas">EcoCash</option>
  </select>
</div>

			
			<button type="submit" class="btn btn-default">Check Out</button>
			</form>
</div>
</table>
