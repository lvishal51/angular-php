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
	public function getUserData($myconn)
    {
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

}