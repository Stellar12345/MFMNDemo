<?php 
defined('BASEPATH') OR exit('No direct script access allowed');
//header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
class News extends MY_Controller
{
    function __construct(){

        parent::__construct();
				$this->load->model('admin/news_model', 'news_model');

    }

/* News Fetch*/
function index($type=''){  

ob_clean();

	 if(!empty($id)){

		$data = $this->db->where('is_active','1')->where('is_deleted','0')->where('post_type','1')->order_by('news_id',"Desc")->get_where("ci_news", ['post_title' => str_replace("-", " ", $id)])->row_array();
		
		//$data['post_image'] =  base_url($data[$id]->post_image);

	}else{

		$data = $this->db->where('is_active','1')->where('is_deleted','0')->where('post_type','1')->order_by('news_id',"Desc")->get("ci_news")->result(); //->where('is_active','1')

	}
	$listArr=array();
	foreach($data as $key=>$val) {
	$post_date = date('F d, Y',strtotime($val->post_date));

	//die();
	$listArr[] =array(
		'id'=>$val->news_id,
		'post_title'=>$val->post_title,
		'post_slug'=>$val->post_slug,
		'post_description'=>$val->post_description,
		'post_date'=>$post_date,
		'post_time'=>$val->post_time,
		'post_image'=>$val->post_image,
		'is_active'=>$val->is_active,            
		'is_deleted'=>$val->is_deleted,                
		'updated_at'=>$val->updated_at,                

	);
	}
	
	$json_string = json_encode($listArr, JSON_PRETTY_PRINT);
	echo  $json_string;
	exit();
}	

/* Events Fetch*/
function events($type=''){  
	ob_clean();
		 if(!empty($id)){

            $data = $this->db->where('is_active','1')->where('is_deleted','0')->where('post_type','2')->order_by('news_id',"Desc")->get_where("ci_news", ['post_title' => str_replace("-", " ", $id)])->row_array();
			
			//$data['post_image'] =  base_url($data[$id]->post_image);

        }else{

            $data = $this->db->where('is_active','1')->where('is_deleted','0')->where('post_type','2')->order_by('news_id',"Desc")->get("ci_news")->result(); //->where('is_active','1')

        }
		$listArr=array();
		foreach($data as $key=>$val) {
		$post_date = date('F d, Y',strtotime($val->post_date));
	
		//die();
		$listArr[] =array(
			'id'=>$val->news_id,
			'post_title'=>$val->post_title,
			'post_slug'=>$val->post_slug,
			'post_description'=>$val->post_description,
			'post_date'=>$post_date,
			'post_time'=>$val->post_time,
			'post_image'=>$val->post_image,
			'post_link'=>$val->post_link,
			'is_active'=>$val->is_active,            
			'is_deleted'=>$val->is_deleted,                
			'updated_at'=>$val->updated_at,                

		);
		}
		
		$json_string = json_encode($listArr, JSON_PRETTY_PRINT);
		echo  $json_string;
		exit();
}

/* Events */	
function news_events($type=''){  
	
	ob_clean();
	
	
        $data = $this->db->where('is_active','1')->where('is_deleted','0')->where('display_home','1')->order_by('news_id',"Desc")->get("ci_news")->result(); //->where('is_active','1')

		$listArr=array();
		foreach($data as $key=>$val) {
		$post_date = date('F d, Y',strtotime($val->post_date));
	
		//die();
		$listArr[] =array(
			'id'=>$val->news_id,
			'post_title'=>$val->post_title,
			'post_slug'=>$val->post_slug,
			'post_description'=>$val->post_description,
			'post_date'=>$post_date,
			'post_time'=>$val->post_time,               

		);
		}
		
		$json_string = json_encode($listArr, JSON_PRETTY_PRINT);
		echo  $json_string;
		exit();
	}		
	
/* Signle News or Events Fetch */
function single_post(){  
	ob_clean();
		$post_id = $this->uri->segment(4);//it will print php

		 $newsList =  $this->news_model->get_single_list($post_id);
		
			$listArr=array();
		    if(!empty($newsList)) {
				foreach($newsList as $key=>$val) {
					
					
					if($val['post_image'] != '') {
							$image_link = base_url($val['post_image']);
						}
						else {
							$image_link = base_url("assets/img/no-image2.png");
						}
				
					$post_date = date('F d, Y',strtotime($val['post_date']));
						
					$time_as =  intval($val['post_time']) < 12 ? 'am' : 'pm'; 		
					$listArr[] =array(
						'id'=>$val['news_id'],
						'post_title'=>$val['post_title'],
						'post_slug'=>$val['post_slug'],
						'post_description'=>$val['post_description'],
						'post_date'=>$post_date,
						'post_time'=>$val['post_time']. ' ' .$time_as,
						'post_image'=>$image_link,
						'post_link'=>$val['post_link'],
						'is_active'=>$val['is_active'],            
						'is_deleted'=>$val['is_deleted'],                
						'updated_at'=>$val['updated_at'],              						

					);
				}
			} 
			$json_string = json_encode($listArr, JSON_PRETTY_PRINT);
            echo  $json_string;
			exit();
	}	

}

?>


