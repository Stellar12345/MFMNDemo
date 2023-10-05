<?php
//header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Ourjourney  extends REST_Controller {

	/**
	 * Get All Data from this method.
	 *
	 * @return Response
	*/
	public function __construct() {

	   parent::__construct();

	   $this->load->database();

	}

/* Our Jounrney Fetch*/

public function index_get($id = 0) {
    if(!empty($id)){

	$data = $this->db->where('is_active','1')->where('is_deleted','0')->order_by('id',"asc")->get_where("ci_ourjourney ", ['post_title' => str_replace("-", " ", $id)])->row_array();
		//$data['ourjourney _image'] =  base_url($data[$id]->ourjourney _image);
	}
	else{
		$data = $this->db->where('is_active','1')->where('is_deleted','0')->order_by('id',"asc")->get("ci_ourjourney ")->result(); //->where('is_active','1')
	}
	
	foreach($data as $key=>$val) {
		$date = 	$val->ourjourney_date;
		$month = date("M", strtotime($val->ourjourney_date));
		$year = date("Y", strtotime($val->ourjourney_date));
		//echo $newDate;
		$listArr[] =array(
			'id'=>$val->id,
			'ourjourney_title'=>$val->ourjourney_title,
			'ourjourney_description'=>$val->ourjourney_description,
			'ourjourney_month'=>$month,   
			'ourjourney_year'=>$year,   
			'is_active'=>$val->is_active,            
			'is_deleted'=>$val->is_deleted,                
			'updated_at'=>$val->updated_at,                

		);
	}
	
	$json_string = json_encode($listArr, JSON_PRETTY_PRINT);
	echo  $json_string;
	exit();
	//$this->response($data, REST_Controller::HTTP_OK);
}


}
