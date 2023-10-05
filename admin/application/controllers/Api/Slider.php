<?php
//header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Slider extends REST_Controller {

	/**
     * Get All Data from this method.
     *
     * @return Response
    */

    public function __construct() {

       parent::__construct();

       $this->load->database();

    }
	
/* Slider Fetch*/

public function index_get($id = 0) {

	if(!empty($id)){
		
		$data = $this->db->where('is_active','1')->where('is_deleted','0')->order_by('id',"asc")->get_where("ci_slider", ['post_title' => str_replace("-", " ", $id)])->row_array();
		//$data['slider_image'] =  base_url($data[$id]->slider_image);
		
	}else{

		$data = $this->db->where('is_active','1')->where('is_deleted','0')->order_by('id',"asc")->get("ci_slider")->result(); //->where('is_active','1')

	}
	
	$this->response($data, REST_Controller::HTTP_OK);

}
}
