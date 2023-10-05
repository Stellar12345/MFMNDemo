<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Blog extends MY_Controller
{
    function __construct(){

        parent::__construct();
        auth_check(); // check login auth
        $this->rbac->check_module_access();

		$this->load->model('admin/Blog_model', 'blog_model');
    }

	//-----------------------------------------------------		
	function index($type=''){

		$this->session->set_userdata('filter_type',$type);
		$this->session->set_userdata('filter_keyword','');
		$this->session->set_userdata('filter_status','');
				
		$data['title'] = 'Blog List';
		

		$this->load->view('admin/includes/_header');
		$this->load->view('admin/blog/index', $data);
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

		$data['info'] = $this->blog_model->get_all();

		//print_r(json_encode($data));

		$this->load->view('admin/blog/list',$data); 
	}

	//----------------------------------------------------------- 
	function change_status(){

		//$this->rbac->check_operation_access(); // check opration permission

		$this->blog_model->change_status();
	}
	
	//----------------------------------------------------------- 
	function change_status_category(){

		//$this->rbac->check_operation_access(); // check opration permission

		$this->blog_model->change_status_category();
	}
	
	
	public function category() {
		
		//$data['title'] = 'Blog Category List';
		//print_r(json_encode($data));
		$this->load->view('admin/includes/_header');
		$this->load->view('admin/blog/cat_index'); 
		$this->load->view('admin/includes/_footer');
	}
	public function category_data() {
		
		$data['info'] = $this->blog_model->get_all_categories();
		
		//$data['title'] = 'Blog Category List';
		//print_r(json_encode($data));
		$this->load->view('admin/blog/list_category',$data); 
	}
	
	//--------------------------------------------------
	function add_category(){

		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){			
		date_default_timezone_set('Asia/Kolkata');			
			$this->form_validation->set_rules('category_name', 'Category Name', 'trim|is_unique[ci_blog_category.category_name]|required');
				
				if ($this->form_validation->run() == FALSE) {
					$data = array(
						'errors' => validation_errors()
					);
					$this->session->set_flashdata('errors', $data['errors']);
					redirect(base_url('admin/blog/add_category'),'refresh');
				}
				else{					
					$data = array(
						'category_name' => $this->input->post('category_name'),
						'is_active' => $this->input->post('status'),						
						'updated_at' => date('Y-m-d : h:m:s'),												
					);

					$data = $this->security->xss_clean($data);
					$result = $this->blog_model->add_blog_category($data);
					if($result){
						if($status != 1){
							$this->session->set_flashdata('success', 'Blog Category has been added successfully!');
						}else{
							$this->session->set_flashdata('success', 'Blog Category has been added successfully!');
						}
						redirect(base_url('admin/blog/category'));
					}
				}
			}
			else
			{
				$this->load->view('admin/includes/_header');
        		$this->load->view('admin/blog/add_category');
        		$this->load->view('admin/includes/_footer');
			}
	}
	
		//--------------------------------------------------
	function edit_category($id=""){
		date_default_timezone_set('Asia/Kolkata');		
		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){			
		$data = $this->blog_model->get_category_detail($id);		 			
		$category_name = $this->input->post('category_name');					
		if($data['category_name'] != $category_name) {					
			$this->form_validation->set_rules('category_name', 'Category Name', 'trim|is_unique[ci_blog_category.category_name]|required');			
		}			
		else 			
		{	
			$this->form_validation->set_rules('category_name', 'Category Name', 'trim|required');
		}						
			
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/blog/edit_category/'.$id),'refresh');
			}
			else{	
				$data = array(
					'category_name' => $this->input->post('category_name'),				
					'updated_at' => date('Y-m-d : h:m:s'),
				);

				$data = $this->security->xss_clean($data);
				$result = $this->blog_model->edit_blog_category($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Admin has been updated successfully!');
					redirect(base_url('admin/blog/category'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/category');
		}
		else{
			$data['blog_model'] = $this->blog_model->get_category_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/blog/edit_category',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}
	
	
	
	//--------------------------------------------------
	function add(){

		$this->rbac->check_operation_access(); // check opration permission
		$data['product_categories'] = $this->blog_model->get_all_categories();

		if($this->input->post('submit')){			
		date_default_timezone_set('Asia/Kolkata');			
			$this->form_validation->set_rules('blog_title', 'Blog Title', 'trim|is_unique[ci_blog.blog_title]|required');
			$this->form_validation->set_rules('blog_description', 'Blog Description', 'trim|required');
				
				if ($this->form_validation->run() == FALSE) {
					$data = array(
						'errors' => validation_errors()
					);
					$this->session->set_flashdata('errors', $data['errors']);
					redirect(base_url('admin/blog/add'),'refresh');
				}
				else{					
				$string = $this->input->post('blog_title');	
				$status = $this->input->post('status');				
				$slug = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);		
				$websiteString = implode(', ', $this->input->post('websites'));
					$data = array(
						'blog_title' => $this->input->post('blog_title'),
						'blog_description' => $this->input->post('blog_description'),
						'blog_button_text' => $this->input->post('blog_button_text'),
						'blog_button_link' => $this->input->post('blog_button_link'),
						'post_slug' => strtolower($slug),
						'category_id' =>(!empty($this->input->post('category_id'))?implode(',',$this->input->post('category_id')):''),
						'is_active' => $this->input->post('status'),//1,						
						'blog_date' => $this->input->post('blog_date'),
						'blog_time' => $this->input->post('blog_time'),
						'blog_author' => $this->input->post('post_author'),
						'updated_at' => date('Y-m-d : h:m:s'),												
					);
					

			
					$path="assets/img/";
			
					if(!empty($_FILES['blog_image']['name']))
					{			
						$result = $this->functions->file_insert($path, 'blog_image', 'image', '9097152');
						
						print_r($result);

						if($result['status'] == 1){
							$data['blog_image'] = $path.$result['msg'];
						}
						else{
							$this->session->set_flashdata('error', $result['msg']);
							redirect(base_url('admin/blog'), 'refresh');
						}
					}
			
					
					

					$data = $this->security->xss_clean($data);
					$result = $this->blog_model->add_blog($data);
					if($result){
						
						if($status != 1){
							$this->session->set_flashdata('success', 'Blog has been added successfully!');
						}else{
							$this->session->set_flashdata('success', 'Blog has been added successfully!');
						}

						redirect(base_url('admin/blog'));
					}
				}
			}
			else
			{
				$this->load->view('admin/includes/_header');
        		$this->load->view('admin/blog/add',$data);
        		$this->load->view('admin/includes/_footer');
			}
	}

	//--------------------------------------------------
	function edit($id=""){
		date_default_timezone_set('Asia/Kolkata');		
		$this->rbac->check_operation_access(); // check opration permission
		$data['product_categories'] = $this->blog_model->get_all_categories();

		if($this->input->post('submit')){			
		$data = $this->blog_model->get_user_detail($id);		 			
		$blog_title = $this->input->post('blog_title');					
		if($data['blog_title'] != $blog_title) {					
			$this->form_validation->set_rules('blog_title', 'Blog Title', 'trim|is_unique[ci_blog.blog_title]|required');			
		}	
		
		else 			
		{				
			$this->form_validation->set_rules('blog_title', 'Blog Title', 'trim|required');	
		}						
			//$this->form_validation->set_rules('blog_title', 'Blog Title', 'trim|required');
			$this->form_validation->set_rules('blog_description', 'Blog Description', 'trim|required');
			
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/blog/edit/'.$id),'refresh');
			}
			else{				
			$string = $this->input->post('blog_title');		
			$slug = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);					
			$websiteString = implode(', ', $this->input->post('websites'));
				$data = array(
					'blog_title' => $this->input->post('blog_title'),
					'blog_description' => $this->input->post('blog_description'),		
					'blog_button_text' => $this->input->post('blog_button_text'),
					'blog_button_link' => $this->input->post('blog_button_link'),	
					'category_id' =>(!empty($this->input->post('category_id'))?implode(',',$this->input->post('category_id')):''),
					'blog_date' => $this->input->post('blog_date'),
					'blog_time' => $this->input->post('blog_time'),
					'blog_author' => $this->input->post('post_author'),			
					'updated_at' => date('Y-m-d : h:m:s'),
				);
 
				$path="assets/img/";
			
				$old_logo = $this->input->post('old_logo');

				if(!empty($_FILES['blog_image']['name']))
				{			
					$this->functions->delete_file($old_logo);

					$result = $this->functions->file_insert($path, 'blog_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['blog_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/blog'), 'refresh');
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->blog_model->edit_blog($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Admin has been updated successfully!');
					redirect(base_url('admin/blog'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/blog');
		}
		else{
			$data['blog_model'] = $this->blog_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/blog/edit',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}

	function view($id=""){

		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){
			$this->form_validation->set_rules('blog_title', 'BlogTitle', 'trim|required');
			$this->form_validation->set_rules('blog_description', 'BlogDescription', 'trim|required');
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/blog/edit/'.$id),'refresh');
			}
			else{
				$data = array(
					'blog_title' => $this->input->post('blog_title'),
					'blog_description' => $this->input->post('blog_description'),
					'is_active' => 1,
					'updated_at' => date('Y-m-d : h:m:s'),
				);

				$path="assets/img/";
			
				$old_logo = $this->input->post('old_logo');

				if(!empty($_FILES['blog_image']['name']))
				{			
					$this->functions->delete_file($old_logo);

					$result = $this->functions->file_insert($path, 'blog_image', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['blog_image'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/blog'), 'refresh');
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->blog_model->edit_blog($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Admin has been updated successfully!');
					redirect(base_url('admin/blog'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/blog');
		}
		else{
			$data['blog_model'] = $this->blog_model->get_user_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/blog/view',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}


    //------------------------------------------------------------
	function delete($id=''){
	   
		$this->rbac->check_operation_access(); // check opration permission

		$this->blog_model->delete($id);

		$this->session->set_flashdata('success','Blog has been Deleted Successfully.');	
		redirect('admin/blog');
	}
	

    //------------------------------------------------------------
	function delete_Category($id=''){
	   
		$this->rbac->check_operation_access(); // check opration permission

		$this->blog_model->delete_Category($id);

		$this->session->set_flashdata('success','Blog Category has been Deleted Successfully.');	
		redirect('admin/blog/category');
	}
	
}

?>