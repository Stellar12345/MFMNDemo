<?php
	class Customer_model extends CI_Model{

		public function add_customer($data){
			$this->db->insert('ci_customers', $data);
			 $insert_id = $this->db->insert_id();
			return $insert_id;
		}

		//---------------------------------------------------
		// get all customers for server-side datatable processing (ajax based)
		public function get_all_customers(){
			$this->db->select('*');
			$this->db->where('is_active',0);
			return $this->db->get('ci_customers')->result_array();
		}




		//---------------------------------------------------
		// get all customers for server-side datatable processing (ajax based)

		public function get_user_by_email($email)
		{
			$this->db->where('email', $email);
			$query = $this->db->get('ci_customers'); // Replace 'users' with your actual table name

			if ($query->num_rows() > 0) {
				return $query->row_array();
			} else {
				return false;
			}
		}
		public function get_project_by_name($id)
		{
			$this->db->where('id', $id);
			$query = $this->db->get('ci_projects'); // Replace 'ci_projects' with your actual table name

			if ($query->num_rows() > 0) {
				return $query->row_array();
			} else {
				return false;
			}
		}
		
		public function checkExistingCustomer($email)
		{
			$this->db->where('email', $email);
			$query = $this->db->get('ci_customers'); 
			if ($query->num_rows() > 0) {
                $result = $query->row();
                return $result->id; 
			} else {
				return 0;
			}
		}

		//---------------------------------------------------
		// Get user detial by ID
		public function get_customer_by_id($id){
			$query = $this->db->get_where('ci_customers', array('id' => $id));
			return $result = $query->row_array();
		}

		//---------------------------------------------------
		// Edit user Record
		public function edit_user($data, $id){
			$this->db->where('id', $id);
			$this->db->update('ci_customers', $data);
			return true;
		}

		//---------------------------------------------------
		// Change user status
		//-----------------------------------------------------
		function change_status()
		{		
			$this->db->set('is_active', $this->input->post('status'));
			$this->db->where('id', $this->input->post('id'));
			$this->db->update('ci_customers');
		} 
		
		
		
/*		
public function getUserByVerificationCode($verificationCode)
{
    $query = $this->db->get_where('ci_customers', array('token' => $verificationCode, 'is_verify' => '0'));
	
    if ($query->num_rows() > 0) {
        return $query->row(); // Return the user object
    } else {
        return null; // Return null if no user found
    }
}



public function updateUserStatus($userId)
{
    // Update the user's status in the database
    // Replace the following line with your actual database update code
    $this->db->set('is_verify', '1');
    $this->db->where('id', $userId);
    $this->db->update('ci_customers');
	
    // Check if the update was successful
    if ($this->db->affected_rows() > 0) {
        return true; // Return true on success
    } else {
        return false; // Return false on failure
    }
}


function verifyToken($token) {
    // Retrieve the activation token from the database based on the provided token
    $query = $this->db->get_where('ci_customers', array('token' => $token, 'is_verify' => '0'));
    $activationToken = $query->row();

    if ($activationToken) {
        // Token found in the database
        // Update the user's email verification status
        $this->db->where('id', $activationToken->id);
        $this->db->update('ci_customers', array('is_verify' => 1, ));

        // Check if the update was successful
        $rowsAffected = $this->db->affected_rows();
		
        if ($rowsAffected > 0) {
            return true; // Verification successful
        } else {
            return false; // Failed to update the email verification status
        }
    } else {
        return 'invalid'; // Invalid token
    }
}
*/


		
}

?>