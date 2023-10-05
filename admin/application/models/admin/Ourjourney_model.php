<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Ourjourney_model extends CI_Model{


	public function get_user_detail($id){
	
		$query = $this->db->get_where('ci_ourjourney', array('id' => $id));
		
		return $result = $query->row_array();
	}	

	//-----------------------------------------------------
	function get_all()
	{

		$this->db->from('ci_ourjourney');

		$this->db->where('ci_ourjourney.is_deleted',0);

		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_ourjourney.id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_ourjourney.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		$this->db->order_by('ci_ourjourney.id','desc');

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

		$this->db->from('ci_ourjourney');

		$this->db->where('ci_ourjourney.is_deleted',0);
		
		$this->db->where('ci_ourjourney.is_active',1);
		
		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_ourjourney.id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_ourjourney.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		$this->db->order_by('ci_ourjourney.id','Desc');

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

		$this->db->from('ci_ourjourney');
		
		$this->db->where('ci_ourjourney.is_deleted',0);
		
		$this->db->where('ci_ourjourney.is_active',1);
			
		$this->db->order_by('ci_ourjourney.id','Asc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}	

	//-----------------------------------------------------
public function add_ourjourney($data){
	$this->db->insert('ci_ourjourney', $data);
	return true;
}

	//---------------------------------------------------
	// Edit Admin Record
public function edit_ourjourney($data, $id){
	$this->db->where('id', $id);
	$this->db->update('ci_ourjourney', $data);
	return true;
}

	//-----------------------------------------------------
function change_status()
{		
	$this->db->set('is_active',$this->input->post('status'));
	$this->db->where('id',$this->input->post('id'));
	$this->db->update('ci_ourjourney');
} 

	//-----------------------------------------------------
function delete($id)
{		
	$this->db->set('is_deleted',1);
	$this->db->set('is_active',0);
	$this->db->where('id',$id);
	$this->db->update('ci_ourjourney');
}
function add_ourjourney_post($ourjourney_title, $ourjourney_description, $ourjourney_date, $updated_at) {		

$data = array('ourjourney_title' => $ourjourney_title, 'ourjourney_description' => $ourjourney_description, 'ourjourney_date' => $ourjourney_date, 'updated_at' => $updated_at);		
$this->db->insert('ci_ourjourney', $data);		
return true;	
}
function update_ourjourney_post($id,$ourjourney_title, $ourjourney_description, $ourjourney_date, $updated_at) {		

$data = array('ourjourney_title' => $ourjourney_title, 'ourjourney_description' => $ourjourney_description, 'ourjourney_date' => $ourjourney_date,  'is_active' => '0', 'is_deleted' => '0', 'updated_at' => $updated_at);	
$this->db->where('id',$id);
$this->db->update('ci_ourjourney', $data);		
return true;	
}

function delete_ourjourney_post($id, $is_active, $is_deleted, $updated_at) {	
	$data = array('is_active' => '0', 'is_deleted' => '1',  'updated_at' => $updated_at);	
	$this->db->where('id',$id);	$this->db->update('ci_ourjourney', $data);	
	return true;	}



}

?>