<?php
include('connect.php');
	if (!isset($_FILES['image']['tmp_name'])) {
	echo "set";
	}else{
	$file=$_FILES['image']['tmp_name'];
	$image= addslashes(file_get_contents($_FILES['image']['tmp_name']));
	$image_name= addslashes($_FILES['image']['name']);
	$image_size= getimagesize($_FILES['image']['tmp_name']);

	
		if ($image_size==FALSE) {
		
			echo "That's not an image!";
			
		}else{
			move_uploaded_file($_FILES["image"]["tmp_name"],"../store/img/products/" . $_FILES["image"]["name"]);
			
			$location=$_FILES["image"]["name"];
			$type=$_POST['type'];
			$rate=$_POST['rate'];
			$desc=$_POST['desc'];
			

			
			$update=mysqli_query($link,"INSERT INTO internet_shop (name, price, description, img)VALUES('$type','$rate','$desc','$location')");
			header("location: store_products.php");
			exit();
		
			}
	}


?>
