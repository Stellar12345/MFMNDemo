<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Slider extends MY_Controller
{
    function __construct(){

        parent::__construct();
        auth_check(); // check login auth
        $this->rbac->check_module_access();

		$this->load->model('admin/Slider_model', 'slider_model');
    }

	//-----------------------------------------------------		
	function index($type=''){

		$this->session->set_userdata('filter_type',$type);
		$this->session->set_userdata('filter_keyword','');
		$this->session->set_userdata('filter_status','');
				
		$data['title'] = 'Slider List';

		$this->load->view('admin/includes/_header');
		$this->load->view('admin/slider/index', $data);
		$this->load->view('admin/includes/_footer');
	}

	//---------------------------------------------------------
	function filterdata(){

		$this->session->set_userdata('filter_type',$this->input->post('type'));
		$this->session->set_userdata('filter_status',$this->input->post('status'));
		$this->session->set_userdata('filter_keyword',$this->input->post('keyword'));
	}

	//--------------------------------------------------		
	function list_data(){

		$data['info'] = $this->slider_model->get_all();

		//print_r(json_encode($data));

		$this->load->view('admin/slider/list',$data); 
	}

	//----------------------------------------------------------- 
	function change_status(){

		//$this->rbac->check_operation_access(); // check opration permission

		$this->slider_model->change_status();
	}
	
	//--------------------------------------------------
	function add(){

		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){			
		date_default_timezone_set('Asia/Kolkata');			
			$this->form_validation->set_rules('slider_title', 'Slider Title', 'trim|is_unique[ci_slider.slider_title]|required');
			$this->form_validation->set_rules('slider_description', 'Slider Description', 'trim|required');
				
				if ($this->form_validation->run() == FALSE) {
					$data = array(
						'errors' => validation_errors()
					);
					$this->session->set_flashdata('errors', $data['errors']);
					redirect(base_url('admin/slider/add'),'refresh');
				}
				else{					
				$string = $this->input->post('slider_title');	
				$status = $this->input->post('status');				
				$slug = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);		
				$websiteString = implode(', ', $this->input->post('websites'));
					$data = array(
						'slider_title' => $this->input->post('slider_title'),
						'slider_description' => $this->input->post('slider_description'),
						'slider_button_text' => $this->input->post('slider_button_text'),
						'slider_button_link' => $this->input->post('slider_button_link'),
						'is_active' => $this->input->post('status'),//1,						
						'slider_date' => date('Y-m-d : h:m:s'),
						'updated_at' => date('Y-m-d : h:m:s'),												
					);

			
					$path="assets/img/";
			
					if(!empty($_FILES['slider_image']['name']))
					{			
						$result = $this->functions->file_insert($path, 'slider_image', 'image', '9097152');
						
						print_r($result);

						if($result['status'] == 1){
							$data['slider_image'] = $path.$result['msg'];
						}
						else{
							$this->session->set_flashdata('error', $result['msg']);
							redirect(base_url('admin/slider'), 'refresh');
						}
					}
			

					$data = $this->security->xss_clean($data);
					$result = $this->slider_model->add_slider($data);
					if($result){
						
						if($status != 1){
							$this->session->set_flashdata('success', 'Slider has been added successfully!');
						}else{
							$this->session->set_flashdata('success', 'Slider has been added successfully!');
						}

						redirect(base_url('admin/slider'));
					}
				}
			}
			else
			{
				$this->load->view('admin/includes/_header');
        		$this->load->view('admin/slider/add');
        		$this->load->view('admin/includes/_footer');
			}
	}

	//--------------------------------------------------
	function edit($id=""){
		date_default_timezone_set('Asia/Kolkata');		
		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){			
		$data = $this->slider_model->get_user_detail($id);		 			
		$slider_title = $this->input->post('slider_title');					
		if($data['slider_title'] != $slider_title) {					
			$this->form_validation->set_rules('slider_title', 'Slider Title', 'trim|is_unique[ci_slider.slider_title]|required');			
		}			
		else 			
		{				
			$this->form_validation->set_rules('slider_title', 'Slider Title', 'trim|required');	
		}						
			//$this->form_validation->set_rules('slider_title', 'Slider Title', 'trim|required');
			$this->form_validation->set_rules('slider_description', 'Slider Description', 'trim|required');
			
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/slider/edit/'.$id),'refresh');
			}
			else{				
			$string = $this->input->post('slider_title');									
			$websiteString = implode(', ', $this->input->post('websites'));
				$data = array(
					'slider_title' => $this->input->post('slider_title'),
					'slider_description' => $this->input->post('slider_description'),		
					'slider_button_text' => $this->input->post('slider_button_text'),
					'slider_button_link' => $this->input->post('slider_button_link'),					
					'updated_at' => date('Y-m-d : h:m:s'),
				);

				$path="assets/img/";
			
				$old_logo = $this->input->post('old_logo');

				if(!empty($_FILES['slider_image']['name']))
				{			
					$this->functions->delete_file($old_logo);

					$result = $this->functions->file_insert($path, 'slider_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['slider_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/slider'), 'refresh');
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->slider_model->edit_slider($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Admin has been updated successfully!');
					redirect(base_url('admin/slider'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/slider');
		}
		else{
			$data['slider_model'] = $this->slider_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/slider/edit',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}

	function view($id=""){

		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){
			$this->form_validation->set_rules('slider_title', 'SliderTitle', 'trim|required');
			$this->form_validation->set_rules('slider_description', 'SliderDescription', 'trim|required');
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/slider/edit/'.$id),'refresh');
			}
			else{
				$data = array(
					'slider_title' => $this->input->post('slider_title'),
					'slider_description' => $this->input->post('slider_description'),
					'is_active' => 1,
					'updated_at' => date('Y-m-d : h:m:s'),
				);

				$path="assets/img/";
			
				$old_logo = $this->input->post('old_logo');

				if(!empty($_FILES['slider_image']['name']))
				{			
					$this->functions->delete_file($old_logo);

					$result = $this->functions->file_insert($path, 'slider_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['slider_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/slider'), 'refresh');
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->slider_model->edit_slider($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Admin has been updated successfully!');
					redirect(base_url('admin/slider'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/slider');
		}
		else{
			$data['slider_model'] = $this->slider_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/slider/view',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}


    //------------------------------------------------------------
	function delete($id=''){
	   
		$this->rbac->check_operation_access(); // check opration permission

		$this->slider_model->delete($id);

		$this->session->set_flashdata('success','Slider has been Deleted Successfully.');	
		redirect('admin/slider');
	}
	
}

?>