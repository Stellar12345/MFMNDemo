<?php defined('BASEPATH') OR exit('No direct script access allowed');

class News extends MY_Controller
{
    function __construct(){

        parent::__construct();
        auth_check(); // check login auth
        $this->rbac->check_module_access();

		$this->load->model('admin/News_model', 'news_model');
    }

	//-----------------------------------------------------		
	function index($type=''){

		$this->session->set_userdata('filter_type',$type);
		$this->session->set_userdata('filter_keyword','');
		$this->session->set_userdata('filter_status','');
				
		$data['title'] = 'News List';

		$this->load->view('admin/includes/_header');
		$this->load->view('admin/news/index', $data);
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

		$data['info'] = $this->news_model->get_all();

		//print_r(json_encode($data));

		$this->load->view('admin/news/list',$data); 
	}

	//----------------------------------------------------------- 
	function change_status(){

		//$this->rbac->check_operation_access(); // check opration permission

		$this->news_model->change_status();
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
					redirect(base_url('admin/news/add'),'refresh');
				}
				else{					
				$string = $this->input->post('post_title');	
				$status = $this->input->post('status');				
				$slug = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);		
				$post_time = $this->input->post('post_time');	
				$websiteString = ($this->input->post('post_event')) ? 1 : 0;
				$display_home = ($this->input->post('display_home')== 1) ? 1 : 0;
				$time_as =  intval($post_time) < 12 ? 'AM' : 'PM'; 		
				$posttime = $post_time.' ' .$time_as;
					$data = array(
						'post_title' => $this->input->post('post_title'),
						'post_description' => $this->input->post('post_description'),
						'post_slug' => strtolower($slug),
						'post_type' => $this->input->post('post_type'),
						'post_event' => $websiteString,
						'display_home' => $display_home,
						'post_date' => $this->input->post('post_date'),
						'post_time' => $post_time,
						'post_link' => $this->input->post('post_link'),
						'post_event_desc' => $this->input->post('post_eveent_desc'),
						'is_active' => $this->input->post('status'),
						'updated_at' => date('Y-m-d : h:m:s'),									
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
							redirect(base_url('admin/news'), 'refresh');
						}
					}
			

					$data = $this->security->xss_clean($data);
					$result = $this->news_model->add_news($data);
					
					 if($display_home == 1){
				 $this->news_model->disable_news($result);
				 }
					if($result){
						
						if($status != 1){
							$this->session->set_flashdata('success', 'News / Events has been added successfully!');
						}else{
							$this->session->set_flashdata('success', 'News / Events has been added successfully!');
						}

						redirect(base_url('admin/news'));
					}
				}
			}
			else
			{
				$this->load->view('admin/includes/_header');
        		$this->load->view('admin/news/add');
        		$this->load->view('admin/includes/_footer');
			}
	}

	//--------------------------------------------------
	function edit($id=""){
		date_default_timezone_set('Asia/Kolkata');		
		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){			$data = $this->news_model->get_user_detail($id);		 			
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
				redirect(base_url('admin/news/edit/'.$id),'refresh');
			}
			else{				
			$string = $this->input->post('post_title');		
			$post_time = $this->input->post('post_time');		
				
			$time_as =  intval($post_time) < 12 ? 'AM' : 'PM'; 
			
			
			
			$slug = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);		
				$websiteString = ($this->input->post('post_event')) ? 1 : 0;
				$display_home = ($this->input->post('display_home')== 1) ? 1 : 0;
				$data = array( 
					'post_title' => $this->input->post('post_title'),
						'post_description' => $this->input->post('post_description'),
						'post_slug' => strtolower($slug),
						'post_type' => $this->input->post('post_type'),
						'post_event' => $websiteString,
						'display_home' => $display_home,
						'post_date' => $this->input->post('post_date'),
						'post_time' => $post_time,
						'post_link' => $this->input->post('post_link'),
						'post_event_desc' => $this->input->post('post_event_desc'),
						'is_active' => $this->input->post('status'),
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
						redirect(base_url('admin/news'), 'refresh');
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->news_model->edit_news($data, $id);
				
				 if($display_home == 1){
				 $this->news_model->disable_news($id);
				 }
				 

				if($result){
					$this->session->set_flashdata('success', 'News / Events has been updated successfully!');
					redirect(base_url('admin/news'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/news');
		}
		else{
			$data['news_model'] = $this->news_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/news/edit',$data);
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
				redirect(base_url('admin/news/edit/'.$id),'refresh');
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
						redirect(base_url('admin/news'), 'refresh');
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->news_model->edit_news($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Admin has been updated successfully!');
					redirect(base_url('admin/news'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/news');
		}
		else{
			$data['news_model'] = $this->news_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/news/view',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}


    //------------------------------------------------------------
	function delete($id=''){
	   
		$this->rbac->check_operation_access(); // check opration permission

		$this->news_model->delete($id);

		$this->session->set_flashdata('success','News / Events has been Deleted Successfully.');	
		redirect('admin/news');
	}
	
}

?>