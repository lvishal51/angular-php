<?php

namespace Api;
class Database
{
	private db_host = ‘localhost’; 
	private db_user = ‘root’; 
	private db_pass = ‘password’; 
	private db_name = ‘laptop’; 

   	public function connect()
    {
        if(!$this->con)
        {
            $myconn = @mysql_connect($this->db_host,$this->db_user,$this->db_pass);
            if($myconn)
            {
                $seldb = @mysql_select_db($this->db_name,$myconn);
                if($seldb)
                {
                    $this->con = true; 
					$sql = "SELECT id, name FROM laptop";
			        $result = $conn->query($sql);

			        if ($result->num_rows > 0) {
			             // output data of each row
			             while($row = $result->fetch_assoc()) {
			                 echo "<br> id: ". $row["id"]. " - Name: ". $row["name"]."<br>";
			             }
			        } else {
			             echo "0 results";
			        }

			        $conn->close();
                    
                    return true; 
                } else
                {
                    return false; 
                }
            } else
            {
                return false; 
            }
        } else
        {
            return true; 
        }
    }
  	public function disconnect()
	{
	    if($this->con)
	    {
	        if(@mysql_close())
	        {
	                       $this->con = false; 
	            return true; 
	        }
	        else
	        {
	            return false; 
	        }
	    }
	}
    public function select()        {
    }
    public function insert()        {   }
    public function delete()        {   }
    public function update()    {   }



}