<style>
body{
font-family:"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif;
font-size:12px;
}
p, h1, form, button{border:0; margin:0; padding:0;}
.spacer{clear:both; height:1px;}
/* ----------- My Form ----------- */
.myform{
margin:0 auto;
width:80%;
padding:14px;
}

/* ----------- stylized ----------- */
#stylized{
border:solid 2px #b7ddf2;
background:#ebf4fb;
}
#stylized h1 {
font-size:14px;
font-weight:bold;
margin-bottom:8px;
}
#stylized p{
font-size:11px;
color:#666666;
margin-bottom:20px;
border-bottom:solid 1px #b7ddf2;
padding-bottom:10px;
}
#stylized label{
display:block;
font-weight:bold;
text-align:right;
width:140px;
float:left;
}
#stylized .small{
color:#666666;
display:block;
font-size:11px;
font-weight:normal;
text-align:right;
width:140px;
}

#stylized select{
float:left;
font-size:12px;
padding:4px 2px;
border:solid 1px #aacfe4;
width:200px;
margin:2px 0 20px 10px;
}

</style>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<script type="text/javascript">
function validateForm()
{
var x=document.forms["form1"]["fname"].value;
if (x==null || x=="")
  {
  alert("Enter Firstname");
  return false;
  }
  var y=document.forms["form1"]["lname"].value;
if (y==null || y=="")
  {
  alert("Enter Lastname");
  return false;
  }
  var z=document.forms["form1"]["cnum"].value;
if (z==null || z=="")
  {
  alert("Enter Contact Number");
  return false;
  }
  var a=document.forms["form1"]["email"].value;
if (a==null || a=="")
  {
  alert("Enter Email Address");
  return false;
  }
    var b=document.forms["form1"]["paddress"].value;
if (b==null || b=="")
  {
  alert("Enter Address");
  return false;
  }
    var c=document.forms["form1"]["city"].value;
if (c==null || c=="")
  {
  alert("Enter City");
  return false;
  }
    var d=document.forms["form1"]["daddress"].value;
if (d==null || d=="")
  {
  alert("Enter Delivery Address");
  return false;
  }
  var con = confirm("Are You Sure? you want to proceed?");
if (con ==false)
{
return false;
}
}
</script>
<link rel="stylesheet" type="text/css" href="tcal.css" />
<script type="text/javascript" src="tcal.js"></script> 
<div id="stylized" class="myform">
<form class="form-horizontal" method="post" action="saveform.php" name="form1" onsubmit="return validateForm()">
<input type="hidden" name="transnum" id="name" value="<?php echo $_POST['transnumber'] ?>" />

<?php
$asas=$_POST['total'];
$rrrrr=$_POST['country'];
if($rrrrr==1){
$asas=$_POST['total'];
}
if($rrrrr==2){
$asas=$_POST['total'];
}
if($rrrrr==3){
$asas=$_POST['total']+500;
} 
 ?>
<input type="text" name="ototal" id="name" value="<?php echo $asas ?>" style="display:none;" />
<input type="hidden" name="sdsd" id="name" value="<?php 
$rrrrr=$_POST['country'];
if($rrrrr==1){
echo 'Cash On delivery';
}
if($rrrrr==2){
echo 'Shipping Inside Batangas';
}
if($rrrrr==3){
echo 'Shipping Outside Batangas';
}
?>" />
<input type="hidden" name="pmethod" id="name" value="<?php echo $_POST['state'] ?>" />
<?php
$qtytotal=$_POST['totalqty'];
$wqwqwq=$_POST['country'];
$NewDate=Date('y:m:d', strtotime("+0 days"));
if(($qtytotal>1000) && ($wqwqwq==2)){
$NewDate=Date('y:m:d', strtotime("+2 days"));
}
else if(($qtytotal<1000) && ($wqwqwq==2)){
$NewDate=Date('y:m:d', strtotime("+1 days"));
}
else if(($qtytotal>1000) && ($wqwqwq==3)){
$NewDate=Date('y:m:d', strtotime("+4 days"));
}
else if(($qtytotal<1000) && ($wqwqwq==3)){
$NewDate=Date('y:m:d', strtotime("+3 days"));
}
echo '<input type="hidden" name="date" id="name" value="'.$NewDate.'" />';
?>
<h1>Personal Information form</h1>
<p>Note: This note inform/s you when you can receive your order<br>
Inside Batangas: 1000 above- 2 days | 1000 below- 1 day<br>
Outside Batangas: 1000 above- 4 days | 1000 below- 3 days<br>
</p>



  <div class="form-group">
    <label class="control-label col-sm-2" for="fnmae">First Name:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="name" name="fname" placeholder="First Name">
    </div>
  </div>




  <div class="form-group">
    <label class="control-label col-sm-2" for="lname">Last Name:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="name" name="lname" placeholder="Last Name">
    </div>
  </div>


  <div class="form-group">
    <label class="control-label col-sm-2" for="lname">Contact No.:</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="name" name="cnum" placeholder="Contact No.">
    </div>
  </div>


  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Email:</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" name="email" placeholder="Email">
    </div>
  </div>




 <div class="form-group">
    <label class="control-label col-sm-2" for="email">Address:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="name" name="paddress" placeholder="permanent address">
    </div>
  </div>

   <div class="form-group">
    <label class="control-label col-sm-2" for="email">City:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="name" name="city" placeholder="permanent address">
    </div>
  </div>

   <div class="form-group">
    <label class="control-label col-sm-2" for="email">Delivery Addres:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="name" name="daddress" placeholder="Delivery Address">
    </div>
  </div>

  <button type="submit" class="btn btn-lg btn-info">Proceed</button>
<div class="spacer"></div>

</form>
</div>