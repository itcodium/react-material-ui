<?php

use Phalcon\Loader;
use Phalcon\Mvc\Micro;

require_once 'business/Client.php';
require_once 'business/User.php';
require_once 'business/Perfil.php';

$app = new Micro();
ClientBus::init($app);
UserBus::init($app);
PerfilBus::init($app);

$app->get('/client', 'ClientBus::getAll');
$app->get('/client/{name}','ClientBus::getByName');
$app->get('/client/{id:[0-9]+}','ClientBus::getById');
$app->post('/client','ClientBus::insert');
$app->put('/client/{id:[0-9]+}','ClientBus::update');
$app->delete('/client/{id:[0-9]+}','ClientBus::delete');
$app->delete('/client/code/{code}','ClientBus::deleteByCode');

$app->post('/login','UserBus::login');
$app->get('/user', 'UserBus::getAll');
$app->get('/user/{id:[0-9]+}','UserBus::getById');
$app->post('/user','UserBus::insert');
$app->put('/user/{id:[0-9]+}','UserBus::update');
$app->delete('/user/{id:[0-9]+}','UserBus::delete');

$app->get('/perfil', 'PerfilBus::getAll');
$app->get('/perfil/{id:[0-9]+}','PerfilBus::getById');
$app->post('/perfil','PerfilBus::insert');
$app->put('/perfil/{id:[0-9]+}','PerfilBus::update');
$app->delete('/perfil/{id:[0-9]+}','PerfilBus::delete');

$app->notFound(
    function () use ($app) {
        echo "not found";
    }
  );

$app->handle();
?>
