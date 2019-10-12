<?php

use Phalcon\Http\Response;

class ResponseFormat{

  private $response;
  function __construct(){
		$this->response = new  Response();
		$this->response->setContentType('application/json', 'utf-8');
	}

	public function get(){
		 return  $this->response ;
	}

	public  function error($message){
		$this->response->setStatusCode('500', 'Internal Server Error');
		$this->response->setJsonContent(
			['status'=>'error','message'=> $message ]
		);
	}

	public function data($data){
		$this->response->setJsonContent(
			[  'status' => 'ok','data'  =>  $data ]
		);
	}
 }
?>