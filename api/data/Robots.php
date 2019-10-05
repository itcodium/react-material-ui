<?php

class Robots
{
    private $con;

    function __construct()
    {
        require_once dirname(__FILE__).'/DbConnect.php';
        $db = new DbConnect();
		$this->con = $db->connect();
    }
	// https://www.php.net/manual/es/mysqli-result.fetch-object.php

	public function getAll(){
		$result=$this->con->query("CALL robotsGetAll(2)");
		if (!$result) {
			throw new Exception($this->con->error);
		}
		$rawdata = array();
		$i=0;
		while($row = $result->fetch_object()){
            $rawdata[$i] = $row;
			$i++;
		}
		$result->close();
        $this->con->close();
		return $rawdata;
    }

	public function getById($id){
		$result=$this->con->query("CALL robotsGetById({$id})");
		if (!$result) {
			throw new Exception($this->con->error);
		}
		$rawdata = array();
		$i=0;
		while($row = $result->fetch_object()){
			$rawdata[$i] = $row;
			$i++;
		}
		$result->close();
		$this->con->close();
		return $rawdata;
    }

/*
    https://www.codewall.co.uk/php-mysqli-examples-the-ultimate-tutorial/
    i (entero), d (double), s (string), b	(blob) y se envía en paquetes
*/

	public function insert($data){
        try {
            $statement = $this->con->prepare("call new_procedure22 (?, ?, ?)");
            $statement->bind_param("ssi", $data->name, $data->type, $data->year);
            $statement->execute();
        } catch (mysqli_sql_exception $e){
            throw new Exception($e->getMessage());
        }finally{
            $this->con->close();
        }
    }


	/*
    public function createStudent($name,$username,$pass){
        if (!$this->isStudentExists($username)) {
            $password = md5($pass);
            $apikey = $this->generateApiKey();
            $stmt = $this->con->prepare("INSERT INTO students(name, username, password, api_key) values(?, ?, ?, ?)");
            $stmt->bind_param("ssss", $name, $username, $password, $apikey);
            $result = $stmt->execute();
            $stmt->close();
            if ($result) {
                return 0;
            } else {
                return 1;
            }
        } else {
            return 2;
        }
    }

    public function studentLogin($username,$pass){
        $password = md5($pass);
        $stmt = $this->con->prepare("SELECT * FROM students WHERE username=? and password=?");
        $stmt->bind_param("ss",$username,$password);
        $stmt->execute();
        $stmt->store_result();
        $num_rows = $stmt->num_rows;
        $stmt->close();
        return $num_rows>0;
    }

    public function getStudent($username){
        $stmt = $this->con->prepare("SELECT * FROM students WHERE username=?");
        $stmt->bind_param("s",$username);
        $stmt->execute();
        $student = $stmt->get_result()->fetch_assoc();
        $stmt->close();
        return $student;
    }

    private function isStudentExists($username) {
        $stmt = $this->con->prepare("SELECT id from students WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->store_result();
        $num_rows = $stmt->num_rows;
        $stmt->close();
        return $num_rows > 0;
    }

    private function getAssignments($id){
        $stmt = $this->con->prepare("SELECT * FFROM assignments WHERE students_id=?");
        $stmt->bind_param("i",$id);
        $stmt->execute();
        $assignments = $stmt->get_result()->fetch_assoc();
        return $assignments;
    }


    public function isValidStudent($api_key) {
        $stmt = $this->con->prepare("SELECT id from students WHERE api_key = ?");

        $stmt->bind_param("s", $api_key);
        $stmt->execute();
        $stmt->store_result();
        $num_rows = $stmt->num_rows;
        $stmt->close();
        return $num_rows > 0;
    }

    private function generateApiKey(){
        return md5(uniqid(rand(), true));
    }*/
}

?>