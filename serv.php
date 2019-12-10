<?php
session_start();
if(validateCookie($_COOKIE)){
    header('location: /?error_form=Повторная отправка');
} else {
    if (validateName($_POST)) {
        $client = new UserData;
        $client->saveData($_POST);
        $_SESSION['name'] = $_POST['name'];
        setcookie('name', $_POST['name'], time() + 60*60*24*30);

        header('location: /thanks.php?name=' . $_POST['name']);
    } else {
        header('location: /?error_name=Не заполнено имя');
    }
}

function validateCookie($data){
    if(($data['name'] == $_POST['name']) && ($data['name'] == $_SESSION['name'])){
        return true;
    }
    return false;
}
function validateName($data)
{
    if (isset($data['name']) && $data['name']) {
        return true;
    }
    return false;
}

class UserData
{
    public $name;

    public function saveData($data)
    {
        $this->name = $data['name'];
    }
        
}

