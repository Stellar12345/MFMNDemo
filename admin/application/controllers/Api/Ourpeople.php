<?php
//header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Ourpeople extends REST_Controller {

    

	  /**
     * Get All Data from this method.
     *
     * @return Response
    */

    public function __construct() {

       parent::__construct();

       $this->load->database();

    }

/* Our People Fetch*/
public function index_get($id = 0) {
	
	if(!empty($id)){

		$data = $this->db->where('is_active','1')->where('is_deleted','0')->order_by('id',"asc")->get_where("ci_ourpeople", ['ourpeople_description' => str_replace("-", " ", $id)])->row_array();
		//$data['ourpeople_image'] =  base_url($data[$id]->ourpeople_image);

	}else{

		$data = $this->db->where('is_active','1')->where('is_deleted','0')->order_by('id',"asc")->get("ci_ourpeople")->result(); //->where('is_active','1')
	}
	
	//print_r($data );
	//die();
	foreach($data as $key=>$val) {
		
		$string = $val->ourpeople_description;
		if (strlen($string) > 1) {

			// truncate string
			$stringCut = substr($string, 0, 1000);
			$endPoint = strrpos($stringCut, ' ');

			//if the string doesn't contain any space then it will cut without word basis.
			$string = $endPoint? substr($stringCut, 0, $endPoint) : substr($stringCut, 0);
			
		}
		
	$listArr[] =array(
		'id'=>$val->id,
		'ourpeople_title'=>$val->ourpeople_title,
		'ourpeople_description'=>$string,
		'ourpeople_image'=>$val->ourpeople_image,   
		'ourpeople_popup_image'=>$val->ourpeople_popup_image,   
		'ourpeople_date'=>$val->ourpeople_date,						
		'ourpeople_designation'=>$val->ourpeople_designation,                
		'ourpeople_company_name'=>$val->ourpeople_company_name,                
		'member_type'=>$val->member_type,                
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
