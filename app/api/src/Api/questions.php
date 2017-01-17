<?php
/*
questions structure
ques_id
short_desc
long_desc
relatedwith_section (hardware/software etc)
relatedwith_part (references table questions)
complexity
*/
namespace Api;
class Questions
{
	public function getQuestions($myconn)
    {
        if($myconn)
        {            
            $sql = "select * from questions";
                $result = $myconn->query($sql);
                if ($result->num_rows > 0) {
                     // output data of each row
                    $dataArray = array();
                     while($row = $result->fetch_assoc()) {
                         $dataArray[] = array(
                             'ques_id' => $row["ques_id"],
                             'part_name' =>  $row["part_name"],
                             'short_desc' =>  $row["short_desc"],
                             'long_desc' =>  $row["long_desc"],
                             'relatedwith_section' =>  $row["relatedwith_section"],
                             'relatedwith_part' =>  $row["relatedwith_part"],
                             'complexity' =>  $row["complexity"]  
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