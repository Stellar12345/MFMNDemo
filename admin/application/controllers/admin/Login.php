<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {
	


    public function __construct() {
        parent::__construct();
		$this->load->model('admin/login_model', 'login_model');
        $this->load->library('form_validation'); // Load the Form Validation Library
        $this->load->library('session'); // Load the Session Library
    }

    public function index() {
        // Handle login request
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

                if ($user) {
                    // User login success
                    $this->session->set_userdata('ci_customers', $user);
                    $response = array(
                        'status' => 'success',
                        'message' => 'Login successful'
                    );
                } else {
                    // User login failed
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
        $this->load->view('login_view');
    }
}
