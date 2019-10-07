<?php
class Cliente
{
    private $con;

    function __construct()
    {
        require_once dirname(__FILE__).'/DbConnect.php';
        try {
            $db = new DbConnect();
		    $this->con = $db->connect();
        } catch (mysqli_sql_exception $e){
            echo('{status:"error",message:"'.$e->getMessage().'"}');
        }
    }

	public function getAll(){
        try {
            $result=$this->con->query("CALL clienteGetAll()");
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
        } catch (mysqli_sql_exception $e){
            throw new Exception($e->getMessage());
        }finally{
            $this->con->close();
        }
    }

	public function getById($id){
		$result=$this->con->query("CALL clienteGetById({$id})");
		if (!$result) {
			throw new Exception($this->con->error);
        }
		$rawdata = $result->fetch_object();
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
            echo("0");
            $statement = $this->con->prepare("call clienteInsert (?, ?, ?, ?, ?)");
            echo("1");
            $statement->bind_param("ssiss", $data->nombre, $data->codigo, $data->habilitado, $data->creado_por ,$data->fecha_modificacion);
            echo("2");
            $statement->execute();
            echo("3");

        } catch (mysqli_sql_exception $e){
            echo("4");
            throw new Exception($e->getMessage());
        }finally{
            echo("5");
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
