<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Blog_model extends CI_Model{


	public function get_user_detail($id){
	
		$query = $this->db->get_where('ci_blog', array('id' => $id));
		
		return $result = $query->row_array();
	}	

	public function get_category_detail($id){
	
		$query = $this->db->get_where('ci_blog_category', array('id' => $id));
		
		return $result = $query->row_array();
	}	

	//-----------------------------------------------------
	function get_all()
	{

		$this->db->from('ci_blog');

		$this->db->where('ci_blog.is_deleted',0);

		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_blog.id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_blog.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		$this->db->order_by('ci_blog.id','desc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}
	//-----------------------------------------------------
	function get_all_categories()
	{

		$this->db->from('ci_blog_category');

		$this->db->where('ci_blog_category.is_deleted',0);

		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_blog_category.id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_blog_category.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		$this->db->order_by('ci_blog_category.id','desc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}

	
	//-----------------------------------------------------
	function get_all_category()
	{

		$this->db->from('ci_blog_category');

		$this->db->where('ci_blog_category.is_deleted',0);
		
		$this->db->where('ci_blog_category.is_active',1);

		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_blog_category.id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_blog_category.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		$this->db->order_by('ci_blog_category.id','desc');

		$query = $this->db->get();
		
		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
			
		}
					//print_r($module);


		return $module;
	}
	
	function get_active_list()
	{

		$this->db->from('ci_blog');

		$this->db->where('ci_blog.is_deleted',0);
		
		$this->db->where('ci_blog.is_active',1);
		
		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_blog.id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_blog.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		$this->db->order_by('ci_blog.id','Desc');

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

		$this->db->from('ci_blog');
		
		$this->db->where('ci_blog.is_deleted',0);
		
		$this->db->where('ci_blog.is_active',1);
			
		$this->db->where('ci_blog.post_slug', $post_id);

		$this->db->order_by('ci_blog.id','Desc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}

	//-----------------------------------------------------
public function add_blog($data){
	$this->db->insert('ci_blog', $data);
	return true;
}

public function add_blog_category($data){
	$this->db->insert('ci_blog_category', $data);
	return true;
}



	//---------------------------------------------------
	// Edit Admin Record
public function edit_blog($data, $id){
	$this->db->where('id', $id);
	$this->db->update('ci_blog', $data);
	return true;
}

	//---------------------------------------------------
	// Edit Admin Record
public function edit_blog_category($data, $id){
	$this->db->where('id', $id);
	$this->db->update('ci_blog_category', $data);
	return true;
}

	//-----------------------------------------------------
function change_status()
{		
	$this->db->set('is_active',$this->input->post('status'));
	$this->db->where('id',$this->input->post('id'));
	$this->db->update('ci_blog');
} 
function change_status_category()
{		
	$this->db->set('is_active',$this->input->post('status'));
	$this->db->where('id',$this->input->post('id'));
	$this->db->update('ci_blog_category');
} 

public function get_cat_by_id($id){

	$query = $this->db->get_where('ci_blog_category', array('id' => $id));

	return $result = $query->row_array();

}

	//-----------------------------------------------------
function delete($id)
{		
	$this->db->set('is_deleted',1);
	$this->db->set('is_active',0);
	$this->db->where('id',$id);
	$this->db->update('ci_blog');
	
}function delete_category($id)
{		
	$this->db->set('is_deleted',1);
	$this->db->where('id',$id);
	$this->db->update('ci_blog_category');
}
function add_blog_post($blog_title, $category_id, $blog_description, $blog_date, $blog_time,  $post_author, $blog_button_text, $blog_button_link, $updated_at) {		

$data = array('blog_title' => $blog_title, 'category_id' => $category_id, 'blog_description' => $blog_description, 'blog_date' => $blog_date, 'blog_time' => $blog_time, 'blog_author' => $post_author, 'blog_button_text' => $blog_button_text, 'blog_button_link' => $blog_button_link, 'updated_at' => $updated_at);		
$this->db->insert('ci_blog', $data);		
return true;	
}
function update_blog_post($id,$blog_title, $category_id, $blog_description, $blog_date, $blog_time, $post_author,  $blog_button_text, $blog_button_link, $updated_at) {		

$data = array('blog_title' => $blog_title, 'category_id' => $category_id,  'blog_description' => $blog_description, 'blog_date' => $blog_date, 'blog_time' => $blog_time, 'blog_author' => $post_author, 'blog_button_text' => $blog_button_text, 'blog_button_link' => $blog_button_link, 'is_active' => '0', 'is_deleted' => '0', 'updated_at' => $updated_at);	
$this->db->where('id',$id);
$this->db->update('ci_blog', $data);		
return true;	
}

function delete_blog_post($id, $is_active, $is_deleted, $updated_at) {	
	$data = array('is_active' => '0', 'is_deleted' => '1',  'updated_at' => $updated_at);	
	$this->db->where('id',$id);	$this->db->update('ci_blog', $data);	
	return true;	}



}
/*
function add_blog_category($category_name,$updated_at) {		

$data = array('category_name' => $category_name, 'updated_at' => $updated_at);		
$this->db->insert('ci_blog_category', $data);		
return true;	
}
*/
?>