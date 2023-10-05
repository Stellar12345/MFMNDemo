<?php defined('BASEPATH') OR exit('No direct script access allowed');

class News_model extends CI_Model{


	public function get_user_detail($id){
	
		$query = $this->db->get_where('ci_news', array('news_id' => $id));
		
		return $result = $query->row_array();
	}	
	public function get_count($post_id,$website_name){		
	
		$this->db->select('count(post_id) as post_count');
		
		$query = $this->db->get_where('ci_news', array('post_id' => $post_id,'website_name' => $website_name));		
		
		return $query->row_array();
	}	
	//-----------------------------------------------------
	function get_all()
	{

		$this->db->from('ci_news');

		$this->db->where('ci_news.is_deleted',0);

		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_news.news_id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_news.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		$this->db->order_by('ci_news.news_id','desc');

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

		$this->db->from('ci_news');

		$this->db->where('ci_news.is_deleted',0);
		
		$this->db->where('ci_news.is_active',1);
		
		$this->db->like("website_name", "nanban");

		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_news.news_id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_news.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		$this->db->order_by('ci_news.news_id','Desc');

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

		$this->db->from('ci_news');
		
		$this->db->where('ci_news.is_deleted',0);
		
		$this->db->where('ci_news.is_active',1);
			
		$this->db->where('ci_news.post_slug', $post_id);

		$this->db->order_by('ci_news.news_id','Asc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}	

	//-----------------------------------------------------
public function add_news($data){
	$this->db->insert('ci_news', $data);
	   $insert_id = $this->db->insert_id();

	return $insert_id;
}

	//---------------------------------------------------
	// Edit Admin Record
public function edit_news($data, $id){
	$this->db->where('news_id', $id);
	$this->db->update('ci_news', $data);
	return true;
}

	//-----------------------------------------------------
function change_status()
{		
	$this->db->set('is_active',$this->input->post('status'));
	$this->db->where('news_id',$this->input->post('id'));
	$this->db->update('ci_news');
} 

	//-----------------------------------------------------
function delete($id)
{		
	$this->db->set('is_deleted',1);
	$this->db->where('news_id',$id);
	$this->db->update('ci_news');
}
function add_news_post($post_id,$post_title, $post_description, $post_date, $post_link, $display_home, $post_event_desc, $website_name, $updated_at) {		$data = array('post_id' => $post_id, 'post_title' => $post_title, 'post_description' => $post_description, 'post_date' => $post_date, 'post_link' => $post_link,'post_event_desc' => $post_event_desc, 'display_home' => $display_home, 'website_name' => $website_name, 'updated_at' => $updated_at);		
$this->db->insert('ci_news', $data);	

return true;	
}
function update_news_post($post_id,$post_title, $post_description, $post_date, $post_link, $display_home, $post_event_desc,$website_name, $updated_at) {	

	$data = array('post_title' => $post_title, 'post_description' => $post_description, 'post_date' => $post_date, 'post_link' => $post_link, 'post_event_desc' => $post_event_desc, 'display_home' => $display_home, 'website_name' => $website_name, 'is_active' => '0', 'is_deleted' => '0', 'updated_at' => $updated_at);		
$this->db->where('post_id',$post_id);	
$this->db->update('ci_news', $data);	
return true;
}

function delete_news_post($post_id, $is_active, $is_deleted, $updated_at) {	
	$data = array('is_active' => '0', 'is_deleted' => '1', 	'updated_at' => $updated_at);
	$this->db->where('post_id',$post_id);	
	$this->db->update('ci_news', $data);	
	return true;	}

 function disable_news($id) {
	$data=array('display_home'=>0);
	$this->db->where_not_in('news_id', $id);
	$this->db->update('ci_news', $data); 
 }

}

?>