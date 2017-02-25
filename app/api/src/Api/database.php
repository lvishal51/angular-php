<?php

namespace Api;
class Database
{
	private $db_host = 'localhost'; 
	private $db_user = 'root'; 
	private $db_pass = '123'; 
	private $db_name = 'laptop'; 
   	
    public function connect()
    {
        $myconn = mysqli_connect($this->db_host,$this->db_user,$this->db_pass,$this->db_name);
        return $myconn;
    }
  	public function disconnect()
	{
	}
    public function select()        {
    }
    public function insert()        {   }
    public function delete()        {   }
    public function update()    {   }



}