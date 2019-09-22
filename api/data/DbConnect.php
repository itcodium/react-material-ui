<?php

    class DbConnect{
        private $con;
        function __construct(){}

        function connect(){
            include_once dirname(__FILE__).'/../common/Constants.php';
            error_reporting(0);
            $this->con = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
            if (mysqli_connect_errno()) {
                throw new Exception(mysqli_connect_error());
            }
            return $this->con;
        }
    }

?>