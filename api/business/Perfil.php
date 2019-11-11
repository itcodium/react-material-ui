<?php
require_once dirname(__FILE__).'/../common/ResponseFormat.php';
require_once dirname(__FILE__).'/../data/Perfil.php';

class PerfilBus
{
    private static $response;
    private static $item;
    private static $app;

    public static function init($app){
        self::$response= new  ResponseFormat();
        self::$app=$app;
        self::$item=new Perfil();
    }

    function __construct(){
        self::init();
    }

    public static function getAll(){
        try{
            $data=self::$item->getAll();
            self::$response->data($data);
		}catch(exception $e) {
            self::$response->error($e->getMessage());
		}
        return self::$response->get();
    }

	public static function getById($id){
        try{
            $data=self::$item->getById($id);
            self::$response->data($data);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }


    public static function delete($id){
        try{
            $data=self::$item->delete($id);
            self::$response->data($data);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }

     public static function update($id){
        try{
            $parameters =self::$app->request->getJsonRawBody();
            $parameters->id=$id;
            $res=self::$item->update($parameters);
            self::$response->data($res);
        }catch(exception $e) {
           self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }

    public static function insert(){
        try{
            $headers = apache_request_headers();
            $parameters =self::$app->request->getJsonRawBody();
            $data=self::$item->insert($parameters);
            self::$response->data($data);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }
}
?>