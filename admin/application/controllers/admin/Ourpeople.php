<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Ourpeople extends MY_Controller
{
    function __construct(){

        parent::__construct();
        auth_check(); // check login auth
        $this->rbac->check_module_access();

		$this->load->model('admin/Ourpeople_model', 'ourpeople_model');
    }

	//-----------------------------------------------------		
	function index($type=''){

		$this->session->set_userdata('filter_type',$type);
		$this->session->set_userdata('filter_keyword','');
		$this->session->set_userdata('filter_status','');
				
		$data['title'] = 'Ourpeople List';

		$this->load->view('admin/includes/_header');
		$this->load->view('admin/ourpeople/index', $data);
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

		$data['info'] = $this->ourpeople_model->get_all();

		//print_r(json_encode($data));

		$this->load->view('admin/ourpeople/list',$data); 
	}

	//----------------------------------------------------------- 
	function change_status(){

		//$this->rbac->check_operation_access(); // check opration permission

		$this->ourpeople_model->change_status();
	}
	
	//--------------------------------------------------
	function add(){

		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){			
		date_default_timezone_set('Asia/Kolkata');			
			$this->form_validation->set_rules('ourpeople_title', 'Ourpeople Title', 'trim|is_unique[ci_ourpeople.ourpeople_title]|required');
			$this->form_validation->set_rules('ourpeople_description', 'Ourpeople Description', 'trim|required');
				
				if ($this->form_validation->run() == FALSE) {
					$data = array(
						'errors' => validation_errors()
					);
					$this->session->set_flashdata('errors', $data['errors']);
					redirect(base_url('admin/ourpeople/add'),'refresh');
				}
				else{					
				$string = $this->input->post('ourpeople_title');	
				$status = $this->input->post('status');				
				$slug = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);	
				$websiteString = $this->input->post('member_type');									
				//$websiteString = implode(', ', $this->input->post('member_type'));
					$data = array(
						'ourpeople_title' => $this->input->post('ourpeople_title'),
						'ourpeople_description' => $this->input->post('ourpeople_description'),
						'ourpeople_designation' => $this->input->post('ourpeople_designation'),
						'ourpeople_company_name' => $this->input->post('ourpeople_company_name'),
						'member_type' => $websiteString,
						'is_active' => $this->input->post('status'),//1,						
						'ourpeople_date' => date('Y-m-d : h:m:s'),
						'updated_at' => date('Y-m-d : h:m:s'),							
					);

			
					$path="assets/img/";
			
					if(!empty($_FILES['ourpeople_image']['name']))
					{			
						$result = $this->functions->file_insert($path, 'ourpeople_image', 'image', '9097152');
						
						print_r($result);

						if($result['status'] == 1){
							$data['ourpeople_image'] = $path.$result['msg'];
						}
						else{
							$this->session->set_flashdata('error', $result['msg']);
							redirect(base_url('admin/ourpeople'), 'refresh');
						}
					}
			
			
					if(!empty($_FILES['ourpeople_popup_image']['name']))
					{			
						$result = $this->functions->file_insert($path, 'ourpeople_popup_image', 'image', '9097152');
						
						print_r($result);

						if($result['status'] == 1){
							$data['ourpeople_popup_image'] = $path.$result['msg'];
						}
						else{
							$this->session->set_flashdata('error', $result['msg']);
							redirect(base_url('admin/ourpeople'), 'refresh');
						}
					}
			

					$data = $this->security->xss_clean($data);
					$result = $this->ourpeople_model->add_ourpeople($data);
					if($result){
						
						if($status != 1){
							$this->session->set_flashdata('success', 'Ourpeople has been added successfully!');
						}else{
							$this->session->set_flashdata('success', 'Ourpeople has been added successfully!');
						}

						redirect(base_url('admin/ourpeople'));
					}
				}
			}
			else
			{
				$this->load->view('admin/includes/_header');
        		$this->load->view('admin/ourpeople/add');
        		$this->load->view('admin/includes/_footer');
			}
	}

	//--------------------------------------------------
	function edit($id=""){
		date_default_timezone_set('Asia/Kolkata');		
		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){			
		$data = $this->ourpeople_model->get_user_detail($id);		 			
		$ourpeople_title = $this->input->post('ourpeople_title');					
		if($data['ourpeople_title'] != $ourpeople_title) {					
			$this->form_validation->set_rules('ourpeople_title', 'Ourpeople Title', 'trim|is_unique[ci_ourpeople.ourpeople_title]|required');			
		}			
		else 			 
		{				
			$this->form_validation->set_rules('ourpeople_title', 'Ourpeople Title', 'trim|required');	
		}						
			//$this->form_validation->set_rules('ourpeople_title', 'Ourpeople Title', 'trim|required');
			$this->form_validation->set_rules('ourpeople_description', 'Ourpeople Description', 'trim|required');
			
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/ourpeople/edit/'.$id),'refresh');
			}
			else{				
			$string = $this->input->post('ourpeople_title');									
			$websiteString = $this->input->post('member_type');									
			//$websiteString = implode(', ', $this->input->post('member_type'));
				$data = array(
					'ourpeople_title' => $this->input->post('ourpeople_title'),
					'ourpeople_description' => $this->input->post('ourpeople_description'),		
					'ourpeople_designation' => $this->input->post('ourpeople_designation'),
					'ourpeople_company_name' => $this->input->post('ourpeople_company_name'),
					'member_type' => $websiteString,					
					'updated_at' => date('Y-m-d : h:m:s'),
				);

				$path="assets/img/";
			
				$old_logo = $this->input->post('old_logo');

				if(!empty($_FILES['ourpeople_image']['name']))
				{			
					$this->functions->delete_file($old_logo);

					$result = $this->functions->file_insert($path, 'ourpeople_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['ourpeople_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/ourpeople'), 'refresh');
					}
				}

				$old_logo1 = $this->input->post('old_logo1');

				if(!empty($_FILES['ourpeople_popup_image']['name']))
				{			
					$this->functions->delete_file($old_logo1);

					$result = $this->functions->file_insert($path, 'ourpeople_popup_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['ourpeople_popup_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/ourpeople'), 'refresh');
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->ourpeople_model->edit_ourpeople($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Admin has been updated successfully!');
					redirect(base_url('admin/ourpeople'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/ourpeople');
		}
		else{
			$data['ourpeople_model'] = $this->ourpeople_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/ourpeople/edit',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}

	function view($id=""){

		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){
			$this->form_validation->set_rules('ourpeople_title', 'OurpeopleTitle', 'trim|required');
			$this->form_validation->set_rules('ourpeople_description', 'OurpeopleDescription', 'trim|required');
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/ourpeople/edit/'.$id),'refresh');
			}
			else{
				$data = array(
					'ourpeople_title' => $this->input->post('ourpeople_title'),
					'ourpeople_description' => $this->input->post('ourpeople_description'),
					'is_active' => 1,
					'updated_at' => date('Y-m-d : h:m:s'),
				);

				$path="assets/img/";
			
				$old_logo = $this->input->post('old_logo');

				if(!empty($_FILES['ourpeople_image']['name']))
				{			
					$this->functions->delete_file($old_logo);

					$result = $this->functions->file_insert($path, 'ourpeople_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['ourpeople_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/ourpeople'), 'refresh');
					}
				}
				$old_logo1 = $this->input->post('old_logo1');

				if(!empty($_FILES['ourpeople_popup_image']['name']))
				{			
					$this->functions->delete_file($old_logo1);

					$result = $this->functions->file_insert($path, 'ourpeople_popup_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['ourpeople_popup_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/ourpeople'), 'refresh');
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->ourpeople_model->edit_ourpeople($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Admin has been updated successfully!');
					redirect(base_url('admin/ourpeople'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/ourpeople');
		}
		else{
			$data['ourpeople_model'] = $this->ourpeople_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/ourpeople/view',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}


    //------------------------------------------------------------
	function delete($id=''){
	   
		$this->rbac->check_operation_access(); // check opration permission

		$this->ourpeople_model->delete($id);

		$this->session->set_flashdata('success','Our People has been Deleted Successfully.');	
		redirect('admin/ourpeople');
	}
	
}

?>