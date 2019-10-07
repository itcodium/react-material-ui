<?php
use Phalcon\Loader;
use Phalcon\Mvc\Micro;
use Phalcon\Http\Response;


require_once 'business/Cliente.php';



$app = new Micro();
ClienteBus::init($app);

$app->get('/cliente', 'ClienteBus::getAll');
$app->get('/cliente/{id:[0-9]+}','ClienteBus::getById');
$app->post('/cliente','ClienteBus::insert');
$app->get('/cliente/{name}','ClienteBus::getByName');


$app->handle();
?>
