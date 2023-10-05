<?php
//header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
defined('BASEPATH') OR exit('No direct script access allowed');


class Allcountry extends MY_Controller {

	  /**
     * Get All Data from this method.
     *
     * @return Response
    */

    public function __construct() {

       parent::__construct();

       $this->load->database();

    }

/* Countries All Fetch*/
public function index($id = 0)
{
    $query = $this->db->where('status', '1')->order_by('id', 'asc')->get('ci_countries');

    if ($query->num_rows() > 0) {
        $data = $query->result_array();

        $listArr = array();
        foreach ($data as $val) {
            $listArr[] = array(
                'c_id' => $val['id'],
                'c_name' => $val['name'],
            );
        }

        $json_string = json_encode($listArr, JSON_PRETTY_PRINT);
        echo $json_string;
        exit();
    } else {
        echo "No data found";
        exit();
    }
}

/* States Fetch Based on Country*/
public function states($id)
{
    $query = $this->db->where('status', '1')->where('country_id', $id)->order_by('id', 'asc')->get('ci_states');

    if ($query->num_rows() > 0) {
        $data = $query->result_array();

        $listArr = array();
        foreach ($data as $val) {
            $listArr[] = array(
                'state_id' => $val['id'],
                'state_name' => $val['name'],
            );
        }

        $json_string = json_encode($listArr, JSON_PRETTY_PRINT);
        echo $json_string;
        exit();
    } else {
        echo "No states found for the provided country ID";
        exit();
    }
}

/* City Fetch Based on State ID*/
public function city($id)
{
    $query = $this->db->where('status', '1')->where('state_id', $id)->order_by('id', 'asc')->get('ci_cities');

    if ($query->num_rows() > 0) {
        $data = $query->result_array();

        $listArr = array();
        foreach ($data as $val) {
            $listArr[] = array(
                'city_id' => $val['id'],
                'city_name' => $val['name'],
            );
        }

        $json_string = json_encode($listArr, JSON_PRETTY_PRINT);
        echo $json_string;
        exit();
    } else {
        echo "No city found for the provided State ID";
        exit();
    }
}




}
