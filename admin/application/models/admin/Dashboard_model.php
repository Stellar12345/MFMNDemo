<?php
	class Dashboard_model extends CI_Model{

		public function get_all_posts(){
			$this->db->select("*");
			$this->db->from('ci_slider');
			$this->db->where('is_deleted', 0);
			$getpost =  $this->db->get();
			return $getpost->num_rows();
			
		}
		public function get_active_posts(){
			$this->db->where('is_active', 1);
			return $this->db->count_all_results('ci_slider');
		}
		public function get_deactive_posts(){
			$this->db->where('is_deleted', 0);
			$this->db->where('is_active', 0);
			return $this->db->count_all_results('ci_slider');
		}		
	}

?>
