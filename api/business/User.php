<?php
require_once dirname(__FILE__).'/../common/ResponseFormat.php';
require_once dirname(__FILE__).'/../data/User.php';

class UserBus
{
    private static $response;
    private static $item;
    private static $app;

    public static function init($app){
        self::$response= new  ResponseFormat();
        self::$app=$app;
        self::$item=new User();
    }

    function __construct(){
        self::init();
    }

    public static function login(){
        try{
            $data =self::$app->request->getJsonRawBody();
            $res=self::$item->login($data);
            self::$response->data($res);
        }catch(exception $e) {
           self::$response->error($e->getMessage());
        }
        return self::$response->get();
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

	public static function getByName($name){
        try{
            $data=self::$item->GetByName($name);
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
            $data =self::$app->request->getJsonRawBody();
            $data->id=$id;
            $res=self::$item->update($data);
            self::$response->data($res);
        }catch(exception $e) {
           self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }

    public static function insert(){
        try{
            $data =self::$app->request->getJsonRawBody();
            $res=self::$item->insert($data);
            self::$response->data($res);
        }catch(exception $e) {
           self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }
}
?>