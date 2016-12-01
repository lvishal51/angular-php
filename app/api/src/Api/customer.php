<?php

namespace Api;
class Customer
{
	public function getCustomerData($myconn)
    {
        if($myconn)
        {            
            $sql = "select * from customer";
                $result = $myconn->query($sql);
                if ($result->num_rows > 0) {
                     // output data of each row
                    $dataArray = array();
                     while($row = $result->fetch_assoc()) {
                         $dataArray[] = array(
                             'id' => $row["id"],
                             'name' =>  $row["name"]
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