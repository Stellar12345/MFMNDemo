<?php
//header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
defined('BASEPATH') OR exit('No direct script access allowed');


class Charitable_project extends MY_Controller {

    

	  /**
     * Get All Data from this method.
     *
     * @return Response
    */

    public function __construct() {

       parent::__construct();

       $this->load->database();

    }
    /**

     * Get All ourpeople Data from this method.

     *

     * @return Response

    */

public function index_get($id = 0)
{
    $query = $this->db->where('status', '1')->order_by('id', 'asc')->get('ci_projects');

    if ($query->num_rows() > 0) {
        $data = $query->result_array();

        $listArr = array();
        foreach ($data as $val) {
            $listArr[] = array(
                'projects_id' => $val['id'],
                'projects_name' => $val['name'],
            );
        }

        $json_string = json_encode($listArr, JSON_PRETTY_PRINT);
        
        $this->output
            ->set_content_type('application/json')
            ->set_output($json_string);
    } else {
        $this->output
            ->set_content_type('text/plain')
            ->set_output('No data found');
    }
}


}
