<?php
/*
User table structure
user_id
first_name
middle_name
last_name
dob
gender
country
address
mobile
email
password
*/
namespace Api;
class User
{
	public function getUserData($myconn){
        if($myconn)
        {            
            $sql = "select * from user";
                $result = $myconn->query($sql);
                if ($result->num_rows > 0) {
                     // output data of each row
                    $dataArray = array();
                     while($row = $result->fetch_assoc()) {
                         $dataArray[] = array(
                             'id' => $row["user_id"],
                             'first_name' =>  $row["first_name"],
                             'middle_name' =>  $row["middle_name"],
                             'last_name' =>  $row["last_name"],
                             'dob' =>  $row["dob"],
                             'gender' =>  $row["gender"],
                             'country' =>  $row["country"],
                             'address' =>  $row["address"],
                             'mobile' =>  $row["mobile"],
                             'email' =>  $row["email"],
                             'password' =>  $row["password"]
                         );
                     }
                  return $dataArray;   
                } else {
                     echo "0 results";
                }
        } else
        {
            return false; 
        }    
    }

    public function saveUserData($myconn, $dataArray)
    {
        if($myconn)
        {            
            
            $sql = "insert into user values('', '".$dataArray["first_name"]."','".$dataArray["middle_name"]."' , '".$dataArray["last_name"]."','".$dataArray["gender"]."','".$dataArray["country"]."', '".$dataArray["dob"]."', '".$dataArray["address"]."', ".$dataArray["mobile"].", '".$dataArray["email"]."','".$dataArray["password"]."','".$dataArray["user_type"]."','10-10-2010','20-10-2010','','');
            ";
                $result = $myconn->query($sql);
                if ($result) {
                    echo "New record created successfully";
                } else {
                     echo "Error";
                }
        } else
        {
            return false; 
        }    
    }
    public function saveContactData($myconn, $dataArray)
    {
        if($myconn)
        {            
            
            $sql = "insert into contact_us values('', '".$dataArray["name"]."','".$dataArray["email"]."' , '".$dataArray["mobile"]."','".$dataArray["subject"]."','".$dataArray["message"]."','10-10-2010','20-10-2010','','');
            ";
                $result = $myconn->query($sql);
                if ($result) {
                    echo "New record created successfully";
                } else {
                     echo "Error";
                }
        } else
        {
            return false; 
        }    
    }

}