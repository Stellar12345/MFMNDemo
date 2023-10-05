<?php 

header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
defined('BASEPATH') OR exit('No direct script access allowed');


class Customers extends MY_Controller
{
    function __construct(){

        parent::__construct();
		//$this->load->model('admin/Contact_model', 'contact_model')
		$this->load->model('admin/customer_model', 'customer_model');
		$this->load->model('admin/Activity_model', 'activity_model');
		$this->load->model('admin/location_model', 'location_model');;
    }
	
/* Customer Add*/
public function index() {
    $data = json_decode(file_get_contents("php://input"), true);

    // Rest of your code...

    // Check if the provided email already exists in the database
    $existingUser = $this->customer_model->get_user_by_email($data['email']);
    
    if ($existingUser) {
        echo json_encode(['error' => 'Email already exists', 'status' => 'error']);
        exit();
    }

    // Rest of your code...
    
    $firstname = $data['firstname'];
    // Remove leading and trailing spaces
    $firstname = trim($firstname);
    // Remove non-alphanumeric characters
    $firstname = preg_replace('/[^A-Za-z0-9]/', '', $firstname);
    
    $user_data = array(
        'username' => $firstname,
        'firstname' => $data['firstname'],
        'lastname' => $data['lastname'],
        'email' => $data['email'],
        'pan_number' => $data['pan_number'],
        'code' => $data['code'],
        'mobile_no' =>$data['mobile_number'],
        'address' => $data['address'],
        'country_id' => $data['country'],
        'state_id' => $data['state'],
        'city_id' => $data['city'],
        'pincode' => $data['to_pincode'],
        'role' => '3',
        'password' =>  password_hash($data['pass_to'], PASSWORD_BCRYPT),
        'is_active' => '0',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
    );
    
	if($data['email'] != '') {
		$data = $this->security->xss_clean($user_data);
		$user_id = $this->customer_model->add_customer($data);
	}
    //echo $user_id;
	//die();
    if ($user_id > 0) {
        // Activity Log 
        $this->activity_model->add_log(1);
        //echo "Registration Successful!";
        $this->send_account_verification_mail($user_id);
        //redirect(base_url('/signup'));
    }
    exit();
}

/* Customer Update*/
public function update_user($id){
    $data = json_decode(file_get_contents("php://input"), true);

    // Assign input values to variables
    $firstname = $data['first_name'];
    $lastname = $data['last_name'];
    $email = $data['user_email'];
    $pan_number = $data['pan_number'];
    $code = $data['code'];
    $mobile_number = $data['mobile_number'];
    $address = $data['address'];
    $country_id = $data['country'];
    $state_id = $data['state'];
    $pincode = $data['pin_code'];
    $city_id = $data['city'];
    $pass = $data['pass'];
    $confirm_pass = $data['confirm_pass'];
	//print_r($data);
	//die();
    // Prepare user data
	if($confirm_pass == '') {
    $user_data = array(
        'firstname' => $firstname,
        'lastname' => $lastname,
        'pan_number' => $pan_number,
        'code' => $code,
        'mobile_no' => $mobile_number,
        'address' => $address,
        'country_id' => $country_id,
        'state_id' => $state_id,
        'pincode' => $pincode,
        'city_id' => $city_id,
        'updated_at' => date('Y-m-d H:i:s'),
    );
	}
	else {
    $user_data = array(
        'firstname' => $firstname,
        'lastname' => $lastname,
        'pan_number' => $pan_number,
        'code' => $code,
        'mobile_no' => $mobile_number,
        'address' => $address,
        'country_id' => $country_id,
        'state_id' => $state_id,
        'pincode' => $pincode,
        'city_id' => $city_id,
		'password' =>  password_hash($confirm_pass, PASSWORD_BCRYPT),
        'updated_at' => date('Y-m-d H:i:s'),
    );
	}

	//print_r($user_data);
	//die();
    // Sanitize user data
    $sanitized_data = $this->security->xss_clean($user_data);

    // Update user data
    $user_id = $this->customer_model->edit_user($sanitized_data, $id);

    if ($user_id > 0) {
		
		echo "Profile Updated Successfully";
        // Activity Log 
       // $this->activity_model->add_log(1);
        //$this->send_account_verification_mail($user_id);
    }
}

/* Customer Fetch*/
public function getuser($id) {

        $user = $this->customer_model->get_customer_by_id($id);

        if ($user) {
            $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode($user));
        } else {
            $this->output
                ->set_status_header(404)
                ->set_output(json_encode(array('error' => 'User not found')));
        }
    }

/* Register Verfication Email*/
public function send_account_verification_mail($user_id){
	
		$user_data = $this->customer_model->get_customer_by_id($user_id);
		//print_r($user_data);
		
		/* Token Generation */
		$this->load->helper('string');
		$timestamp = time(); // Get the current timestamp
		$randomString = random_string('alnum', 12); // Generate a random alphanumeric string

		$token = $timestamp . $randomString;
		
		$update_data['token'] = $token;
		$result = $this->customer_model->edit_user($update_data, $user_id);
        
		// Load the email library
		$from_name = $user_data['firstname'];		
		$from_email = $user_data['email'];		
		//$to_mail = "boobathi@searchnscore.com";
		$to_mail = $user_data['email'];		
		
		/* CC add */
	    //$list = array('raghunath@stellarsolutions.org','divyathirumurugan@stellarsolutions.org');
		
        $subject  = 'Welcome to MFMN from ' . $from_name;
        //Load email library 
        $this->load->library('email');
        $config=array(
			'charset'=>'utf-8',
			'wordwrap'=> TRUE,
			'mailtype' => 'html',
			'newline' => '\r\n'
			
        ); 
		
        $this->email->initialize($config);
        $this->email->from('no-reply@stellarsolutionsindia.com', 'MFMN');
        $this->email->to($to_mail);
		//$this->email->cc($list); 
        $this->email->subject($subject);
	    $logo_url = base_url('assets/img/logo.png');
	   
	   	$activation_link = "https://mfmn.stellarsolutionsindia.com/verify?token=$token";

        $this->email->message('<!doctype html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /><title>Enquiry </title></head>
	<body style="margin: 0; padding: 0">
		<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; padding-top: 20px;">
			<tr>
				<td align="center">
					<div style="width: 100%; max-width: 650px; margin: 0 auto;">
						<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 650px; margin: 0 auto;">
							<tbody>						
								<tr>
									<td>
										<table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 620px; margin: 0 auto; background: #ffffff;">
											<tbody>
												<tr>
												<td align="center">
													<table class="col2" width="287" border="0" align="center" cellpadding="0" cellspacing="0">
													<tbody>
													<tr>
													<td height="15"></td>
													</tr>
													<tr>
													<td align="center" style="line-height:0px;" style="margin-bottom:15px;text-align: center;font-size: 18px;">
													<img style="display:block; line-height:0px; font-size:0px; border:0px;width: 40%;" class="images_style" 
													src="'.$logo_url.'"/>
													</td>
													</tr>
													<tr>
													<td height="15"></td>
													</tr>
													</tbody>
													</table>
												</td>
												</tr>
												<tr>
													<td style="background-color: #f9f9f9; color: #000000;" height="100">
														<div style="color: #000000; font-size: 20px; font-family: Verdana, sans-serif; text-align: center;">
															MFMN - Verify your Email ID
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border: 4px solid #f9f9f9;">
															<tbody>
																<tr>
																	<td width="600" style="padding-top: 70px; padding-bottom: 40px; padding-left: 70px; padding-right: 70px;">
																		<table width="100%" cellpadding="0" cellspacing="0" border="0">
																			<tbody>
																				<tr>
																					<td style="font-family: Verdana, sans-serif; color: #000000; text-align: left; padding-bottom: 15px;">
																						<div style="margin-bottom: 15px;font-size: 18px;text-align: center;">Click the link below to activate your account:<br><br><a href="'.$activation_link.'" style="background: #65a940;padding: 11px; border-radius: 20px;text-decoration: none;color: #fff !important;">Activate Account</a></div>
																					</td>
																				</tr>
																				<tr>
																					<td height="20"></td>
																				</tr>
																			
																				
																			</tbody>
																		</table>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div style="width: 100%; max-width: 620px; margin: 0 auto;">
						<table width="100%" cellpadding="0" cellspacing="0" border="0" style="">
							<tr>
								<td style="font-family: Verdana, sans-serif; font-weight: normal; font-size: 14px; line-height: 24px; color: #3e3e3e; text-align: left; padding-bottom: 30px; padding-top: 15px;">
									Copyright © 2023 <a href="https://nanbanmfmn.org/" target="_blank" style="text-decoration: none; color: #1a1f8e">nanbanmfmn.org</a>
								</td>
							</tr>
						</table>
					</div>
				</td>
			</tr>
		</table>
	</body>
</html>'); 
        //$this->email->send();
		
		//Send mail 
        if($this->email->send()) {
         echo 'Thanks for signing up. Please check your email for confirmation! Please check your spam folder too.'; 
         }else {
         echo  'Error in sending Email'; 
		 }
		 exit();
}

/* Verfiy Email*/
public function verifyEmail($token) {

    // Validation rules for the token parameter

    $user = $this->db->get_where('ci_customers', array('token' => $token, 'is_verify' => '0'))->row();
    $response = array();

    if ($user) {
        $this->db->update('ci_customers', array('is_verify' => '1', 'token' => ''), array('id' => $user->id));
        $response['success'] = true;
        $response['message'] = 'Email verified successfully.';
    } else {
        $user = $this->db->get_where('ci_customers', array('token' => '', 'is_verify' => '1' ))->row();
		
		
        if ($user->is_verify == '1') {
            $response['success'] = true;
            $response['message'] = 'Email is already verified.';
        } else {
            $response['success'] = false;
            $response['message'] = 'Email verification failed.';
        }
    }

    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}

/* Password Reset Email*/
public function resetPasswordRequest() {
    $data = json_decode(file_get_contents("php://input"), true);

    $email = $data['email'];

    // Check if the email exists in your database
    $user = $this->db->get_where('ci_customers', array('email' => $email))->row();

    if (!$user) {
        $response = array('status' => 'error', 'message' => 'Email ID not found.');
    } else {
        $resetToken = bin2hex(random_bytes(32));
        $resetTokenExpiration = date('Y-m-d H:i:s', strtotime('+5 hour'));

        $this->db->update('ci_customers', array(
            'reset_token' => $resetToken,
            'reset_token_expiration' => $resetTokenExpiration
        ), array('id' => $user->id));

        // Load the CodeIgniter email library
        $this->load->library('email');
        $config=array(
			'charset'=>'utf-8',
			'wordwrap'=> TRUE,
			'mailtype' => 'html',
			'newline' => '\r\n'
			
        ); 
        // Set email parameters
        $this->email->initialize($config);
        $this->email->from('no-reply@stellarsolutionsindia.com', 'MFMN');
		//$this->email->cc($list); 
        $this->email->to($user->email);
        $this->email->subject('Password Reset');
        $resetLink = 'https://mfmn.stellarsolutionsindia.com/reset/?token=' . $resetToken;
        $this->email->message("Click the following link to reset your password: $resetLink");

        // Send the email
        if ($this->email->send()) {
            $response = array('status' => 'success', 'message' => 'Password reset link sent to your email.');
        } else {
            $response = array('status' => 'error', 'message' => 'Error sending password reset email.');
        }
    }

    $this->output->set_content_type('application/json');
    $this->output->set_output(json_encode($response));
}

/* Password Reset sucess*/
public function resetPassword() {
		 $data = json_decode(file_get_contents("php://input"), true);
		$newPassword = $data['new_password'];
		$token = $data['token'];
		
		$user = $this->db->get_where('ci_customers', array('reset_token' => $token))->row();
		
		if (!$user || strtotime($user->reset_token_expiration) < time()) {
			// Invalid token or expired
			$response = array('status' => 'error', 'message' => 'Invalid or expired reset token.');
		} else {
			// Update user's password and reset token
			$this->db->update('ci_customers', array(
				'password' => password_hash($newPassword, PASSWORD_BCRYPT),
				'reset_token' => NULL,
				'reset_token_expiration' => NULL
			), array('id' => $user->id));

			$response = array('status' => 'success', 'message' => 'Password reset successfull.');
		}

		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($response));
	}


}
?>