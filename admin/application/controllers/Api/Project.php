<?php 
defined('BASEPATH') OR exit('No direct script access allowed');
//header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
class Project extends MY_Controller
{
    function __construct(){
        parent::__construct();
		$this->load->database();
    }

/*Projects Fetch*/
public function index_get($id = 0)
{
    $query = $this->db->where('is_active', '0')->order_by('id', 'asc')->get('ci_projects');

    if ($query->num_rows() > 0) {
        $data = $query->result_array();

        $listArr = array();
        foreach ($data as $val) {
            $listArr[] = array(
                'projects_id' => $val['id'],
                'projects_name' => $val['project_name'],
            );
        }

       $json_string = json_encode($listArr, JSON_PRETTY_PRINT);
       echo $json_string;
       exit();
    } else {
         echo "Not Found";
        exit();
    }
}

}

?>