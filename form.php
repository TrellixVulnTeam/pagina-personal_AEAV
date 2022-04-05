<?php
    $nombre = $_POST["nombre"]
    $mail = $_POST['email'];
    $mensaje = $_POST['textarea'];
    
 
    $para = 'nicolas.seguro@gmail.com';
    $asunto = 'Este mail fue enviado desde la web';


    mail($para, $asunto, utf8_decode($nombre, $mail, $mensaje));

    
    header('Location:exito.html');

?>