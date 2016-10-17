<?php
if($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $dokogo = "kontakt@anask.pl";
    $tytul = "Formularz kontaktowy z anask.pl";

    $wiadomosc = "";
    $wiadomosc .= "Imię i nazwisko: " . $name . "\n";
    $wiadomosc .= "Email: " . $email . "\n";
    $wiadomosc .= "Wiadomość: " . $message . "\n";

    $naglowek = "";
    $naglowek .= "Od:" . $name . " \n";
    $naglowek .= "Content-Type:text/plain;charset=utf-8";

    $send = mail($dokogo, $tytul, $wiadomosc, $naglowek);

}
?>