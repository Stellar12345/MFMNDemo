<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Slider_model extends CI_Model{


	public function get_user_detail($id){
	
		$query = $this->db->get_where('ci_slider', array('id' => $id));
		
		return $result = $query->row_array();
	}	

	//-----------------------------------------------------
	function get_all()
	{

		$this->db->from('ci_slider');

		$this->db->where('ci_slider.is_deleted',0);

		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_slider.id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_slider.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		$this->db->order_by('ci_slider.id','desc');

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

		$this->db->from('ci_slider');

		$this->db->where('ci_slider.is_deleted',0);
		
		$this->db->where('ci_slider.is_active',1);
		
		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_slider.id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_slider.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		$this->db->order_by('ci_slider.id','Desc');

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

		$this->db->from('ci_slider');
		
		$this->db->where('ci_slider.is_deleted',0);
		
		$this->db->where('ci_slider.is_active',1);
			
		$this->db->order_by('ci_slider.id','Asc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}	

	//-----------------------------------------------------
public function add_slider($data){
	$this->db->insert('ci_slider', $data);
	return true;
}

	//---------------------------------------------------
	// Edit Admin Record
public function edit_slider($data, $id){
	$this->db->where('id', $id);
	$this->db->update('ci_slider', $data);
	return true;
}

	//-----------------------------------------------------
function change_status()
{		
	$this->db->set('is_active',$this->input->post('status'));
	$this->db->where('id',$this->input->post('id'));
	$this->db->update('ci_slider');
} 

	//-----------------------------------------------------
function delete($id)
{		
	$this->db->set('is_deleted',1);
	$this->db->where('id',$id);
	$this->db->update('ci_slider');
}
function add_slider_post($slider_title, $slider_description, $slider_date, $slider_button_text, $slider_button_link, $updated_at) {		

$data = array('slider_title' => $slider_title, 'slider_description' => $slider_description, 'slider_date' => $slider_date, 'slider_button_text' => $slider_button_text, 'slider_button_link' => $slider_button_link, 'updated_at' => $updated_at);		
$this->db->insert('ci_slider', $data);		
return true;	
}
function update_slider_post($id,$slider_title, $slider_description, $slider_date, $slider_button_text, $slider_button_link, $updated_at) {		

$data = array('slider_title' => $slider_title, 'slider_description' => $slider_description, 'slider_date' => $slider_date, 'slider_button_text' => $slider_button_text, 'slider_button_link' => $slider_button_link, 'is_active' => '0', 'is_deleted' => '0', 'updated_at' => $updated_at);	
$this->db->where('id',$id);
$this->db->update('ci_slider', $data);		
return true;	
}

function delete_slider_post($id, $is_active, $is_deleted, $updated_at) {	
	$data = array('is_active' => '0', 'is_deleted' => '1',  'updated_at' => $updated_at);	
	$this->db->where('id',$id);	$this->db->update('ci_slider', $data);	
	return true;	}



}

?>