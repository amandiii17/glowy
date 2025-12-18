<?php

include 'config/db.php';


$fullName= $_POST ['fullName'];
$nicNumber= $_POST ['nicNumber'];
$contactNumber= $_POST ['contactNumber'];
$emailAddress= $_POST ['emailAddress'];
$address= $_POST ['address'];
$city= $_POST ['city'];
$password= $_POST ['password'];

    $sql="insert into register values ('$fullName','$nicNumber', '$contactNumber','$emailAddress', '$address', '$city', '$password')";

    if (mysqli_query ($path, $sql)){

            echo ("Registration Successfull...!");
    }

?>