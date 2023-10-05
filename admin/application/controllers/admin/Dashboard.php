<?php defined('BASEPATH') OR exit('No direct script access allowed');



class Dashboard extends My_Controller {



	public function __construct(){

		parent::__construct();

		auth_check(); // check login auth

		$this->rbac->check_module_access();

		if($this->uri->segment(3) != '')
		$this->rbac->check_operation_access();

		$this->load->model('admin/dashboard_model', 'dashboard_model');

	}

	//--------------------------------------------------------------------------

	public function index(){

		$data['title'] = 'Dashboard';
		$data['all_posts'] = $this->dashboard_model->get_all_posts();		
		$data['active_posts'] = $this->dashboard_model->get_active_posts();	
		$data['deactive_posts'] = $this->dashboard_model->get_deactive_posts();
		$this->load->view('admin/includes/_header', $data);

    	$this->load->view('admin/dashboard/general');

    	$this->load->view('admin/includes/_footer');

	}

	//--------------------------------------------------------------------------

	public function index_1(){

		$data['all_posts'] = $this->dashboard_model->get_all_posts();

		$data['active_posts'] = $this->dashboard_model->get_active_posts();

		$data['deactive_posts'] = $this->dashboard_model->get_deactive_posts();

		$data['title'] = 'Dashboard';

		$this->load->view('admin/includes/_header', $data);

    	$this->load->view('admin/dashboard/index', $data);

    	$this->load->view('admin/includes/_footer');

	}



	//--------------------------------------------------------------------------

	public function index_2(){

		$data['title'] = 'Dashboard';


		$this->load->view('admin/includes/_header');

    	$this->load->view('admin/dashboard/index2');

    	$this->load->view('admin/includes/_footer');

	}



	//--------------------------------------------------------------------------

	public function index_3(){

		$data['title'] = 'Dashboard';

		$this->load->view('admin/includes/_header');

    	$this->load->view('admin/dashboard/index3');

    	$this->load->view('admin/includes/_footer');

	}


}
?>	