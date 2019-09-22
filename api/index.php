<?php
use Phalcon\Loader;
use Phalcon\Mvc\Micro;
use Phalcon\Http\Response;

require_once 'business/Robots.php';

$app = new Micro();

$app->get('/v1/robots', 'RobotsBus::getAll');
$app->get('/v1/robots/{id:[0-9]+}','RobotsBus::getById');
$app->get('/v1/robots/{name}','RobotsBus::getByName');

$app->handle();
?>
