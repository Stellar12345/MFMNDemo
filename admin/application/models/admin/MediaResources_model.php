<?php defined('BASEPATH') OR exit('No direct script access allowed');

class MediaResources_model extends CI_Model{


	public function get_detail($id){
	
		$query = $this->db->get_where('ci_media_resources', array('media_id' => $id, 'media_type'=> 'media_resource'));
		
		return $result = $query->row_array();
	}	
	public function get_count($post_id,$website_name){		
	
		$this->db->select('count(media_id) as media_count');
		
		$query = $this->db->get_where('ci_media_resources.media_id', $post_id);		
		
		return $query->row_array();
	}	
	//-----------------------------------------------------
	function get_all()
	{

		$this->db->from('ci_media_resources');

		$this->db->where('ci_media_resources.is_deleted',0);
		$this->db->where('ci_media_resources.media_type','media_resource');

		$this->db->order_by('ci_media_resources.media_id','desc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}
	function get_all_cat_img()
	{

		$this->db->from('ci_media_resources_category_image');

		$this->db->where('ci_media_resources_category_image.is_deleted',0);

		$this->db->order_by('ci_media_resources_category_image.id','desc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}
	
	function get_active_list()
	{

		$this->db->from('ci_media_resources');

		$this->db->where('ci_media_resources.is_deleted',0);
		
		$this->db->where('ci_media_resources.media_type','media_resource');
		
		//$this->db->where('ci_media_resources.is_active',1);
		/*$this->db->like("website_name", "nanban");

		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_news.news_id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_news.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		*/$this->db->order_by('ci_media_resources.media_id','Desc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}	
	function get_category_list($post_id)
	{

		$this->db->from('ci_media_resources_category_image');

		$this->db->where('ci_media_resources_category_image.is_deleted',0);
				
		$this->db->order_by('ci_media_resources_category_image.id','Desc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}	
	
	function get_single_list($post_id)
	{

		$this->db->from('ci_media_resources');
		
		$this->db->where('ci_media_resources.is_deleted',0);
		
		$this->db->where('ci_media_resources.media_type','media_resource');
		
		//$this->db->where('ci_media_resources.is_active',1);
			
		$this->db->where('ci_media_resources.media_id', $post_id);

		$this->db->order_by('ci_media_resources.media_id','Asc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}	
	
	function get_category_signle_list($post_id)
	{

		$this->db->from('ci_media_resources_category_image');
		
		$this->db->where('ci_media_resources_category_image.is_deleted',0);
							
		$this->db->where('ci_media_resources_category_image.media_resource_id', $post_id);

		$this->db->order_by('ci_media_resources_category_image.id','Asc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}	

	//-----------------------------------------------------
public function add_media_resources($data){
	$this->db->insert('ci_media_resources', $data);
	return true;
}
	//-----------------------------------------------------
public function multi_media_resources($data){
	$this->db->insert_batch('ci_media_resources_category_image', $data);
	return true;
}

	//---------------------------------------------------
	// Edit Admin Record
public function edit_media_resources($data, $id){
	$this->db->where('media_id', $id);
	$this->db->update('ci_media_resources', $data);
	return true;
}

	//-----------------------------------------------------
/*function change_status()
{		
	$this->db->set('is_active',$this->input->post('status'));
	$this->db->where('news_id',$this->input->post('id'));
	$this->db->update('ci_news');
} */

	//-----------------------------------------------------
function delete($id)
{		
	$this->db->set('is_deleted',1);
	$this->db->where('media_id',$id);
	$this->db->update('ci_media_resources');
}
function delete_media($id)
{		
	$this->db->set('is_deleted',1);
	$this->db->where('id',$id);
	$this->db->update('ci_media_resources_category_image');
}
//function add_news_post($post_id,$post_title, $post_description, $post_date, $post_link, $website_name, $updated_at) {		$data = array('post_id' => $post_id, 'post_title' => $post_title, 'post_description' => $post_description, 'post_date' => $post_date, 'post_link' => $post_link, 'website_name' => $website_name, 'updated_at' => $updated_at);		$this->db->insert('ci_news', $data);		return true;	}
//function update_news_post($post_id,$post_title, $post_description, $post_date, $post_link, $website_name, $updated_at) {		$data = array('post_title' => $post_title, 'post_description' => $post_description, 'post_date' => $post_date, 'post_link' => $post_link, 'website_name' => $website_name, 'is_active' => '0', 'is_deleted' => '0', 'updated_at' => $updated_at);		$this->db->where('post_id',$post_id);	$this->db->update('ci_news', $data);		return true;	}

//function delete_news_post($post_id, $is_active, $is_deleted, $updated_at) {		$data = array('is_active' => '0', 'is_deleted' => '1',  'updated_at' => $updated_at);		$this->db->where('post_id',$post_id);	$this->db->update('ci_news', $data);		return true;	}



}

?>