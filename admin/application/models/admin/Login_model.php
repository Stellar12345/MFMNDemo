<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

public function login($email, $password) {
    $this->db->where('email', $email);
    $query = $this->db->get('ci_customers');
	//print_r($query->row());
	return $query->row();
	/*
    if ($query->num_rows() > 0) {
        $user = $query->row();
		
		
        // Verify the password
        if (password_verify($password, $user->password)) {
            // Password matches, retrieve user data
            // Do something with the user data
            //$response = array(
                'status' => 'success',
                'message' => 'Login successful',
                'user' => $user
            );
        } else {
            // Password does not match
            //$response = array(
                'status' => 'error',
                'message' => 'Invalid email or password'
            );
        }
    } else {
        // User does not exist
        $response = array(
            'status' => 'error',
            'message' => 'Invalid email or password'
        );
    }*/

    //echo json_encode($response);
}

}

