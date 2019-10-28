<?php
use Phalcon\Loader;
use Phalcon\Mvc\Micro;

require_once 'business/Client.php';
require_once 'business/User.php';

$app = new Micro();
ClientBus::init($app);
UserBus::init($app);

$app->get('/client', 'ClientBus::getAll');
$app->get('/client/{name}','ClientBus::getByName');
$app->get('/client/{id:[0-9]+}','ClientBus::getById');
$app->post('/client','ClientBus::insert');
$app->put('/client/{id:[0-9]+}','ClientBus::update');
$app->delete('/client/{id:[0-9]+}','ClientBus::delete');
$app->delete('/client/code/{code}','ClientBus::deleteByCode');


$app->post('/user','UserBus::insert');
$app->get('/user', 'UserBus::getAll');

/*

$app->get('/user/{id:[0-9]+}','UserBus::getById');

$app->put('/user/{id:[0-9]+}','UserBus::update');
$app->delete('/user/{id:[0-9]+}','UserBus::delete');*/



$app->notFound(
    function () use ($app) {
        echo "not found";
    }
  );

$app->handle();
?>
