<?php
//header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends MY_Controller {
	
    function __construct() {
        parent::__construct();
		$this->load->model('admin/login_model', 'login_model');
		$this->load->model('admin/customer_model', 'customer_model');
        $this->load->library('form_validation'); // Load the Form Validation Library
        $this->load->library('session'); // Load the Session Library
    }
/* Login Module*/
public function index() {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $this->form_validation->set_rules('email', 'Email', 'trim|required');
        $this->form_validation->set_rules('password', 'Password', 'trim|required');

        if ($this->form_validation->run() === FALSE) {
            // Login form validation failed
            $response = array(
                'status' => 'error',
                'message' => validation_errors()
            );
        } else {
            $email = $this->input->post('email');
            $password = $this->input->post('password');
            $user = $this->login_model->login($email, $password);

            if ($user && password_verify($password, $user->password)) {
                if ($user->is_verify == 1 && empty($user->token)) {
                    // Password matches, account is verified, and token is empty
                    // Do something with the user data
                    $response = array(
                        'status' => 'success',
                        'message' => 'Login successful',
                        'user' => $user
                    );
                } else {
                    // Account not verified or token is not empty
                    $response = array(
                        'status' => 'error',
                        'message' => 'Account not verified or token is not empty'
                    );
                }
            } else {
                // Invalid email or password
                $response = array(
                    'status' => 'error',
                    'message' => 'Invalid email or password'
                );
            }
        }

        echo json_encode($response);
        return;
    }

    // Return login view to React.js
    $this->load->view('donate');
}	

/* Forgot Password*/
public function forgot_password()
{
	$this->form_validation->set_rules('email', 'Email', 'required|valid_email');

	if ($this->form_validation->run() === false) {
		$response = array(
			'status' => 'error',
			'message' => validation_errors()
		);
	} else {
		$email = $this->input->post('email');

		// Check if the email exists in the database
		$user = $this->customer_model->get_user_by_email($email);

		if ($user) {
			// Generate a unique token and save it in the user's record in the database
			$token = $this->generate_token();
			$this->user_model->update_user_token($user['id'], $token);

			// Send the password reset email with the token
			$this->send_reset_password_email($email, $token);

			$response = array(
				'status' => 'success',
				'message' => 'Password reset email has been sent.'
			);
		} else {
			$response = array(
				'status' => 'error',
				'message' => 'Email does not exist in our records.'
			);
		}
	}

	echo json_encode($response);
}

	
	
}
