<?php 
	$un=$_POST['username'];
	$arr=['张三','李四','王五','赵六','沈七'];
	if(in_array($un,$arr)){
		echo 'y';
	}else{
		echo 'n';
	}
 ?>