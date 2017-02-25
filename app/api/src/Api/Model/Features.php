<?php

namespace Api\Model;
use Api\database;
use Api\user;

class Features
{
    protected $dataResponse;

    public function getUserData()
    {
        $db = new Database();
        $dbCon = $db->connect();
        $user = new User();
        $userData = $user-> getUserData($dbCon);
        $dataResponse = array();
        foreach ($userData as $id2 => $user) {
            $dataResponse[] = array(
                 'id' => $user['id'],
                 'name' => $user['first_name'],
            );
        }
        return $dataResponse;
    }
    public function saveUserData($row)
    {
        var_dump($row);
        $db = new Database();
        $dbCon = $db->connect();
        $user = new User();
        $dataArray = array(
         'first_name' =>  $row->data[0]->first_name,
         'middle_name' =>  $row->data[1]->middle_name,
         'last_name' =>  $row->data[2]->last_name,
         'gender' =>  $row->data[3]->gender,
         'country' =>  $row->data[4]->country,
         'dob' =>  $row->data[5]->dob,
         'address' =>  $row->data[6]->address,
         'mobile' =>  $row->data[7]->mobile,
         'email' =>  $row->data[8]->email,
         'password' =>  $row->data[9]->password,
         'user_type' =>  $row->data[10]->user_type                
        );
        //var_dump($dataArray['first_name']);
        $userData = $user-> saveUserData($dbCon, $dataArray);        
    }

    public function saveContactData($row)
    {
        var_dump($row);
        $db = new Database();
        $dbCon = $db->connect();
        $user = new User();
        $dataArray = array(
         'name' =>  $row->data[0]->name,
         'email' =>  $row->data[1]->email,
         'mobile' =>  $row->data[2]->mobile,
         'subject' =>  $row->data[3]->subject,
         'message' =>  $row->data[4]->message
        );
        
        $userData = $user-> saveContactData($dbCon, $dataArray);        
    }

    public function getFeature($id)
    {
        if (!array_key_exists($id, $this->features)) {
            return null;
        }
        return array_merge(
            array('id' => $id),
            $this->features[$id],
            array('href' => $this->getHref($id))
        );
    }
}
