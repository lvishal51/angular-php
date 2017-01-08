<?php
/*
answers structure
ans_id
short_desc
long_desc
relatedwith_section
relatedwith_part(references table computer_parts)
reference(supporting links)
complexity
*/
namespace Api;
class Answers
{
	public function getAnswers($myconn)
    {
        if($myconn)
        {            
            $sql = "select * from answers";
                $result = $myconn->query($sql);
                if ($result->num_rows > 0) {
                     // output data of each row
                    $dataArray = array();
                     while($row = $result->fetch_assoc()) {
                         $dataArray[] = array(
                             'ans_id' => $row["ans_id"],
                             'short_desc' =>  $row["short_desc"],
                             'long_desc' =>  $row["long_desc"],
                             'relatedwith_section' =>  $row["relatedwith_section"],
                             'relatedwith_part' =>  $row["relatedwith_part"],
                             'reference' =>  $row["reference"],
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