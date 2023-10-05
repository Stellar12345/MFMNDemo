<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Ourjourney extends MY_Controller
{
    function __construct(){

        parent::__construct();
        auth_check(); // check login auth
        $this->rbac->check_module_access();

		$this->load->model('admin/Ourjourney_model', 'ourjourney_model');
    }

	//-----------------------------------------------------		
	function index($type=''){

		$this->session->set_userdata('filter_type',$type);
		$this->session->set_userdata('filter_keyword','');
		$this->session->set_userdata('filter_status','');
				
		$data['title'] = 'Ourjourney List';

		$this->load->view('admin/includes/_header');
		$this->load->view('admin/ourjourney/index', $data);
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

		$data['info'] = $this->ourjourney_model->get_all();

		//print_r(json_encode($data));

		$this->load->view('admin/ourjourney/list',$data); 
	}

	//----------------------------------------------------------- 
	function change_status(){

		//$this->rbac->check_operation_access(); // check opration permission

		$this->ourjourney_model->change_status();
	}
	
	//--------------------------------------------------
	function add(){

		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){			
		date_default_timezone_set('Asia/Kolkata');			
			$this->form_validation->set_rules('ourjourney_title', 'Ourjourney Title', 'trim|is_unique[ci_ourjourney.ourjourney_title]|required');
			$this->form_validation->set_rules('ourjourney_description', 'Ourjourney Description', 'trim|required');
				
				if ($this->form_validation->run() == FALSE) {
					$data = array(
						'errors' => validation_errors()
					);
					$this->session->set_flashdata('errors', $data['errors']);
					redirect(base_url('admin/ourjourney/add'),'refresh');
				}
				else{					
				$string = $this->input->post('ourjourney_title');	
				$status = $this->input->post('status');				
				$slug = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);		
				$websiteString = implode(', ', $this->input->post('websites'));
					$data = array(
						'ourjourney_title' => $this->input->post('ourjourney_title'),
						'ourjourney_description' => $this->input->post('ourjourney_description'),
						'ourjourney_date' => $this->input->post('ourjourney_date'),
						'is_active' => $this->input->post('status'),//1,						
						//'ourjourney_date' => date('Y-m-d : h:m:s'),
						'updated_at' => date('Y-m-d : h:m:s'),												
					);

			
					/*$path="assets/img/";
			
					if(!empty($_FILES['ourjourney_image']['name']))
					{			
						$result = $this->functions->file_insert($path, 'ourjourney_image', 'image', '9097152');
						
						print_r($result);

						if($result['status'] == 1){
							$data['ourjourney_image'] = $path.$result['msg'];
						}
						else{
							$this->session->set_flashdata('error', $result['msg']);
							redirect(base_url('admin/ourjourney'), 'refresh');
						}
					}
					*/

					$data = $this->security->xss_clean($data);
					$result = $this->ourjourney_model->add_ourjourney($data);
					if($result){
						
						if($status != 1){
							$this->session->set_flashdata('success', 'Ourjourney has been added successfully!');
						}else{
							$this->session->set_flashdata('success', 'Ourjourney has been added successfully!');
						}

						redirect(base_url('admin/ourjourney'));
					}
				}
			}
			else
			{
				$this->load->view('admin/includes/_header');
        		$this->load->view('admin/ourjourney/add');
        		$this->load->view('admin/includes/_footer');
			}
	}

	//--------------------------------------------------
	function edit($id=""){
		date_default_timezone_set('Asia/Kolkata');		
		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){			
		$data = $this->ourjourney_model->get_user_detail($id);		 			
		$ourjourney_title = $this->input->post('ourjourney_title');					
		if($data['ourjourney_title'] != $ourjourney_title) {					
			$this->form_validation->set_rules('ourjourney_title', 'Ourjourney Title', 'trim|is_unique[ci_ourjourney.ourjourney_title]|required');			
		}			
		else 			
		{				
			$this->form_validation->set_rules('ourjourney_title', 'Ourjourney Title', 'trim|required');	
		}						
			//$this->form_validation->set_rules('ourjourney_title', 'Ourjourney Title', 'trim|required');
			$this->form_validation->set_rules('ourjourney_description', 'Ourjourney Description', 'trim|required');
			
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/ourjourney/edit/'.$id),'refresh');
			}
			else{				
			$string = $this->input->post('ourjourney_title');									
			$websiteString = implode(', ', $this->input->post('websites'));
				$data = array(
					'ourjourney_title' => $this->input->post('ourjourney_title'),
					'ourjourney_description' => $this->input->post('ourjourney_description'),		
					'ourjourney_date' => $this->input->post('ourjourney_date'),
					'updated_at' => date('Y-m-d : h:m:s'),
				);

				/*$path="assets/img/";
			
				$old_logo = $this->input->post('old_logo');

				if(!empty($_FILES['ourjourney_image']['name']))
				{			
					$this->functions->delete_file($old_logo);

					$result = $this->functions->file_insert($path, 'ourjourney_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['ourjourney_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/ourjourney'), 'refresh');
					}
				}
				*/

				$data = $this->security->xss_clean($data);
				$result = $this->ourjourney_model->edit_ourjourney($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Admin has been updated successfully!');
					redirect(base_url('admin/ourjourney'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/ourjourney');
		}
		else{
			$data['ourjourney_model'] = $this->ourjourney_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/ourjourney/edit',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}

	function view($id=""){

		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){
			$this->form_validation->set_rules('ourjourney_title', 'Ourjourney Title', 'trim|required');
			$this->form_validation->set_rules('ourjourney_description', 'Ourjourney Description', 'trim|required');
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/ourjourney/edit/'.$id),'refresh');
			}
			else{
				$data = array(
					'ourjourney_title' => $this->input->post('ourjourney_title'),
					'ourjourney_description' => $this->input->post('ourjourney_description'),
					'is_active' => 1,
					'updated_at' => date('Y-m-d : h:m:s'),
				);

				/*$path="assets/img/";
			
				$old_logo = $this->input->post('old_logo');

				if(!empty($_FILES['ourjourney_image']['name']))
				{			
					$this->functions->delete_file($old_logo);

					$result = $this->functions->file_insert($path, 'ourjourney_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['ourjourney_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/ourjourney'), 'refresh');
					}
				}
				*/


				$data = $this->security->xss_clean($data);
				$result = $this->ourjourney_model->edit_ourjourney($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Admin has been updated successfully!');
					redirect(base_url('admin/ourjourney'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/ourjourney');
		}
		else{
			$data['ourjourney_model'] = $this->ourjourney_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/ourjourney/view',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}


    //------------------------------------------------------------
	function delete($id=''){
	   
		$this->rbac->check_operation_access(); // check opration permission

		$this->ourjourney_model->delete($id);

		$this->session->set_flashdata('success','Our Journey has been Deleted Successfully.');	
		redirect('admin/ourjourney');
	}
	
}

?>