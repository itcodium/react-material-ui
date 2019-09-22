<?php

use Phalcon\Http\Response;

class ResponseFormat{

    private $response;
    function __construct(){
		$this->response = new  Response();
	}

	public function get(){
		 return  $this->response ;
	}

	public  function error($message){
		$this->response->setStatusCode(400, 'Bad Request');
		return  $this->response->setJsonContent(
					[  'status' => 'error',
						'message'   =>  $message ]
						);
	}

	public function data($data){
		return  $this->response->setJsonContent(
					[  'status' => 'ok',
						'data'   =>  $data ]
						);
	}
 }
?>