<?php 
defined('BASEPATH') OR exit('No direct script access allowed');
//header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
class Blog extends MY_Controller
{
    function __construct(){

        parent::__construct();
		$this->load->model('admin/blog_model', 'blog_model');
    }

/* Blog Fetch*/
function index($type=''){  
	
	ob_clean();
	
	
		 if(!empty($id)){

            $data = $this->db->where('is_active','1')->where('is_deleted','0')->order_by('id',"Desc")->get_where("ci_blog", ['blog_title' => str_replace("-", " ", $id)])->row_array();
			
			//$data['blog_image'] =  base_url($data[$id]->blog_image);

        }else{

            $data = $this->db->where('is_active','1')->where('is_deleted','0')->order_by('id',"Desc")->get("ci_blog")->result(); //->where('is_active','1')

        }
		$listArr=array();
		foreach($data as $key=>$val) {
			
		$category_id = 	$val->category_id;
		
		$category_ids =explode(',',$category_id);
		$items = array();	
		foreach($category_ids as $key=>$vals) {
		
		$category = $this->blog_model->get_cat_by_id($vals);
		$items[] = $category['category_name'];
		
		
		}
		$category_names = implode(', ',$items);
		
		$newDate = date("F d, Y", strtotime($val->blog_date));
		//echo $category['category_name'];
		//print_r($category_names);
		
		//die();
		$listArr[] =array(
			'id'=>$val->id,
			'blog_title'=>$val->blog_title,
			'blog_slug'=>$val->post_slug,
			'blog_description'=>$val->blog_description,
			'blog_date'=>$newDate,
			'blog_time'=>$val->blog_time,
			'blog_author'=>$val->blog_author,
			'blog_image'=>$val->blog_image,
			'category_name'=> $items,
			'is_active'=>$val->is_active,            
			'is_deleted'=>$val->is_deleted,                
			'updated_at'=>$val->updated_at,                

		);
		}
		
		$list['datalist'] = $listArr;
		$json_string = json_encode($list, JSON_PRETTY_PRINT);
		echo  $json_string;
		exit();
	}	
	
/* Single Blog*/
function single_blog(){  
	ob_clean();
		$blog_id = $this->uri->segment(4);//it will print php

		 $newsList =  $this->blog_model->get_single_list($blog_id);
		
			$listArr=array();
		    if(!empty($newsList)) {
				foreach($newsList as $key=>$val) {
					
					$category_id = 	$val['category_id'];
					
					
					
					$category_ids =explode(',',$category_id);
					$items = array();	
					foreach($category_ids as $key=>$vals) {
					
					$category = $this->blog_model->get_cat_by_id($vals);
					$items[] = $category['category_name'];
					
					
					}
					//print_r($items);
					
					$category_names = implode(', ',$items);
					if($val['blog_image'] != '') {
							$image_link = base_url($val['blog_image']);
						}
						else {
							$image_link = base_url("assets/img/no-image2.png");
						}
				
					$newDate = date("F d, Y", strtotime($val['blog_date']));
	
					$time_as =  intval($val['blog_time']) < 12 ? 'am' : 'pm'; 		
					$listArr[] =array(
						'id'=>$val['id'],
						'blog_title'=>$val['blog_title'],
						'blog_slug'=>$val['post_slug'],
						'blog_description'=>$val['blog_description'],
						'blog_image'=>$val['blog_image'],
						'blog_date'=>$newDate,
						'blog_time'=>$val['blog_time'].' ' .$time_as,
						'category_name'=> $category_names,
						'blog_author'=>$val['blog_author'],
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

/* Blog Category Fecth*/
function get_category($type=''){  

ob_clean();
 if(!empty($id)){

	$data = $this->db->where('is_active','1')->where('is_deleted','0')->order_by('id',"Desc")->get_where("ci_blog_category", ['category_name' => str_replace("-", " ", $id)])->row_array();
	
	//$data['blog_image'] =  base_url($data[$id]->blog_image);

}else{

	$data = $this->db->where('is_active','1')->where('is_deleted','0')->order_by('id',"Desc")->get("ci_blog_category")->result(); //->where('is_active','1')

}
$listArr=array();
foreach($data as $key=>$val) {
	
$category_id = 	$val->id;

$category = $this->blog_model->get_cat_by_id($category_id);

//echo $category['category_name'];
//print_r($category);
//die();
$listArr[] =array(
	'id'=>$val->id,
	'category_name'=>$val->category_name,
);
}

$list['Cat'] = $listArr;
$json_string = json_encode($list, JSON_PRETTY_PRINT);
echo  $json_string;
exit();
}	



}

?>


