<?php
namespace Entities;

Class DBManager
{
    private $host;
    private $dbname;
    private $username;
    private $password;
    private $lastId;

	public $db;

    public function __construct($config = array()) {
        $this->host = $config['host'];
        $this->dbname = $config['dbname'];
        $this->username = $config['username'];
        $this->password = $config['password'];
	}

    public function dbconnect() {
        $this->db = new \PDO( "mysql:host=$this->host;dbname=$this->dbname;",
                $this->username, $this->password );
        /*
        $sql = 'SELECT * FROM score_board';
        $stmt = $this->db->query($sql);
        $results = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        print_r($results);
        */
    }

    public function dbcommit() {
    	$this->db->commit();
    }

}