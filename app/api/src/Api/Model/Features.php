<?php

namespace Api\Model;
use Api\database;
use Api\customer;

class Features
{
    protected $features;

    protected function getHref($id)
    {
        return './api/features/' . $id;
    }

    public function __construct($features)
    {
        $this->features = $features;
    }

    public function getFeatures()
    {
        $db = new Database();
        $dbCon = $db->connect();
        $customer = new Customer();
        $cutomerData = $customer-> getCustomerData($dbCon);
        $features = array();
        foreach ($this->features as $id => $feature) {
             $features[] = array(
                 'id' => $id,
                 'name' => $feature['name'],
                'href' => $this->getHref($id)
             );
        }     
        foreach ($cutomerData as $id2 => $customer) {
            $features[] = array(
                 'id' => $id,
                 'name' => $customer['name'],
                'href' => $this->getHref($id)
            );
        }
        return $features;
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
