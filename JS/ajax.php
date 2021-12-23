<?php
if(isset($_POST['value'])){
    $value=$_POST['value'];
    $created=$_POST['created'];

    $conx=mysqli_connect("212.227.181.253","dev", "password", "notepad");

    $sql="INSERT INTO notepad.note (VALUE,CREATED) VALUES('$value', '$created')";

    $result=mysqli_query($conx,$sql);
}
?>