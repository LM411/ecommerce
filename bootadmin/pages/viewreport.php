<div id="print_content">
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Request Table</title>
    <link rel="stylesheet" href="inverse.css">
	<script src="inverse.js"></script>
    <!-- Bootstrap Core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- DataTables CSS -->
    <link href="../vendor/datatables-plugins/dataTables.bootstrap.css" rel="stylesheet">

    <!-- DataTables Responsive CSS -->
    <link href="../vendor/datatables-responsive/dataTables.responsive.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- jQuery -->
    <script src="../vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../vendor/metisMenu/metisMenu.min.js"></script>

    <!-- DataTables JavaScript -->
    <script src="../vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script src="../vendor/datatables-plugins/dataTables.bootstrap.min.js"></script>
    <script src="../vendor/datatables-responsive/dataTables.responsive.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style type="text/css">
		.table{
			width: 80%;
			text-align: left;
		}
		.logo{
			text-align: left;
		}
		.table .details{
			width: 30%;
		}
		.logo{
			margin-left: 5%;
		}
		thead th{
			text-align: left;
		}

	</style>

</head>

<a class="logo" href="index.php"><img src="logo.png" class="logo"></a>
<div class="">
<a href="javascript:Clickheretoprint()" style="color:#000;margin-left:10%;" >Print Out</a>
</div>
<body>
<center>
	



<table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
<thead class="thead-inverse">
	<th class="details">Customer Details</th>
	<th>Credentials</th>
</thead>
<?php
include('connect.php');
		$id=$_GET['id'];
		$result = mysqli_query($link,"SELECT * FROM reservation WHERE confirmation='$id'");

		while($row = mysqli_fetch_array($result))
			{
				echo "
	                <tr class='odd gradeX'>
	                    <td>"."Date"."</td>
	                    <td>" . $row["date"]. "</td>
	                </tr
	                <tr>
	                	<td>"."Names"."</td>
	                    <td>" . $row["firstname"]." ".$row['lastname']. "</td>
	                </tr>
	                <tr>
	                	<td>"."Address"."</td>
	                    <td>" . $row["address"]." ".$row['city']. " ".$row['country']."</td>
	                </tr>
	                <tr>
	                	<td>"."Email"."</td>
	                    <td>" . $row["email"]."</td>
	                </tr>
	                <tr>
	                	<td>"."Contact number"."</td>
	                    <td>" . $row["contact"]."</td>
	                </tr>
	                <tr>
	                	<td>"."Confirmation"."</td>
	                    <td>" . $row["confirmation"]."</td>
	                </tr>
	                <tr>
	                	<td>"."Payment Method"."</td>
	                    <td>" . $row["payment"]."</td>
	                </tr>
	                <tr>
	                	<td>"."Delivery Type"."</td>
	                    <td>" . $row["delivery_type"]."</td>
	                </tr>


	             ";
				
			}
	?> 
</table>

<table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
<thead class="thead-default">
	<th class="details">Product Name</th>
	<th>Product Attribute</th>
</thead>
<?php
include('connect.php');
		$id=$_GET['id'];
		$result = mysqli_query($link,"SELECT * FROM orders WHERE confirmation='$id'");

		while($row = mysqli_fetch_array($result))
			{
				echo "
	                <tr class='odd gradeX'>
	                    <td>"."Item Name"."</td>
	                    <td>" . $row["product"]. "</td>
	                </tr
	                <tr>
	                	<td>"."Quantity"."</td>
	                    <td>" . $row["qty"]."</td>
	                </tr>
	             ";
				
			}
		$id=$_GET['id'];
		$result = mysqli_query($link,"SELECT * FROM reservation WHERE confirmation='$id'");
		while($row = mysqli_fetch_array($result))
		{
			echo"
				<tr class='odd gradeX'>
                    <td>"."Total Payable"."</td>
                    <td>" . $row["payable"]. "</td>
                </tr
			";
		}
	?> 
</table>
	
</center>	
</body>

</html>

</div>
<script language="javascript">
function Clickheretoprint()
{ 
  var disp_setting="toolbar=no,location=no,directories=yes,menubar=no,"; 
      disp_setting+="scrollbars=no,widtd=900, height=400, left=100, top=25"; 
  var content_vlue = document.getElementById("print_content").innerHTML; 
  
  var docprint=window.open("","",disp_setting); 
   docprint.document.open(); 
   docprint.document.write('<html><head><title> </title>'); 
   docprint.document.write('</head><body onLoad="self.print()" style="width: 900px; font-size:16px; font-family:arial;">');          
   docprint.document.write(content_vlue);          
   docprint.document.write('</body></html>'); 
   docprint.document.close(); 
   docprint.focus(); 
}
</script>

