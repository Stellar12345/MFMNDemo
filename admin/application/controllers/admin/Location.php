<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Location extends MY_Controller
{
	function __construct()
	{
		parent ::__construct();
		$this->load->library('datatable'); // loaded my custom serverside datatable library
		$this->load->model('admin/location_model', 'location_model');
	}

	// ---------------------------------------------------
	//                     COUNTRY
	//-----------------------------------------------------
	public function index()
	{
		$data['title'] = 'Country List';
		$this->load->view('admin/includes/_header', $data);
		$this->load->view('admin/location/country_list', $data);
		$this->load->view('admin/includes/_footer', $data);
	}

	//-------------------------------------------------------
	public function country_datatable_json()
	{				   					   
		$records = $this->location_model->get_all_locations();
		$data = array();
		$count=0;
		foreach ($records['data']  as $row) 
		{  
			$status = ($row['is_active'] == 0)? 'Active': 'In Active'.'<span>';						$country = $this->location_model->get_country_by_id($row['country_id']);						$state = $this->location_model->get_state_by_id($row['state_id']);						$city = $this->location_model->get_city_by_id($row['city_id']);
			$data[]= array(
				++$count,
				$row['latitude'],								$row['longitude'],								$row['name'],				$country['name'],				 				$state['name'],								$city['name'],
				'<span class="btn btn-xs btn-success" title="status">'.$status.'<span>',				
				'<a title="Edit" class="update btn btn-sm btn-warning" href="'.base_url('admin/location/country/edit/'.$row['id']).'"> <i class="fa fa-pencil-square-o"></i></a>
            	 <a title="Delete" class="delete btn btn-sm btn-danger" href="'.base_url('admin/location/country/del/'.$row['id']).'" onclick="return confirm(\'Do you want to delete ?\')" > <i class="fa fa-trash-o"></i></a>'
			);
		}
		$records['data']=$data;
		echo json_encode($records);						   
	}

	//-----------------------------------------------------
	public function country_add()
	{		$data['countries'] = $this->location_model->get_all_countries();
		if($this->input->post()){
			/*$this->form_validation->set_rules('latitude', 'latitude', 'trim|required');			$this->form_validation->set_rules('longitude', 'longitude', 'trim|required');			$this->form_validation->set_rules('name', 'name', 'trim|required');			$this->form_validation->set_rules('country', 'country', 'trim|required');			$this->form_validation->set_rules('state', 'state', 'trim|required');			$this->form_validation->set_rules('city', 'city', 'trim|required');
			$this->form_validation->set_error_delimiters('<div class="alert alert-danger">', '</div>');
			if ($this->form_validation->run() === FALSE) {
				$this->load->view('admin/includes/_header', $data);
				$this->load->view('admin/location/country_add', $data);
				$this->load->view('admin/includes/_footer', $data);
				return;
			}

			$slug = make_slug($this->input->post('country'));*/
			$data = array(
				'latitude' => $this->input->post('latitude'),
				'longitude' => $this->input->post('longitude'),
				'name' => $this->input->post('name'),								'info' => $this->input->post('info'),								'country_id' => $this->input->post('country'),								'state_id' => $this->input->post('state'),								'city_id' => $this->input->post('city'),
			);
			$data = $this->security->xss_clean($data);
			$result = $this->location_model->add_country($data);
			$this->session->set_flashdata('success','Location has been added successfully');
			redirect(base_url('admin/location'));
		}
		else{
			$data['title'] = 'Add Country';
			$this->load->view('admin/includes/_header', $data);
			$this->load->view('admin/location/country_add', $data);
			$this->load->view('admin/includes/_footer', $data);
		}
	}

	//-----------------------------------------------------
	public function country_edit($id=0)
	{
		$data['countries'] = $this->location_model->get_all_countries();								//print_r($data);		
		if($this->input->post()){		/*
			$this->form_validation->set_rules('country', 'country', 'trim|required');
			$this->form_validation->set_error_delimiters('<div class="alert alert-danger">', '</div>');
			if ($this->form_validation->run() === FALSE) {
				$this->load->view('admin/includes/_header', $data);
				$this->load->view('admin/location/country_edit', $data);
				$this->load->view('admin/includes/_footer', $data);
				return;
			}

			$slug = make_slug($this->input->post('country'));*/
			$data = array(
				'latitude' => $this->input->post('latitude'),				'longitude' => $this->input->post('longitude'),				'name' => $this->input->post('name'),								'info' => $this->input->post('info'),								'country_id' => $this->input->post('country'),								'state_id' => $this->input->post('state'),								'city_id' => $this->input->post('city'),
			);
			$data = $this->security->xss_clean($data);
			$result = $this->location_model->edit_country($data, $id);
			$this->session->set_flashdata('success','Country has been updated successfully');
			redirect(base_url('admin/location'));
		}
		else{
			$data['title'] = 'Update Country';						$data['locations'] 	= 	$this->location_model->get_locations_by_id($id);								/*	$details = $data['locations'][0];						$data['states'] = $this->location_model->get_all_states();					$data['cities'] = $this->location_model->get_all_cities($details['state_id']);*/	
			$this->load->view('admin/includes/_header', $data);
			$this->load->view('admin/location/country_edit', $data);
			$this->load->view('admin/includes/_footer', $data);
		}
	}

	//-----------------------------------------------------
	public function country_del($id = 0)
	{
		$this->db->delete('ci_location', array('id' => $id));
		$this->session->set_flashdata('success', 'Location has been Deleted Successfully!');
		redirect(base_url('admin/location'));
	}

	// ---------------------------------------------------
	//                     STATE
	//-----------------------------------------------------

	function state()
	{
		$data['title'] = 'State List';
		$this->load->view('admin/includes/_header', $data);
		$this->load->view('admin/location/state_list', $data);
		$this->load->view('admin/includes/_footer', $data);
	}

	//-------------------------------------------------------
	public function state_datatable_json()
	{				   					   
		$records = $this->location_model->get_all_states();
		$data = array();
		$count=0;
		foreach ($records['data']  as $row) 
		{  
			$status = ($row['status'] == 0)? 'Inactive': 'Active'.'<span>';
			$data[]= array(
				++$count,
				get_country_name($row['country_id']),
				$row['name'],
				'<span class="btn btn-xs btn-success" title="status">'.$status.'<span>',				
				'<a title="Edit" class="update btn btn-sm btn-warning" href="'.base_url('admin/location/state/edit/'.$row['id']).'"> <i class="fa fa-pencil-square-o"></i></a>
            	 <a title="Delete" class="delete btn btn-sm btn-danger" href="'.base_url('admin/location/state/del/'.$row['id']).'" onclick="return confirm(\'Do you want to delete ?\')"> <i class="fa fa-trash-o"></i></a>'
			);
		}
		$records['data']=$data;
		echo json_encode($records);						   
	}

	//-----------------------------------------------------
	public function state_add()
	{
		if($this->input->post()){
			$this->form_validation->set_rules('country', 'country', 'trim|required');
			$this->form_validation->set_rules('state', 'state', 'trim|is_unique[ci_states.name]|required');
			$this->form_validation->set_error_delimiters('<div class="alert alert-danger">', '</div>');
			if ($this->form_validation->run() === FALSE) {
				$this->load->view('admin/includes/_header', $data);
				$this->load->view('admin/location/state_add', $data);
				$this->load->view('admin/includes/_footer', $data);
				return;
			}

			$data = array(
				'name' => ucfirst($this->input->post('state')),
				'slug' => make_slug($this->input->post('state')),
				'country_id' => $this->input->post('country'),
			);
			$data = $this->security->xss_clean($data);
			$result = $this->location_model->add_state($data);
			$this->session->set_flashdata('success','State has been added successfully');
			redirect(base_url('admin/location/state'));
		}
		else{
			$data['countries'] = $this->location_model->get_countries_list(); 
			$data['title'] = 'Add State';
			$this->load->view('admin/includes/_header', $data);
			$this->load->view('admin/location/state_add', $data);
			$this->load->view('admin/includes/_footer', $data);
		}
	}

	//-----------------------------------------------------
	public function state_edit($id=0)
	{

		if($this->input->post()){
			$this->form_validation->set_rules('country', 'country', 'trim|required');
			$this->form_validation->set_rules('state', 'state', 'trim|required');
			$this->form_validation->set_error_delimiters('<div class="alert alert-danger">', '</div>');
			if ($this->form_validation->run() === FALSE) {
				$this->load->view('admin/includes/_header', $data);
				$this->load->view('admin/location/state_edit', $data);
				$this->load->view('admin/includes/_footer', $data);
				return;
			}

			$data = array(
				'name' => ucfirst($this->input->post('state')),
				'slug' => make_slug($this->input->post('state')),
				'country_id' => $this->input->post('country'),
			);
			$data = $this->security->xss_clean($data);
			$result = $this->location_model->edit_state($data, $id);

			if($result){
				$this->session->set_flashdata('success','State has been updated successfully');
				redirect(base_url('admin/location/state'));
			}
			
		}
		else{
			$data['title'] = 'Update State';
			$data['countries'] = $this->location_model->get_countries_list(); 
			$data['state'] = $this->location_model->get_state_by_id($id);
			$this->load->view('admin/includes/_header', $data);
			$this->load->view('admin/location/state_edit', $data);
			$this->load->view('admin/includes/_footer', $data);
		}
	}

	//-----------------------------------------------------
	public function state_del($id = 0)
	{
		$this->db->delete('ci_states', array('id' => $id));
		$this->session->set_flashdata('success', 'State has been Deleted Successfully!');
		redirect(base_url('admin/location/state'));
	}

	// ---------------------------------------------------
	//                     CITY
	//-----------------------------------------------------

	function city()
	{
		$data['title'] = 'City List';
		$this->load->view('admin/includes/_header', $data);
		$this->load->view('admin/location/city_list', $data);
		$this->load->view('admin/includes/_footer', $data);
	}

	//-------------------------------------------------------
	public function city_datatable_json()
	{				   					   
		$records = $this->location_model->get_all_cities();
		$data = array();
		$count=0;
		foreach ($records['data']  as $row) 
		{  
			$status = ($row['status'] == 0)? 'Inactive': 'Active'.'<span>';
			$data[]= array(
				++$count,
				get_state_name($row['state_id']),
				$row['name'],
				'<span class="btn btn-xs btn-success" title="status">'.$status.'<span>',				
				'<a title="Edit" class="update btn btn-sm btn-warning" href="'.base_url('admin/location/city/edit/'.$row['id']).'"> <i class="fa fa-pencil-square-o"></i></a>
				<a title="Delete" class="delete btn btn-sm btn-danger" href="'.base_url('admin/location/city/del/'.$row['id']).'" onclick="return confirm(\'Do you want to delete ?\')"> <i class="fa fa-trash-o"></i></a>'
			);
		}
		$records['data']=$data;
		echo json_encode($records);						   
	}

	//-----------------------------------------------------
	public function city_add()
	{
		if($this->input->post()){
			$this->form_validation->set_rules('city', 'city', 'trim|is_unique[ci_cities.name]|required');
			$this->form_validation->set_rules('state', 'state', 'trim|required');
			$this->form_validation->set_error_delimiters('<div class="alert alert-danger">', '</div>');
			if ($this->form_validation->run() === FALSE) {
				$this->load->view('admin/includes/_header', $data);
				$this->load->view('admin/location/city_add', $data);
				$this->load->view('admin/includes/_footer', $data);
				return;
			}

			$data = array(
				'name' => ucfirst($this->input->post('city')),
				'slug' => make_slug($this->input->post('city')),
				'state_id' => $this->input->post('state'),
			);
			$data = $this->security->xss_clean($data);
			$result = $this->location_model->add_city($data);
			$this->session->set_flashdata('success','City has been added successfully');
			redirect(base_url('admin/location/city'));
		}
		else{
			$data['title'] = 'Add City';
			$data['states'] = $this->location_model->get_states_list();
			$this->load->view('admin/includes/_header', $data);
			$this->load->view('admin/location/city_add', $data);
			$this->load->view('admin/includes/_footer', $data);
		}
	}

	//-----------------------------------------------------
	public function city_edit($id=0)
	{
		if($this->input->post()){
			$this->form_validation->set_rules('city', 'city', 'trim|required');
			$this->form_validation->set_rules('state', 'state', 'trim|required');
			$this->form_validation->set_error_delimiters('<div class="alert alert-danger">', '</div>');
			if ($this->form_validation->run() === FALSE) {
				$this->load->view('admin/includes/_header', $data);
				$this->load->view('admin/location/city_edit', $data);
				$this->load->view('admin/includes/_footer', $data);
				return;
			}

			$data = array(
				'name' => ucfirst($this->input->post('city')),
				'slug' => make_slug($this->input->post('city')),
				'state_id' => $this->input->post('state'),
			);
			$data = $this->security->xss_clean($data);
			$result = $this->location_model->edit_city($data, $id);
			$this->session->set_flashdata('success','City has been updated successfully');
			redirect(base_url('admin/location/city'));
		}
		else{
			$data['title'] = 'Update City';
			$data['states'] = $this->location_model->get_states_list();
			$data['city'] = $this->location_model->get_city_by_id($id);
			$this->load->view('admin/includes/_header', $data);
			$this->load->view('admin/location/city_edit', $data);
			$this->load->view('admin/includes/_footer', $data);
		}
	}

	//-----------------------------------------------------
	public function city_del($id = 0)
	{
		$this->db->delete('ci_cities', array('id' => $id));
		$this->session->set_flashdata('success', 'City has been Deleted Successfully!');
		redirect(base_url('admin/location/city'));
	}

}

?>