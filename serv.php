<?php
if (validateName($_POST)) {
    $client = new UserData;
    $client->checkData($_POST);

    header('location: /thanks.php?name=' . $_POST['name']);
} else {
    header('location: /?error_name=Не заполнено имя');
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
    public $name,
        $present;

    public function checkData($data)
    {
        $this->name = $data['name'];

        if (isset($data['present']) && $data['present']) {
            $this->present = $data['present'];
        }
    }
    
}

