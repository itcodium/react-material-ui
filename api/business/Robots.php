<?php

require_once dirname(__FILE__).'/../data/Robots.php';
require_once dirname(__FILE__).'/../common/ResponseFormat.php';

class RobotsBus
{
    private static $response;
    private static $robot;

    function __construct(){
        self::$response= new  ResponseFormat();
        self::$robot=new Robots();
    }

	public static function getAll(){
		try{
            $data=self::$robot->getAll();
            self::$response->data($data);
		}catch(exception $e) {
            return self::$response->error($e->getMessage());
		}
        return self::$response->get();
    }

	public static function getById($id){
        try{
            $data=self::$robot->getById($id);
            self::$response->data($data);
        }catch(exception $e) {
            return self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }

	public static function getByName($name){
        try{
            $myObj = new stdClass;
            $myObj->name = $name;
            $myObj->age = 33;
            $myObj->city = "Test";
            self::$response->data($myObj);
        }catch(exception $e) {
            return self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }
}

?>