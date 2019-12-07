<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <?php
    class Person
    {
        public $name,
            $lastname,
            $city;
        private $age,
            $children;

        public function __construct($name, $lastname, $city)
        {
            $this->name = $name;
            $this->lastname = $lastname;
            $this->city = $city;
        }
        public function setChildren(int $number)
        {
            if ($number < 100 && $number > 0)
                $this->children = $number;
        }
        public function getChildren()
        {
            return $this->children;
        }
        public function setAge(int $number)
        {
            if ($number < 100 && $number > 0)
                $this->age = $number;
        }
        public function getAge()
        {
            return $this->age;
        }
    }

    $person = new Person('Иван', 'Петров', 'Москва');
    $person->setAge(32);
    $person->setChildren(2);
    //var_dump($person);
    $person->city = 'Санкт-Петербург';
    $person->setAge(33);
    //var_dump($person);

    class User extends Person
    {
        private $email,
            $phone;
        public function setContacts(string $mail, int $number)
        {
            $this->email = $mail;
            $this->phone = $number;
        }
    }

    $user = new User('Петр', 'Иванов', 'Курск');
    $user->setContacts('a@ya.ru', 895555555);
    var_dump($user);
    ?>


</body>

</html>