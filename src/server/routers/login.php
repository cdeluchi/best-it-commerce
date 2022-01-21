<?php

if(isset($_POST['submit'])){
    #name = $_POST['name'];
    #email = $_POST['email'];
    #username = $_POST['uid'];
    #pwd = $_POST['pwd'];
    #pwdRepeat = $_POST['pwdrepeat'];

    require_once 'dbh.php';
    require_onde 'function.php';
}
else 
{
    header('location:../singup.php');
}