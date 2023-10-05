<?php
	class Donation_model extends CI_Model{

		public function insert_donation($data){
			$this->db->insert('ci_donation', $data);
			 $insert_id = $this->db->insert_id();
			return $insert_id;
		}

	 public function get_donation_by_id($donation_id) {
        // Modify this query based on your database structure
        $query = $this->db->get_where('ci_donation', array('id' => $donation_id));
        
        if ($query->num_rows() > 0) {
            return $query->row();
        } else {
            return false;
        }
    }
		
}

?>