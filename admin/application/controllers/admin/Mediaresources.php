<?php defined('BASEPATH') OR exit('No direct script access allowed');

class MediaResources extends MY_Controller
{
    function __construct(){

        parent::__construct();
        auth_check(); // check login auth
        $this->rbac->check_module_access();

		$this->load->model('admin/MediaResources_model', 'mediaresources_model');
		$this->load->model('admin/Presskit_model', 'presskit_model');
    }

	//-----------------------------------------------------		
	function index($type=''){

		$this->session->set_userdata('filter_type',$type);
		$this->session->set_userdata('filter_keyword','');
		$this->session->set_userdata('filter_status','');
				
		$data['title'] = 'Media Resources List';

		$this->load->view('admin/includes/_header');
		$this->load->view('admin/media_resources/index', $data);
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

		$data['info'] = $this->mediaresources_model->get_all();

		//print_r(json_encode($data));

		$this->load->view('admin/media_resources/list',$data); 
	}


	
	function list_cat_li_data(){

		$data['info'] = $this->mediaresources_model->get_category_signle_list();

		//print_r(json_encode($data));

		$this->load->view('admin/mediaresources/multiadd',$data); 
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
			$this->form_validation->set_rules('media_title', 'Media Title', 'trim|is_unique[ci_media_resources.media_title]|required');
			if($this->input->post('media_type') && $this->input->post('media_type') == 'presskit'){
		        $mediaType = "presskit";
		        $fileInsertType = "pdf";
		    }else{
		        $mediaType = "media_resource";
		        $fileInsertType = "image";
		    }
				
				if ($this->form_validation->run() == FALSE) {
					$data = array(
						'errors' => validation_errors()
					);
					$this->session->set_flashdata('errors', $data['errors']);
					if($mediaType == "presskit"){
    				    redirect(base_url('admin/mediaresources/addpresskit'),'refresh');
    				}else{
    				    redirect(base_url('admin/mediaresources/add'),'refresh');
    				}	
				}
				else{
				    
				    $string = $this->input->post('media_title');
				
    				$data = array(
    					'media_title' => $this->input->post('media_title'),
    					'media_type' => $mediaType
    				);

			
					$path="assets/img/media_resources/";
			
					if(!empty($_FILES['media_image']['name']))
					{			
						$result = $this->functions->file_insert($path, 'media_image', $fileInsertType, '9097152');
						
						print_r($result);

						if($result['status'] == 1){
							$data['file'] = $path.$result['msg'];
						}
						else{
							$this->session->set_flashdata('error', $result['msg']);
							if($mediaType == "presskit"){
            				    redirect(base_url('admin/mediaresources/presskit'), 'refresh');
            				}else{
            				    redirect(base_url('admin/mediaresources'), 'refresh');
            				}
						}
					}
			

					$data = $this->security->xss_clean($data);
					$result = $this->mediaresources_model->add_media_resources($data);
					if($result){
						
						if($status != 1){
							$this->session->set_flashdata('success', ucfirst(str_replace("_"," ",$mediaType)).' added successfully!');
						}else{
							$this->session->set_flashdata('success', ucfirst(str_replace("_"," ",$mediaType)).' has been added successfully!');
						}
                        if($mediaType == "presskit"){
        				    redirect(base_url('admin/mediaresources/presskit'));
        				}else{
        				    redirect(base_url('admin/mediaresources'));
        				}
						
					}
				}
			}
			else
			{
				$this->load->view('admin/includes/_header');
        		$this->load->view('admin/media_resources/add');
        		$this->load->view('admin/includes/_footer');
			}
	}

	//--------------------------------------------------
	function edit($id=""){
		date_default_timezone_set('Asia/Kolkata');		
		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){
		    $data = $this->mediaresources_model->get_detail($id);
		    $media_title = $this->input->post('media_title');
		    if($this->input->post('media_type') && $this->input->post('media_type') == 'presskit'){
		        $mediaType = "presskit";
		        $fileInsertType = "pdf";
		    }else{
		        $mediaType = "media_resource";
		        $fileInsertType = "image";
		    }
		    
		    /*if($data['media_title'] != $media_title) {					
			    $this->form_validation->set_rules('media_title', 'Media Title', 'trim|is_unique[ci_media_resources.media_title]|required');			
		    }else{				
			    $this->form_validation->set_rules('media_title', 'Media Title', 'trim|required');
		    }*/					
			$this->form_validation->set_rules('media_title', 'Media Title', 'trim|required');
			//$this->form_validation->set_rules('post_description', 'Post Description', 'trim|required');
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				if($mediaType == "presskit"){
				    redirect(base_url('admin/mediaresources/editpresskit/'.$id),'refresh');
				}else{
				    redirect(base_url('admin/mediaresources/edit/'.$id),'refresh');
				}
			}
			else{				
			    
			    $string = $this->input->post('media_title');									
				$data = array(
					'media_title' => $this->input->post('media_title'),
					'media_type' => $mediaType
				);

				$path="assets/img/media_resources/";
			
				$old_logo = $this->input->post('old_logo');

				if(!empty($_FILES['media_image']['name']))
				{			
					$this->functions->delete_file($old_logo);

					$result = $this->functions->file_insert($path, 'media_image', $fileInsertType, '9097152');
					
					if($result['status'] == 1){
						$data['file'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						if($mediaType == "presskit"){
						    redirect(base_url('admin/mediaresources/presskit'), 'refresh');
						}else{
						    redirect(base_url('admin/mediaresources'), 'refresh');
						}    
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->mediaresources_model->edit_media_resources($data, $id);

				if($result){
					$this->session->set_flashdata('success', ucfirst(str_replace("_"," ",$mediaType)).' has been updated successfully!');
					if($mediaType == "presskit"){
						redirect(base_url('admin/mediaresources/presskit'));
					}else{
					    redirect(base_url('admin/mediaresources'));
					}
				}
			}
		}
		elseif($id==""){
			redirect('admin/media_resources');
		}
		else{
			$data['mediaresources_model'] = $this->mediaresources_model->get_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/media_resources/edit',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}

	function view($id=""){

		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){
			$this->form_validation->set_rules('media_title', 'MediaTitle', 'trim|required');
			
			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/media_resources/edit/'.$id),'refresh');
			}
			else{
				$data = array(
					'post_title' => $this->input->post('media_title'),
				);

				$path="assets/img/media_resources/";
			
				$old_logo = $this->input->post('old_logo');

				if(!empty($_FILES['file']['name']))
				{			
					$this->functions->delete_file($old_logo);

					$result = $this->functions->file_insert($path, 'file', 'image', '9097152');
					
					if($result['status'] == 1){
						$data['file'] = $path.$result['msg'];
					}
					else{
						$this->session->set_flashdata('error', $result['msg']);
						redirect(base_url('admin/media_resources'), 'refresh');
					}
				}


				$data = $this->security->xss_clean($data);
				$result = $this->mediaresources_model->edit_media_resources($data, $id);

				if($result){
					$this->session->set_flashdata('success', 'Admin has been updated successfully!');
					redirect(base_url('admin/media_resources'));
				}
			}
		}
		elseif($id==""){
			redirect('admin/media_resources');
		}
		else{
			$data['mediaresources_model'] = $this->mediaresources_model->get_detail($id);
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/media_resources/view',$data);
			$this->load->view('admin/includes/_footer');
		}		
	}
	function multiadd($id=""){
		
		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){
		    date_default_timezone_set('Asia/Kolkata');			
			
				$this->form_validation->set_rules('media_title', 'Media Title', 'trim|is_unique[ci_media_resources_category_image.media_title]|required');

				$category_id = $_POST['category_id'];

				$media_title = $_POST['media_title'];
				
				$galleryImg  = $_FILES['media_image'];
				
				if(!empty($galleryImg['name'][0])) {
				$filesCount = count($galleryImg['name']); 
                if($filesCount>0) {
                for($i = 0; $i < $filesCount; $i++){ 
                    $_FILES['file']['name']     = $galleryImg['name'][$i]; 
                    $_FILES['file']['type']     = $galleryImg['type'][$i]; 
                    $_FILES['file']['tmp_name'] = $galleryImg['tmp_name'][$i]; 
                    $_FILES['file']['error']    = $galleryImg['error'][$i]; 
                    $_FILES['file']['size']     = $galleryImg['size'][$i]; 
                     
                     $filename = pathinfo($galleryImg['name'][$i], PATHINFO_FILENAME);  
                    // File upload configuration 
                    $uploadPath = 'assets/img/media_resources'; 
                    $config['upload_path'] = $uploadPath; 
                    $config['allowed_types'] = 'gif|jpg|png|jpeg';
                    $config['file_name'] = $filename;
					//$config['max_size']      = '2MB';
                    $config['quality'] = 50;
                    $config['encrypt_name'] = FALSE;

                    // Load and initialize upload library 
                    $this->load->library('upload', $config); 
                    $this->upload->initialize($config); 
                     
                    // Upload file to server 
                    if($this->upload->do_upload('file')){ 
                        // Uploaded file data 
                        $fileData = $this->upload->data(); 
                        
                        $uploadData[$i]['media_title'] =$_POST['media_title'][$i]; 
                        $uploadData[$i]['file'] =$fileData['file_name'];  
                        $uploadData[$i]['media_resource_id'] = $category_id; 
                        
                        
                        
						
                    }else{  
                        print_r($this->upload->display_errors());
                    } 
                } 
                    print_r($uploadData);
            if(!empty($uploadData)){                
							//$data = $this->security->xss_clean($uploadData);
							$result = $this->mediaresources_model->multi_media_resources($uploadData);
              }                
                
                }
     }
	 
					if($result){
						$this->session->set_flashdata('success', 'Admin has been updated successfully!');
						redirect(base_url('admin/mediaresources/multiadd/'.$category_id));
					}
				}
			else
			{
				$data['mediaresources_model'] = $this->mediaresources_model->get_detail($id);
				$data['info'] = $this->mediaresources_model->get_category_signle_list($id);
				$this->load->view('admin/includes/_header');
				$this->load->view('admin/media_resources/multiadd',$data);
				$this->load->view('admin/includes/_footer');

			}
	}


		private function set_upload_options($path)
		{   
			//upload an image options
			$config = array();
			$config['upload_path'] = "assets/img/media_resources";
			$config['allowed_types'] = 'gif|jpg|png|jpeg';
			$config['max_size']      = '5';
			$config['overwrite']     = FALSE;
			$ext = pathinfo($path, PATHINFO_EXTENSION);
			$new_name = time().'.'.$ext;
			$config['file_name'] = $new_name;

			return $config;
		}


    //------------------------------------------------------------
	function delete($id=''){
	   
		$this->rbac->check_operation_access(); // check opration permission

		$this->mediaresources_model->delete($id);

		$this->session->set_flashdata('success','Media has been Deleted Successfully.');	
		redirect('admin/mediaresources');
	}
	function delete_file($id=''){
	   $cat_id =  $this->uri->segment(5);
		//$this->rbac->check_operation_access(); // check opration permission

		$this->mediaresources_model->delete_media($id);

		$this->session->set_flashdata('success','Media has been Deleted Successfully.');	
		redirect('admin/mediaresources/multiadd/'.$cat_id);
	}
	
	
	function list_presskit_data(){

		$data['info'] = $this->presskit_model->get_all();

		//print_r(json_encode($data));

		$this->load->view('admin/presskit/list',$data); 
	}

	function presskit($type=''){

		$this->session->set_userdata('filter_type',$type);
		$this->session->set_userdata('filter_keyword','');
		$this->session->set_userdata('filter_status','');
				
		$data['title'] = 'Presskit List';
		
		$this->load->view('admin/includes/_header');
		$this->load->view('admin/presskit/index', $data);
		$this->load->view('admin/includes/_footer');
	}
	
	function addpresskit(){
	    $this->load->view('admin/includes/_header');
        $this->load->view('admin/presskit/add');
        $this->load->view('admin/includes/_footer');
	}
	
	function editpresskit($id){
	    $data['presskit_model'] = $this->presskit_model->get_detail($id);
		$this->load->view('admin/includes/_header');
		$this->load->view('admin/presskit/edit',$data);
		$this->load->view('admin/includes/_footer');
	}
	
	function viewpresskit($id){
	    $data['presskit_model'] = $this->presskit_model->get_detail($id);
		$this->load->view('admin/includes/_header');
		$this->load->view('admin/presskit/view',$data);
		$this->load->view('admin/includes/_footer');
	}
	
	function deletepresskit($id=''){
	   
		//$this->rbac->check_operation_access(); // check opration permission

		$this->mediaresources_model->delete($id);

		$this->session->set_flashdata('success','Presskit has been Deleted Successfully.');	
		redirect('admin/mediaresources/presskit');
	}
	
}

?>