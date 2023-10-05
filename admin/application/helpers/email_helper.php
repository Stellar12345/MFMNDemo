<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

function send_email($to = '', $subject  = '', $body = '', $attachment = '', $cc = ''){
        $settings = get_general_settings();
        $controller =& get_instance();
        // Load the email library
        $from_email = $settings['email_from'];
        $fromName =  $settings['application_name']; 
        $to_email = $to; 
        $subject  = $subject;
        //Load email library 
        $controller->load->library('email');
        $config=array(
        'charset'=>'utf-8',
        'wordwrap'=> TRUE,
        'mailtype' => 'html',
        'newline' => '\r\n'
        );
        $controller->email->initialize($config);
        $controller->email->from($from_email, $fromName); 
        $controller->email->to($to_email);
        $controller->email->subject($subject);
        $controller->email->message($body); 
        $controller->email->send();
        }	
	

?>