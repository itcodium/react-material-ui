<?php

require_once dirname(__FILE__).'/../data/Cliente.php';
require_once dirname(__FILE__).'/../common/ResponseFormat.php';
use Phalcon\Http\Response;

class ClienteBus
{
    private static $response;
    private static $item;
    private static $app;


    public static function init($app){
        self::$response= new  ResponseFormat();
        self::$app=$app;
        self::$item=new Cliente();
    }

    function __construct(){
        self::init();
    }

	public static function getAll(){
        try{
            $data=self::$item->getAll();
            self::$response->data($data);
		}catch(exception $e) {
            return self::$response->error($e->getMessage());
		}
        return self::$response->get();

    }

	public static function getById($id){
        try{
            $data=self::$item->getById($id);
            self::$response->data($data);
        }catch(exception $e) {
            return self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }

    public static function insert(){
        try{
            //$data =self::$app->request->getJsonRawBody();
            //$res=self::$item->insert($data);
            throw new Exception("TEst error??");
            //print_r($res);
            /*
            self::$response->data($res);*/



        }catch(exception $e) {
             //echo("----:".$e->getMessage());
            echo("A1");
            //return self::$response->data($e->getMessage());
        }

        $response = new  Response();
        return  $response->setJsonContent(
            [
                'status'   => 'ERROR',
                'messages' => ["545454545"]
            ]
        );

        //return self::$response->get();
    }

/*
	public static function getByName($name){
        try{
            $myObj = new stdClass;
            $myObj->name = $name;
            $myObj->age = 33;
            $myObj->city = "Test";
            self::$response->data($myObj);
        }catch(exception $e) {
            return self::$response->error($e->errorMessage());
        }
        return self::$response->get();
    }


    */
}

?>