<?php
/*
computer_parts structure
part_id
part_name
relatedwith_mainpart
album_id(references table parts_album)
part_cost
short_desc
long_desc
moreinfo_links
part_types(e.g disk types CD,DVD etc)
*/
namespace Api;
class ComputerParts
{
	public function getComputerParts($myconn)
    {
        if($myconn)
        {            
            $sql = "select * from computer_parts";
                $result = $myconn->query($sql);
                if ($result->num_rows > 0) {
                     // output data of each row
                    $dataArray = array();
                     while($row = $result->fetch_assoc()) {
                         $dataArray[] = array(
                             'part_id' => $row["part_id"],
                             'part_name' =>  $row["part_name"],
                             'relatedwith_mainpart' =>  $row["relatedwith_mainpart"],
                             'album_id' =>  $row["album_id"],
                             'part_cost' =>  $row["part_cost"],
                             'short_desc' =>  $row["short_desc"],
                             'long_desc' =>  $row["long_desc"],
                             'moreinfo_links' =>  $row["moreinfo_links"],
                             'part_types' =>  $row["part_types"]  
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