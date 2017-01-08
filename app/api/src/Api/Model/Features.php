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
