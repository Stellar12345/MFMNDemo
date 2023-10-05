<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Presskit_model extends CI_Model{


	public function get_detail($id){
	
		$query = $this->db->get_where('ci_media_resources', array('media_id' => $id, 'media_type'=> 'presskit'));
		
		return $result = $query->row_array();
	}	
	public function get_count($post_id,$website_name){		
	
		$this->db->select('count(media_id) as media_count');
		
		$query = $this->db->get_where('ci_media_resources.media_id', $post_id);		
		
		return $query->row_array();
	}	
	//-----------------------------------------------------
	function get_all()
	{

		$this->db->from('ci_media_resources');

		$this->db->where('ci_media_resources.is_deleted',0);
		
		$this->db->where('ci_media_resources.media_type','presskit');

		/*if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_media_resources.media_id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_media_resources.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');
*/

		$this->db->order_by('ci_media_resources.media_id','desc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}
	
	function get_active_list()
	{

		$this->db->from('ci_media_resources');

		$this->db->where('ci_media_resources.is_deleted',0);
		
		$this->db->where('ci_media_resources.media_type','presskit');
				
		//$this->db->where('ci_media_resources.is_active',1);
		/*$this->db->like("website_name", "nanban");

		if($this->session->userdata('filter_type')!='')

			$this->db->where('ci_news.news_id',$this->session->userdata('filter_type'));

		if($this->session->userdata('filter_status')!='')

			$this->db->where('ci_news.is_active',$this->session->userdata('filter_status'));


		$filterData = $this->session->userdata('filter_keyword');


		*/
		$this->db->order_by('ci_media_resources.media_id','Asc');
		 
		$this->db->limit('1');


		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}
	
	function get_single_list($post_id)
	{

		$this->db->from('ci_media_resources');
		
		$this->db->where('ci_media_resources.is_deleted',0);
		
		$this->db->where('ci_media_resources.media_type','presskit');
		
		//$this->db->where('ci_media_resources.is_active',1);
			
		$this->db->where('ci_media_resources.media_id', $post_id);

		$this->db->order_by('ci_media_resources.media_id','Asc');

		$query = $this->db->get();

		$module = array();

		if ($query->num_rows() > 0) 
		{
			$module = $query->result_array();
		}

		return $module;
	}

}

?>