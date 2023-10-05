<?php
//header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Gallery extends REST_Controller {
	  /**
     * Get All Data from this method.
     *
     * @return Response
    */
    public function __construct() {

       parent::__construct();

       $this->load->database();

    }
/* Gallery Fetch*/
public function index_get($id = 0) {
	if(!empty($id)){
		$data = $this->db->where('is_active','1')->where('is_deleted','0')->order_by('id',"Desc")->get_where("ci_gallery")->row_array();
		//$data['gallery_image'] =  base_url($data[$id]->gallery_image);
	}else{

		$data = $this->db->where('is_active','1')->where('is_deleted','0')->order_by('id',"Desc")->get("ci_gallery")->result(); //->where('is_active','1')
	}
	
	foreach($data as $key=>$val) {
	$listArr[] =array(
		'id'=>$val->id,
		'gallery_title'=>$val->gallery_title,
		'gallery_image'=>$val->gallery_image,   
		'gallery_popup_image'=>$val->gallery_popup_image,                
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
