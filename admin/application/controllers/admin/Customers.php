<?php defined('BASEPATH') OR exit('No direct script access allowed');
class Customers extends MY_Controller {

	public function __construct(){

		parent::__construct();
		auth_check(); // check login auth
		$this->rbac->check_module_access();

		$this->load->model('admin/customer_model', 'customer_model');
		$this->load->model('admin/Activity_model', 'activity_model');
		$this->load->model('admin/location_model', 'location_model');

	}

	//-----------------------------------------------------------
	public function index(){

		$this->load->view('admin/includes/_header');
		$this->load->view('admin/customers/customer_list');
		$this->load->view('admin/includes/_footer');
	}
	
	public function datatable_json(){				   					   
		$records['data'] = $this->customer_model->get_all_customers();
		$data = array();

		$i=0;
		foreach ($records['data']   as $row) 
		{  
			$status = ($row['is_active'] == 1)? 'checked': '';
			$verify = ($row['is_verify'] == 1)? 'Verified': 'Pending';
			$data[]= array(
				++$i,
				$row['username'],
				$row['email'],
				$row['mobile_no'],
				date_time($row['created_at']),	
				'<span class="btn btn-success">'.$verify.'</span>',	
				'<input class="tgl_checkbox tgl-ios" 
				data-id="'.$row['id'].'" 
				id="cb_'.$row['id'].'"
				type="checkbox"  
				'.$status.'><label for="cb_'.$row['id'].'"></label>',		

				'<a title="View" class="view btn btn-sm btn-info" href="'.base_url('admin/customers/edit/'.$row['id']).'"> <i class="fa fa-eye"></i></a>
				<a title="Edit" class="update btn btn-sm btn-warning" href="'.base_url('admin/customers/edit/'.$row['id']).'"> <i class="fa fa-pencil-square-o"></i></a>
				<a title="Delete" class="delete btn btn-sm btn-danger" href='.base_url("admin/customers/delete/".$row['id']).' title="Delete" onclick="return confirm(\'Do you want to delete ?\')"> <i class="fa fa-trash-o"></i></a>'
			);
		}
		$records['data']=$data;
		echo json_encode($records);						   
	}

	//-----------------------------------------------------------
	function change_status()
	{   
		$this->customer_model->change_status();
	}

	public function add(){
		
		$data['countries'] = $this->location_model->get_all_countries();
		
		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){
			//$this->form_validation->set_rules('username', 'Username', 'trim|required');
			$this->form_validation->set_rules('firstname', 'Firstname', 'trim|required');
			$this->form_validation->set_rules('lastname', 'Lastname', 'trim|required');
			$this->form_validation->set_rules('email', 'Email', 'trim|valid_email|required');
			$this->form_validation->set_rules('mobile_no', 'Number', 'trim|required');
			$this->form_validation->set_rules('password', 'Password', 'trim|required');
			$this->form_validation->set_rules('country', 'Country', 'trim|required');
			$this->form_validation->set_rules('state', 'State', 'trim|required');
			$this->form_validation->set_rules('city', 'City', 'trim|required');
			$this->form_validation->set_rules('pincode', 'Pincode', 'trim|required');

			if ($this->form_validation->run() == FALSE) {
				$data = array(
					'errors' => validation_errors()
				);
				$this->session->set_flashdata('errors', $data['errors']);
				redirect(base_url('admin/customers/add'),'refresh');
			}
			else{
				$firstname = $this->input->post('firstname');  // Get the input value
				$firstname = trim($firstname);  // Remove leading and trailing spaces
				$firstname = preg_replace('/[^A-Za-z0-9]/', '', $firstname);  // Remove non-alphanumeric characters
				
				$data = array(
					'username' => $firstname,
					'firstname' => $this->input->post('firstname'),
					'lastname' => $this->input->post('lastname'),
					'email' => $this->input->post('email'),
					'mobile_no' => $this->input->post('mobile_no'),
					'address' => $this->input->post('address'),
					'country_id' => $this->input->post('country'),
					'state_id' => $this->input->post('state'),
					'city_id' => $this->input->post('city'),
					'role' => '3',
					'password' =>  password_hash($this->input->post('password'), PASSWORD_BCRYPT),
					'is_active' => $this->input->post('status'),
					'created_at' => date('Y-m-d : h:m:s'),
					'updated_at' => date('Y-m-d : h:m:s'),
				);
				$data = $this->security->xss_clean($data);
				$user_id = $this->customer_model->add_user($data);
				if($user_id>0){
					// Activity Log 
					$this->activity_model->add_log(1);
					$this->session->set_flashdata('success', 'Customers has been added successfully!');
					$this->send_account_verification_mail($user_id);
					redirect(base_url('admin/customers'));
					
				}
			}
		}
		else{
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/customers/customer_add', $data);
			$this->load->view('admin/includes/_footer');
		}
		
	}

	public function edit($id = 0){

		$this->rbac->check_operation_access(); // check opration permission

		if($this->input->post('submit')){
			//$this->form_validation->set_rules('username', 'Username', 'trim|required');
			$this->form_validation->set_rules('firstname', 'Username', 'trim|required|max_length[30]');
			$this->form_validation->set_rules('lastname', 'Lastname', 'trim|required');
			$this->form_validation->set_rules('email', 'Email', 'trim|valid_email|required');
			$this->form_validation->set_rules('mobile_no', 'Number', 'trim|required');
			$this->form_validation->set_rules('status', 'Status', 'trim|required');
			
			$this->form_validation->set_rules('firstname', 'Username', 'required|min_length[8]|');


			if ($this->form_validation->run() == FALSE) {
					$data = array(
						'errors' => validation_errors()
					);
					$this->session->set_flashdata('errors', $data['errors']);
					redirect(base_url('admin/customers/customer_edit/'.$id),'refresh');
			}
			else{
				$firstname = $this->input->post('firstname');  // Get the input value
				$firstname = trim($firstname);  // Remove leading and trailing spaces
				$firstname = preg_replace('/[^A-Za-z0-9]/', '', $firstname);  // Remove non-alphanumeric characters
				$firstname = strtolower($firstname);  // Remove non-alphanumeric characters

				$data = array(
					'username' => $firstname,
					'firstname' => $this->input->post('firstname'),
					'lastname' => $this->input->post('lastname'),
					'email' => $this->input->post('email'),
					'mobile_no' => $this->input->post('mobile_no'),
					'address' => $this->input->post('address'),
					'role' => '3',
					'password' =>  password_hash($this->input->post('password'), PASSWORD_BCRYPT),
					'is_active' => $this->input->post('status'),
					'created_at' => date('Y-m-d : h:m:s'),					
					'updated_at' => date('Y-m-d : h:m:s'),
				);
				$data = $this->security->xss_clean($data);
				$result = $this->customer_model->edit_user($data, $id);
				if($result){
					// Activity Log 
					$this->activity_model->add_log(2);

					$this->session->set_flashdata('success', 'Customers has been updated successfully!');
					redirect(base_url('admin/customers'));
				}
			}
		}
		else{
			$data['user'] = $this->customer_model->get_customer_by_id($id);
			
			$this->load->view('admin/includes/_header');
			$this->load->view('admin/customers/customer_edit', $data);
			$this->load->view('admin/includes/_footer');
		}
	}

	public function delete($id = 0)
	{
		$this->rbac->check_operation_access(); // check opration permission
		
		$this->db->delete('ci_customers', array('id' => $id));

		// Activity Log 
		$this->activity_model->add_log(3);

		$this->session->set_flashdata('success', 'Use has been deleted successfully!');
		redirect(base_url('admin/customers'));
	}
	
	
	private function send_account_verification_mail($user_id) {
		
		$user_data = $this->customer_model->get_customer_by_id($user_id);
		
		$this->load->helper('string');
		$timestamp = time(); // Get the current timestamp
		$randomString = random_string('alnum', 12); // Generate a random alphanumeric string

		$token = $timestamp . $randomString;

		$update_data['token'] = $token;
		$result = $this->customer_model->edit_user($update_data, $user_id);
		
		
		//$data = json_decode(file_get_contents("php://input"), true);
		//$subcribe_email = $data['email'];		
		$subcribe_email = $user_data['email'];	
		
		//$subcribe_email = "boobathi@searchnscore.com";
		$title = "You have a new Subscribe from Mother's For Mother Nature";
		//$to_mail = "sangeetha.vellingiri@searchnscore.com";
		$to_mail = "boobathi@searchnscore.com";
		 
        //$from_email = $reply_to;
	    //$list = array('raghunath@stellarsolutions.org','divyathirumurugan@stellarsolutions.org');
		
       // $to_email = 'snstest123@mailinator.com';
        $subject  = "New User Registered - MFMN";
        //Load email library 
        $this->load->library('email');
        $config=array(
			'charset'=>'utf-8',
			'wordwrap'=> TRUE,
			'mailtype' => 'html',
			'newline' => '\r\n'
			
        );  
		
        $this->email->initialize($config);
        $this->email->from($subcribe_email,''); 
        $this->email->to($to_mail);
		//$this->email->cc($list); 
        $this->email->subject($subject);
	    $logo_url = base_url('assets/img/logo.png');
		$activation_link = base_url("activate-account?email=$subcribe_email&token=$token");

        $this->email->message("Click the link below to activate your account:<br><a href=\"$activation_link\">Activate Account</a>"); 
        //$this->email->send();
		
		//Send mail 
        if($this->email->send()) {
         echo 'Email sent successfully'; 
         }else {
         echo  'Error in sending Email'; 
		 }		
		
		
		
	}
		

}


?>