<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Recentnews extends MY_Controller
{
    function __construct(){

        parent::__construct();
        auth_check(); // check login auth
        $this->rbac->check_module_access();

		$this->load->model('admin/RecentNews_model', 'recentnews_model');
    }

	//-----------------------------------------------------		
	function index($type=''){

		$this->session->set_userdata('filter_type',$type);
		$this->session->set_userdata('filter_keyword','');
		$this->session->set_userdata('filter_status','');
				
		$data['title'] = 'News List';

		$this->load->view('admin/includes/_header');
		$this->load->view('admin/recentnews/index', $data);
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

		$data['info'] = $this->recentnews_model->get_all();

		//print_r(json_encode($data));

		$this->load->view('admin/recentnews/list',$data); 
	}

	//----------------------------------------------------------- 
	function change_status(){

		//$this->rbac->check_operation_access(); // check opration permission

		$this->recentnews_model->change_status();
	}
	
	//--------------------------------------------------
	function add(){

		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){			
		date_default_timezone_set('Asia/Kolkata');			
			$this->form_validation->set_rules('post_title', 'Post Title', 'trim|is_unique[ci_news.post_title]|required');
			$this->form_validation->set_rules('post_description', 'Post Description', 'trim|required');
				
				if ($this->form_validation->run() == FALSE) {
					$data = array(
						'errors' => validation_errors()
					);
					$this->session->set_flashdata('errors', $data['errors']);
					redirect(base_url('admin/recentnews/add'),'refresh');
				}
				else{					
				$string = $this->input->post('post_title');	
				$status = $this->input->post('status');				
				$slug = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);		
				//$websiteString = implode(', ', $this->input->post('websites'));
					$data = array(
						'post_title' => $this->input->post('post_title'),
						'post_description' => $this->input->post('post_description'),
						'post_slug' => strtolower($slug),
						'is_active' => $this->input->post('status'),//1,						
						'post_date' => date('Y-m-d : h:m:s'),
						'updated_at' => date('Y-m-d : h:m:s'),												
						'website_name' => 'nanban'//$websiteString,
					);

			
					$path="assets/img/";
			
					if(!empty($_FILES['post_image']['name']))
					{			
						$result = $this->functions->file_insert($path, 'post_image', 'image', '9097152');
						
						print_r($result);

						if($result['status'] == 1){
							$data['post_image'] = $path.$result['msg'];
						}
						else{
							$this->session->set_flashdata('error', $result['msg']);
							redirect(base_url('admin/recentnews'), 'refresh');
						}
					}
			

					$data = $this->security->xss_clean($data);
					$result = $this->recentnews_model->add_news($data);
					if($result){
						
						if($status != 1){
							$this->session->set_flashdata('success', 'No websites selected to display. Recent News has been added successfully!');
						}else{
							$this->session->set_flashdata('success', 'Recent News has been added successfully!');
						}

						redirect(base_url('admin/recentnews'));
					}
				}
			}
			else
			{
				$this->load->view('admin/includes/_header');
        		$this->load->view('admin/recentnews/add');
        		$this->load->view('admin/includes/_footer');
			}
	}

	//--------------------------------------------------
	function edit($id=""){
		date_default_timezone_set('Asia/Kolkata');		
		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){			$data = $this->recentnews_model->get_user_detail($id);		 			
		$post_title = $this->input->post('post_title');					
		if($data['post_title'] != $post_title) {					
			$this->form_validation->set_rules('post_title', 'Post Title', 'trim|is_unique[ci_news.post_title]|required');			
		}			
		else 			
		{				
			$this->form_validation->set_rules('post_title', 'Post Title', 'trim|required');	
		}						
			//$this->form_validation->set_rules('post_title', 'Post Title', 'trim|required');
			$this->form_validation->set_rules('post_description', 'Post Description', 'trim|required');
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/recentnews/edit/'.$id),'refresh');
			}
			else{				$string = $this->input->post('post_title');									
			$slug = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);		
			//$websiteString = implode(', ', $this->input->post('websites'));
				$data = array(
					'post_title' => $this->input->post('post_title'),
					'post_description' => $this->input->post('post_description'),										
					'post_slug' => strtolower($slug),
					'is_active' => $this->input->post('status'),
					'updated_at' => date('Y-m-d : h:m:s'),
					'website_name' => 'nanban'//$websiteString,
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
						redirect(base_url('admin/recentnews'), 'refresh');
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->recentnews_model->edit_news($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Recent News has been updated successfully!');
					redirect(base_url('admin/recentnews'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/news');
		}
		else{
			$data['recentnews_model'] = $this->recentnews_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/recentnews/edit',$data);
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
				redirect(base_url('admin/recentnews/edit/'.$id),'refresh');
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
						redirect(base_url('admin/recentnews'), 'refresh');
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->recentnews_model->edit_news($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Recent News has been updated successfully!');
					redirect(base_url('admin/recentnews'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/recentnews');
		}
		else{
			$data['recentnews_model'] = $this->recentnews_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/recentnews/view',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}


    //------------------------------------------------------------
	function delete($id=''){
	   
		$this->rbac->check_operation_access(); // check opration permission

		$this->recentnews_model->delete($id);

		$this->session->set_flashdata('success','Recent News has been Deleted Successfully.');	
		redirect('admin/recentnews');
	}
	
}

?>