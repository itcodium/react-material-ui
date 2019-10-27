<?php
use Phalcon\Loader;
use Phalcon\Mvc\Micro;

require_once 'business/Cliente.php';

$app = new Micro();
ClienteBus::init($app);

$app->get('/cliente', 'ClienteBus::getAll');
$app->get('/cliente/{name}','ClienteBus::getByName');
$app->get('/cliente/{id:[0-9]+}','ClienteBus::getById');
$app->post('/cliente','ClienteBus::insert');
$app->put('/cliente/{id:[0-9]+}','ClienteBus::update');
$app->delete('/cliente/{id:[0-9]+}','ClienteBus::delete');
$app->delete('/cliente/code/{code}','ClienteBus::deleteByCode');

$app->notFound(
    function () use ($app) {
        echo "not found";
    }
  );

$app->handle();
?>
