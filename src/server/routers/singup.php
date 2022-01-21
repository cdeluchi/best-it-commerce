<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $username = $_POST['uid'];
    $pwd = $_POST['pwd'];
    $pwdRepeat = $_POST['pwdrepeat'];

    require_once 'dbh.php';
    require_once 'function.php';

    if(emptInputSingup($name, $email,$username,$pwd, $pwdRepeat ) !== false) {
        header("location: ../singup.php?error=emptyinput");
        exit();
    }
    if(invalidUid($username) !== false) {
        header("location: ../singup.php?error=emptyinput");
        exit();
    }
    if(invalidEmail($email) !== false) {
        header("location: ../singup.php?error=emptyinput");
        exit();
    }
    if(pwdMatch($pwd, $pwdRepeat) !== false) {
        header("location: ../singup.php?error=emptyinput");
        exit();
    }
    if(uidExist($conn, $username) !== false) {
        header("location: ../singup.php?error=emptyinput");
        exit();
    }

    createUser($conn, $name, $email, $username, $pwd)
}
else 
{
    header('location:../singup.php');
    exit();
}