<meta charset="UTF-8">
<?php 
	if(isset($_POST["Name"])) $Name = $_POST['Name'];

	if(isset($_POST["Email"])) $Email = $_POST['Email'];

	if(isset($_POST["Phone"])) $Phone = $_POST['Phone'];

	if(isset($_POST["Message"])) $Message = $_POST['Message'];


$pattern_name = "/^[A-Z]/ ";
$pattern_email = "/@mail.ru$/";
$pattern_phone = "/[0-9]{11}$/";
$pattern_message = "/[a-zA-Z0-9]/";



	$host = '127.0.0.1';
    $db   = 'plint';
    $user = 'root';
    $pass = '';
    $charset = 'utf8';

    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $opt = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    $pdo = new PDO($dsn, $user, $pass, $opt);

     $sql = "INSERT INTO plintty (Name, Email, Phone, Message) VALUES (:Name, :Email, :Phone, :Message)";
    $q=$pdo->prepare($sql);



if (!preg_match($pattern_name, $Name)){
    echo "Поле Name введено не корректно ";
}
else {
    if (!preg_match($pattern_email, $Email)){
        echo "Поле Email введено не корректно ";
    }
    else {
        if (!preg_match($pattern_phone, $Phone)){
            echo "Поле Phone введено не корректно ";
        }
        else {
            if (!preg_match($pattern_message, $Message)){
                echo "Поле Message введено не корректно ";
            }
            else {
                $q->execute (array(':Name'=>$Name,
                                    ':Email'=>$Email,
                                    ':Phone'=>$Phone,
                                    ':Message'=>$Message));
            }
        }
    }
}

 ?>


