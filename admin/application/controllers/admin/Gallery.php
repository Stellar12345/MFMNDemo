<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Gallery extends MY_Controller
{
    function __construct(){

        parent::__construct();
        auth_check(); // check login auth
        $this->rbac->check_module_access();

		$this->load->model('admin/Gallery_model', 'gallery_model');
    }

	//-----------------------------------------------------		
	function index($type=''){

		$this->session->set_userdata('filter_type',$type);
		$this->session->set_userdata('filter_keyword','');
		$this->session->set_userdata('filter_status','');
				
		$data['title'] = 'Gallery List';

		$this->load->view('admin/includes/_header');
		$this->load->view('admin/gallery/index', $data);
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

		$data['info'] = $this->gallery_model->get_all();

		//print_r(json_encode($data));

		$this->load->view('admin/gallery/list',$data); 
	}

	//----------------------------------------------------------- 
	function change_status(){

		//$this->rbac->check_operation_access(); // check opration permission

		$this->gallery_model->change_status();
	}
	
	//--------------------------------------------------
	function add(){

		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){			
		date_default_timezone_set('Asia/Kolkata');			
			$this->form_validation->set_rules('gallery_title', 'Gallery Title', 'trim|is_unique[ci_gallery.gallery_title]|required');
				
				if ($this->form_validation->run() == FALSE) {
					$data = array(
						'errors' => validation_errors()
					);
					$this->session->set_flashdata('errors', $data['errors']);
					redirect(base_url('admin/gallery/add'),'refresh');
				}
				else{					
				$string = $this->input->post('gallery_title');	
				$status = $this->input->post('status');				
				$slug = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);	
				//$websiteString = implode(', ', $this->input->post('member_type'));
					$data = array(
						'gallery_title' => $this->input->post('gallery_title'),
						'is_active' => $this->input->post('status'),//1,						
						'updated_at' => date('Y-m-d : h:m:s'),							
					);

			
					$path="assets/img/";
			
					if(!empty($_FILES['gallery_image']['name']))
					{			
						$result = $this->functions->file_insert($path, 'gallery_image', 'image', '9097152');
						
						print_r($result);

						if($result['status'] == 1){
							$data['gallery_image'] = $path.$result['msg'];
						}
						else{
							$this->session->set_flashdata('error', $result['msg']);
							redirect(base_url('admin/gallery'), 'refresh');
						}
					}
			
			
					if(!empty($_FILES['gallery_popup_image']['name']))
					{			
						$result = $this->functions->file_insert($path, 'gallery_popup_image', 'image', '9097152');
						
						print_r($result);

						if($result['status'] == 1){
							$data['gallery_popup_image'] = $path.$result['msg'];
						}
						else{
							$this->session->set_flashdata('error', $result['msg']);
							redirect(base_url('admin/gallery'), 'refresh');
						}
					}
			

					$data = $this->security->xss_clean($data);
					$result = $this->gallery_model->add_gallery($data);
					if($result){
						
						if($status != 1){
							$this->session->set_flashdata('success', 'Gallery has been added successfully!');
						}else{
							$this->session->set_flashdata('success', 'Gallery has been added successfully!');
						}

						redirect(base_url('admin/gallery'));
					}
				}
			}
			else
			{
				$this->load->view('admin/includes/_header');
        		$this->load->view('admin/gallery/add');
        		$this->load->view('admin/includes/_footer');
			}
	}

	//--------------------------------------------------
	function edit($id=""){
		date_default_timezone_set('Asia/Kolkata');		
		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){			
		$data = $this->gallery_model->get_user_detail($id);		 			
		$gallery_title = $this->input->post('gallery_title');					
		if($data['gallery_title'] != $gallery_title) {					
			$this->form_validation->set_rules('gallery_title', 'Gallery Title', 'trim|is_unique[ci_gallery.gallery_title]|required');			
		}			
		else 			 
		{				
			$this->form_validation->set_rules('gallery_title', 'Gallery Title', 'trim|required');	
		}						
			
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/gallery/edit/'.$id),'refresh');
			}
			else{				
			$string = $this->input->post('gallery_title');									
			$websiteString = $this->input->post('member_type');									
			//$websiteString = implode(', ', $this->input->post('member_type'));
				$data = array(
					'gallery_title' => $this->input->post('gallery_title'),				
					'updated_at' => date('Y-m-d : h:m:s'),
				);

				$path="assets/img/";
			
				$old_logo = $this->input->post('old_logo');

				if(!empty($_FILES['gallery_image']['name']))
				{			
					$this->functions->delete_file($old_logo);

					$result = $this->functions->file_insert($path, 'gallery_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['gallery_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/gallery'), 'refresh');
					}
				}

				$old_logo1 = $this->input->post('old_logo1');

				if(!empty($_FILES['gallery_popup_image']['name']))
				{			
					$this->functions->delete_file($old_logo1);

					$result = $this->functions->file_insert($path, 'gallery_popup_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['gallery_popup_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/gallery'), 'refresh');
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->gallery_model->edit_gallery($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Admin has been updated successfully!');
					redirect(base_url('admin/gallery'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/gallery');
		}
		else{
			$data['gallery_model'] = $this->gallery_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/gallery/edit',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}

	function view($id=""){

		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){
			$this->form_validation->set_rules('gallery_title', 'GalleryTitle', 'trim|required');
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/gallery/edit/'.$id),'refresh');
			}
			else{
				$data = array(
					'gallery_title' => $this->input->post('gallery_title'),
					'gallery_description' => $this->input->post('gallery_description'),
					'is_active' => 1,
					'updated_at' => date('Y-m-d : h:m:s'),
				);

				$path="assets/img/";
			
				$old_logo = $this->input->post('old_logo');

				if(!empty($_FILES['gallery_image']['name']))
				{			
					$this->functions->delete_file($old_logo);

					$result = $this->functions->file_insert($path, 'gallery_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['gallery_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/gallery'), 'refresh');
					}
				}
				$old_logo1 = $this->input->post('old_logo1');

				if(!empty($_FILES['gallery_popup_image']['name']))
				{			
					$this->functions->delete_file($old_logo1);

					$result = $this->functions->file_insert($path, 'gallery_popup_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['gallery_popup_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/gallery'), 'refresh');
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->gallery_model->edit_gallery($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Admin has been updated successfully!');
					redirect(base_url('admin/gallery'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/gallery');
		}
		else{
			$data['gallery_model'] = $this->gallery_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/gallery/view',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}


    //------------------------------------------------------------
	function delete($id=''){
	   
		$this->rbac->check_operation_access(); // check opration permission

		$this->gallery_model->delete($id);

		$this->session->set_flashdata('success','Gallery has been Deleted Successfully.');	
		redirect('admin/gallery');
	}
	
}

?>