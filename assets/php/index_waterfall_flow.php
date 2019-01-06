<?php 
	$long=$_GET["length"];
	$data=[mt_rand(0,$long-1),mt_rand(0,$long-1),mt_rand(0,$long-1),mt_rand(0,$long-1),mt_rand(0,$long-1)];
	echo json_encode($data);
 ?>