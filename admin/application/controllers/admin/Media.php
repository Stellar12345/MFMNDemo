<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Media extends MY_Controller
{
    function __construct(){

        parent::__construct();
        auth_check(); // check login auth
        $this->rbac->check_module_access();

		$this->load->model('admin/Media_model', 'media_model');
    }

	//-----------------------------------------------------		
	function index($type=''){

		$this->session->set_userdata('filter_type',$type);
		$this->session->set_userdata('filter_keyword','');
		$this->session->set_userdata('filter_status','');
				
		$data['title'] = 'Media List';

		$this->load->view('admin/includes/_header');
		$this->load->view('admin/media/index', $data);
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

		$data['info'] = $this->media_model->get_all();

		//print_r(json_encode($data));

		$this->load->view('admin/media/list',$data); 
	}

	//----------------------------------------------------------- 
	function change_status(){

		//$this->rbac->check_operation_access(); // check opration permission

		$this->media_model->change_status();
	}
	
	//--------------------------------------------------
	function add(){

		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){			
		date_default_timezone_set('Asia/Kolkata');			
			$this->form_validation->set_rules('post_title', 'Post Title', 'trim|is_unique[ci_media.post_title]|required');
			$this->form_validation->set_rules('post_date', 'Post Date', 'trim|required');
			$this->form_validation->set_rules('post_description', 'Post Description', 'trim|required');
				
				if ($this->form_validation->run() == FALSE) {
					$data = array(
						'errors' => validation_errors()
					);
					$this->session->set_flashdata('errors', $data['errors']);
					redirect(base_url('admin/media/add'),'refresh');
				}
				else{					
				$string = $this->input->post('post_title');
				$slug = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);		
				$data = array(
					'post_title' => $this->input->post('post_title'),
					'post_description' => $this->input->post('post_description'),
					'post_slug' => strtolower($slug),
					'post_link' => $this->input->post('post_link'),
					'is_active' => 1,						
					'post_date' =>  date('Y-m-d H:i:s',strtotime($this->input->post('post_date'))),
				);

			
					$path="assets/img/";
			
					if(!empty($_FILES['post_image1']['name']))
					{			
						$result = $this->functions->file_insert($path, 'post_image1', 'image', '9097152');
						
						print_r($result);

						if($result['status'] == 1){
							$data['post_image1'] = $path.$result['msg'];
						}
						else{
							$this->session->set_flashdata('error', $result['msg']);
							redirect(base_url('admin/media'), 'refresh');
						}
					}
			
					if(!empty($_FILES['post_image']['name']))
					{			
						$result = $this->functions->file_insert($path, 'post_image', 'image', '9097152');
						
						print_r($result);

						if($result['status'] == 1){
							$data['post_image'] = $path.$result['msg'];
						}
						else{
							$this->session->set_flashdata('error', $result['msg']);
							redirect(base_url('admin/media'), 'refresh');
						}
					}
			

					$data = $this->security->xss_clean($data);
					$result = $this->media_model->add_media($data);
					if($result){
						
						if($status != 1){
							$this->session->set_flashdata('success', 'No websites selected to display. Media has been added successfully!');
						}else{
							$this->session->set_flashdata('success', 'Media has been added successfully!');
						}

						redirect(base_url('admin/media'));
					}
				}
			}
			else
			{
				$this->load->view('admin/includes/_header');
        		$this->load->view('admin/media/add');
        		$this->load->view('admin/includes/_footer');
			}
	}

	//--------------------------------------------------
	function edit($id=""){
		date_default_timezone_set('Asia/Kolkata');		
		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){			
		    $data = $this->media_model->get_user_detail($id);		 			
		    $post_title = $this->input->post('post_title');					
		
		    if($data['post_title'] != $post_title) {					
			    $this->form_validation->set_rules('post_title', 'Post Title', 'trim|is_unique[ci_media.post_title]|required');			
	    	}			
		    else{
		        $this->form_validation->set_rules('post_title', 'Post Title', 'trim|required');
		    }						
			$this->form_validation->set_rules('post_date', 'Post Date', 'trim|required');
			$this->form_validation->set_rules('post_description', 'Post Description', 'trim|required');
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/media/edit/'.$id),'refresh');
			}
			else{
			    $string = $this->input->post('post_title');
			    $slug = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);
				$data = array(
					'post_title' => $this->input->post('post_title'),
					'post_description' => $this->input->post('post_description'),										
					'post_slug' => strtolower($slug),
					'post_date' => date('Y-m-d H:i:s',strtotime($this->input->post('post_date'))),
					'post_link' => $this->input->post('post_link'),
					'is_active' => $this->input->post('status'),
				);

				$path="assets/img/";
			
				$old_logo = $this->input->post('old_logo');

				if(!empty($_FILES['post_image']['name']))
				{			
					$this->functions->delete_file($old_logo);

					$result = $this->functions->file_insert($path, 'post_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['post_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/media'), 'refresh');
					}
				}

				$old_image1 = $this->input->post('old_image1');
				if(!empty($_FILES['post_image1']['name']))
				{			
					$this->functions->delete_file($old_image1);

					$result = $this->functions->file_insert($path, 'post_image1', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['post_image1'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/media'), 'refresh');
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->media_model->edit_media($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Media has been updated successfully!');
					redirect(base_url('admin/media'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/media');
		}
		else{
			$data['media_model'] = $this->media_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/media/edit',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}

	function view($id=""){

		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){
			$this->form_validation->set_rules('post_title', 'PostTitle', 'trim|required');
			$this->form_validation->set_rules('post_description', 'PostDescription', 'trim|required');
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/media/edit/'.$id),'refresh');
			}
			else{
				$data = array(
					'post_title' => $this->input->post('post_title'),
					'post_description' => $this->input->post('post_description'),
					'is_active' => 1,
					'updated_at' => date('Y-m-d : h:m:s'),
				);

				$path="assets/img/";
			
				$old_logo = $this->input->post('old_logo');

				if(!empty($_FILES['post_image']['name']))
				{			
					$this->functions->delete_file($old_logo);

					$result = $this->functions->file_insert($path, 'post_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['post_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/media'), 'refresh');
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->media_model->edit_media($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Media has been updated successfully!');
					redirect(base_url('admin/media'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/media');
		}
		else{
			$data['media_model'] = $this->media_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/media/view',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}


    //------------------------------------------------------------
	function delete($id=''){
	   
		$this->rbac->check_operation_access(); // check opration permission

		$this->media_model->delete($id);

		$this->session->set_flashdata('success','Media has been Deleted Successfully.');	
		redirect('admin/media');
	}
	
}

?>