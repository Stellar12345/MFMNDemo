<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Ourpeople_model extends CI_Model{


	public function get_user_detail($id){
	
		$query = $this->db->get_where('ci_ourpeople', array('id' => $id));
		
		return $result = $query->row_array();
	}	

	//-----------------------------------------------------
	function get_all()
	{

		$this->db->from('ci_ourpeople');

		$this->db->where('ci_ourpeople.is_deleted',0);

		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_ourpeople.id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_ourpeople.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		$this->db->order_by('ci_ourpeople.id','desc');

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

		$this->db->from('ci_ourpeople');

		$this->db->where('ci_ourpeople.is_deleted',0);
		
		$this->db->where('ci_ourpeople.is_active',1);
		
		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_ourpeople.id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_ourpeople.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		$this->db->order_by('ci_ourpeople.id','Desc');

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

		$this->db->from('ci_ourpeople');
		
		$this->db->where('ci_ourpeople.is_deleted',0);
		
		$this->db->where('ci_ourpeople.is_active',1);
			
		$this->db->order_by('ci_ourpeople.id','Asc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}	

	//-----------------------------------------------------
public function add_ourpeople($data){
	$this->db->insert('ci_ourpeople', $data);
	return true;
}

	//---------------------------------------------------
	// Edit Admin Record
public function edit_ourpeople($data, $id){
	$this->db->where('id', $id);
	$this->db->update('ci_ourpeople', $data);
	return true;
}

	//-----------------------------------------------------
function change_status()
{		
	$this->db->set('is_active',$this->input->post('status'));
	$this->db->where('id',$this->input->post('id'));
	$this->db->update('ci_ourpeople');
} 

	//-----------------------------------------------------
function delete($id)
{		
	$this->db->set('is_deleted',1);
	$this->db->set('is_active',0);
	$this->db->where('id',$id);
	$this->db->update('ci_ourpeople');
}
function add_ourpeople_post($ourpeople_title, $ourpeople_description, $ourpeople_date, $ourpeople_designation, $member_type, $ourpeople_company_name, $updated_at) {		

$data = array('ourpeople_title' => $ourpeople_title, 'ourpeople_description' => $ourpeople_description, 'ourpeople_date' => $ourpeople_date, 'ourpeople_designation' => $ourpeople_designation, 'ourpeople_company_name' => $ourpeople_company_name,'member_type' => $member_type,  'updated_at' => $updated_at);		
$this->db->insert('ci_ourpeople', $data);		
return true;	
}
function update_ourpeople_post($id,$ourpeople_title, $ourpeople_description, $ourpeople_date, $ourpeople_designation, $member_type, $ourpeople_company_name, $updated_at) {		

$data = array('ourpeople_title' => $ourpeople_title, 'ourpeople_description' => $ourpeople_description, 'ourpeople_date' => $ourpeople_date, 'ourpeople_designation' => $ourpeople_designation, 'ourpeople_company_name' => $ourpeople_company_name, 'member_type' => $member_type,  'is_active' => '0', 'is_deleted' => '0', 'updated_at' => $updated_at);	
$this->db->where('id',$id);
$this->db->update('ci_ourpeople', $data);		
return true;	
}

function delete_ourpeople_post($id, $is_active, $is_deleted, $updated_at) {	
	$data = array('is_active' => '0', 'is_deleted' => '1',  'updated_at' => $updated_at);	
	$this->db->where('id',$id);	$this->db->update('ci_ourpeople', $data);	
	return true;	}



}

?>