<?php

$username = $_POST["username"];
$passwort = $_POST["passwort"];

$pass = md5($passwort);

if($username=="Anthony" and $pass=="f51927206e95df42186d46daf9b52713")
   {
	include 'http://jobchance365.de/header.php';
	echo "Herzlich Willkommen Anthony<br>";
	echo "Bitte wähle eine Datei aus, welche du bearbeiten möchtest:<br>";
	
	include 'http://jobchance365.de/footer.php';
   }
else
   {
   echo "Login Fehlgeschlagen";
   echo'<br>Versuche es erneut : <a href="index.php">Zurück</a>';
   
   }

?>