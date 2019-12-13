<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <?php session_start(); ?>
    <?php if (isset($_GET['name'])) { ?>
        <p><?php var_dump($_SESSION['id'],$_SESSION['name']) ?></p>
        Спасибо, <?php echo $_GET['name'] ?>, мы свяжемся с вами в ближайшее время
    <?php } else { ?>
        <script>
            window.location = '/';
        </script>
    <?php } ?>



</body>

</html>