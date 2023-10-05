<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Gallery_model extends CI_Model{


	public function get_user_detail($id){
	
		$query = $this->db->get_where('ci_gallery', array('id' => $id));
		
		return $result = $query->row_array();
	}	

	//-----------------------------------------------------
	function get_all()
	{

		$this->db->from('ci_gallery');

		$this->db->where('ci_gallery.is_deleted',0);

		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_gallery.id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_gallery.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		$this->db->order_by('ci_gallery.id','desc');

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

		$this->db->from('ci_gallery');

		$this->db->where('ci_gallery.is_deleted',0);
		
		$this->db->where('ci_gallery.is_active',1);
		
		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_gallery.id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_gallery.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		$this->db->order_by('ci_gallery.id','Desc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}	
	
	function get_single_list($id)
	{

		$this->db->from('ci_gallery');
		
		$this->db->where('ci_gallery.is_deleted',0);
		
		$this->db->where('ci_gallery.is_active',1);
			
		$this->db->order_by('ci_gallery.id','Asc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}	

	//-----------------------------------------------------
public function add_gallery($data){
	$this->db->insert('ci_gallery', $data);
	return true;
}

	//---------------------------------------------------
	// Edit Admin Record
public function edit_gallery($data, $id){
	$this->db->where('id', $id);
	$this->db->update('ci_gallery', $data);
	return true;
}

	//-----------------------------------------------------
function change_status()
{		
	$this->db->set('is_active',$this->input->post('status'));
	$this->db->where('id',$this->input->post('id'));
	$this->db->update('ci_gallery');
} 

	//-----------------------------------------------------
function delete($id)
{		
	$this->db->set('is_deleted',1);
	$this->db->set('is_active',0);
	$this->db->where('id',$id);
	$this->db->update('ci_gallery');
}
function add_gallery_post($gallery_title, $updated_at) {		

$data = array('gallery_title' => $gallery_title, 'updated_at' => $updated_at);		
$this->db->insert('ci_gallery', $data);		
return true;	
}
function update_gallery_post($id,$gallery_title, $updated_at) {		

$data = array('gallery_title' => $gallery_title, 'is_active' => '0', 'is_deleted' => '0', 'updated_at' => $updated_at);	
$this->db->where('id',$id);
$this->db->update('ci_gallery', $data);		
return true;	
}

function delete_gallery_post($id, $is_active, $is_deleted, $updated_at) {	
	$data = array('is_active' => '0', 'is_deleted' => '1',  'updated_at' => $updated_at);	
	$this->db->where('id',$id);	$this->db->update('ci_gallery', $data);	
	return true;	}



}

?>