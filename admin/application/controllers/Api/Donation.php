<?php 

header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
defined('BASEPATH') OR exit('No direct script access allowed');


class Donation extends MY_Controller
{
    function __construct(){

        parent::__construct();
 		$this->load->model('admin/customer_model', 'customer_model');
		$this->load->model('admin/Activity_model', 'activity_model');
		$this->load->model('admin/location_model', 'location_model');;
		$this->load->model('admin/Donation_model', 'donation_model');;
    }

public function pay_donation()
{
    $data = json_decode(file_get_contents("php://input"), true); 
    
	// Check if the donation amount is provided
	if ((empty($data['donation_amount'])) && (empty($data['contribution_price']))) {
		$response = array('status' => 'failure', 'message' => 'Please select a donation amount');
		echo json_encode($response);
		exit();
	}

	if (empty($data['donation_amount'])) {
		$donation_amount = str_replace('₹', '', $data['contribution_price']);
	} else {
		$donation_amount = str_replace('₹', '', $data['donation_amount']);
	}

	//print_r($data);
	$donationData = array(
		'user_id' => $this->get_customer_id($data), 
		'project_id' => $data['project'],
		'donation_amount' => $donation_amount,
		'is_recurring' => (!empty($data['is_recurring']) ? 'Y' : 'N'), // Check if the checkbox is checked
		'recurring_type' => (!empty($data['is_recurring']) ? 'monthly' : 'one_time'),
		'created_at' => date('Y-m-d H:i:s')
	);

	$data = $this->security->xss_clean($donationData);
	$donation = $this->donation_model->insert_donation($data);

	if ($donation > 0) {
		$response = array('status' => 'success', 'message' => 'Donation paid successfully');
		$this->donation_successful($donation);

		
	} else {
		$response = array('status' => 'failure', 'message' => 'Please try again later');
		echo json_encode($response);

	}

	exit();

}


public function donation_successful($donation_id) {
    // Load the email library
    $this->load->library('email');

    // Fetch donation details from the database based on donation_id
    $donation = $this->donation_model->get_donation_by_id($donation_id);
   
	$user_id = $donation->user_id;
	$project_id = $donation->project_id;
	$customer_id = $this->customer_model->get_customer_by_id($user_id);
	$projects = $this->customer_model->get_project_by_name($project_id);
	
    if ($donation) {
        // Set email parameters
        $recipient_email = $customer_id['email']; // Change this to the recipient's email field in your donation data
        $recipient_name = $customer_id['firstname']; // Change this to the recipient's name field in your donation data
        $phone_number = $customer_id['mobile_no']; // Change this to the recipient's name field in your donation data
        $countrycode = $customer_id['code']; // Change this to the recipient's name field in your donation data
        $project_name = $projects['project_name']; // Change this to the recipient's name field in your donation data
        $donation_amount = $donation->donation_amount; // Change this to the donation amount field in your donation data

         //Load email library 
        $this->load->library('email');
        $config=array(
			'charset'=>'utf-8',
			'wordwrap'=> TRUE,
			'mailtype' => 'html',
			'newline' => '\r\n'
			
        ); 
		      
		$this->email->initialize($config);
		$this->email->from('no-reply@stellarsolutionsindia.com', 'MFMN');
		$this->email->to($recipient_email);
		//$this->email->cc($list); 
		$this->email->subject('Donation Successful');
		$logo_url = base_url('assets/img/logo.png');
		$top = base_url('assets/img/round_corner_top.png');
		$corner = base_url('assets/img/round_corner_bottom.png');
	   
        $this->email->message('<!DOCTYPE html>
		<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
		<head>
		<title></title>
		<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
		<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
		<style>
				* {
					box-sizing: border-box;
				}

				body {
					margin: 0;
					padding: 0;
				}

				a[x-apple-data-detectors] {
					color: inherit !important;
					text-decoration: inherit !important;
				}

				#MessageViewBody a {
					color: inherit;
					text-decoration: none;
				}

				p {
					line-height: inherit
				}

				.desktop_hide,
				.desktop_hide table {
					mso-hide: all;
					display: none;
					max-height: 0px;
					overflow: hidden;
				}

				.image_block img+div {
					display: none;
				}

				.menu_block.desktop_hide .menu-links span {
					mso-hide: all;
				}

				@media (max-width:700px) {

					.desktop_hide table.icons-inner,
					.social_block.desktop_hide .social-table {
						display: inline-block !important;
					}

					.icons-inner {
						text-align: center;
					}

					.icons-inner td {
						margin: 0 auto;
					}

					.image_block img.fullWidth {
						max-width: 100% !important;
					}

					.menu-checkbox[type=checkbox]~.menu-links {
						display: none !important;
						padding: 5px 0;
					}

					.menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-open {
						display: none !important;
					}

					.menu-checkbox[type=checkbox]:checked~.menu-links,
					.menu-checkbox[type=checkbox]~.menu-trigger {
						display: block !important;
						max-width: none !important;
						max-height: none !important;
						font-size: inherit !important;
					}

					.menu-checkbox[type=checkbox]~.menu-links>a,
					.menu-checkbox[type=checkbox]~.menu-links>span.label {
						display: block !important;
						text-align: center;
					}

					.menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-close {
						display: block !important;
					}

					.mobile_hide {
						display: none;
					}

					.row-content {
						width: 100% !important;
					}

					.stack .column {
						width: 100%;
						display: block;
					}

					.mobile_hide {
						min-height: 0;
						max-height: 0;
						max-width: 0;
						overflow: hidden;
						font-size: 0px;
					}
					.desktop_hide,
					.desktop_hide table {
						display: table !important;
						max-height: none !important;
					}
				}

				#memu-r7c0m2:checked~.menu-links {
					background-color: #000 !important;
				}

				#memu-r7c0m2:checked~.menu-links a,
				#memu-r7c0m2:checked~.menu-links span {
					color: #fff !important;
				}
			</style>
		</head>
		<body style="background-color: #e6e9dd; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
		<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e6e9dd;" width="100%">
		<tbody>
		<tr>
		<td>
		<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
		<tbody>
		<tr>
		<td>
		<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
		<tbody>
		<tr>
		<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
		<div class="spacer_block block-1" style="height:30px;line-height:30px;font-size:1px;"> </div>
		</td>
		</tr>
		</tbody>
		</table>
		</td>
		</tr>
		</tbody>
		</table>
		<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
		<tbody>
		<tr>
		<td>
		<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
		<tbody>
		<tr>
		<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
		<div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
		</td>
		<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
		<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
		<tr>
		<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
		<div align="center" class="alignment" style="line-height:10px"><img alt="Company Logo" src='.$logo_url.' style="display: block; height: auto; border: 0; max-width: 147.33333333333331px; width: 100%;" title="Company Logo" width="147.33333333333331"/></div>
		</td>
		</tr>
		</table>
		</td>
		<td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
		<div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
		</td>
		</tr>
		</tbody>
		</table>
		</td>
		</tr>
		</tbody>
		</table>
		<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
		<tbody>
		<tr>
		<td>
		<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
		<tbody>
		<tr>
		<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
		<div class="spacer_block block-1" style="height:10px;line-height:10px;font-size:1px;"> </div>
		</td>
		</tr>
		</tbody>
		</table>
		</td>
		</tr>
		</tbody>
		</table>
		<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
		<tbody>
		<tr>
		<td>
		<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
		<tbody>
		<tr>
		<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
		<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
		<tr>
		<td class="pad" style="width:100%;">
		<div align="center" class="alignment" style="line-height:10px"><img alt="Top round corners" src='.$top.' style="display: block; height: auto; border: 0; max-width: 680px; width: 100%;" title="Top round corners" width="680"/></div>
		</td>
		</tr>
		</table>
		</td>
		</tr>
		</tbody>
		</table>
		</td>
		</tr>
		</tbody>
		</table>
		<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
		<tbody>
		<tr>
		<td>
		<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 680px; margin: 0 auto;" width="680">
		<tbody>
		<tr>
		<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">

		<div class="spacer_block block-2" style="height:35px;line-height:35px;font-size:1px;"> </div>
		<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
		<tr>
		<td class="pad" style="text-align:center;width:100%;">
		<h1 style="margin: 0; color: #101010; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 27px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Thanks for your Donation</strong></h1>
		</td>
		</tr>
		</table>
		</td>
		</tr>
		</tbody>
		</table>
		</td>
		</tr>
		</tbody>
		</table>
		<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
		<tbody>
		<tr>
		<td>
		<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 680px; margin: 0 auto;" width="680">
		<tbody>
		<tr>
		<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
		<div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
		</td>
		<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
		<table border="0" cellpadding="0" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
		<tr>
		<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
		<div style="font-family: Arial, sans-serif">
		<div class="" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; text-align: center; mso-line-height-alt: 21.6px; color: #666666; line-height: 1.8;">
		<p style="margin: 0; mso-line-height-alt: 21.6px;"><span style="font-size:17px;">Thank you for your donations towards the<br><b>'.$project_name.'</b></span></p>
		</div>
		</div>
		</td>
		</tr>
		</table>

		<div class="spacer_block block-4" style="height:20px;line-height:20px;font-size:1px;"> </div>
		</td>
		<td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
		<div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
		</td>
		</tr>
		</tbody>
		</table>
		</td>
		</tr>
		</tbody>
		</table>
		<table border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
		<tbody>
		<tr>
		<td>
		<table border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 680px; margin: 0 auto;" width="680">
		<tbody>
		<tr>	
		<td class="column " style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
		<table border="0" cellpadding="0" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
		<tr>
		<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
		<div style="font-family: Arial, sans-serif">
		<div class="" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #666666; line-height: 1.8;">
		<p style="margin: 0; mso-line-height-alt: 21.6px;"><span style="font-size:17px;">Contribution Amount</span></p>
		</div>
		</div>
		</td>
		<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
		<div style="font-family: Arial, sans-serif">
		<div class="" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #666666; line-height: 1.8;">
		<p style="margin: 0; mso-line-height-alt: 21.6px;"><span style="font-size:17px;">:</span></p>
		</div>
		</div>
		</td>
		<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
		<div style="font-family: Arial, sans-serif">
		<div class="" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;  mso-line-height-alt: 21.6px; color: #666666; line-height: 1.8;">
		<p style="margin: 0; mso-line-height-alt: 21.6px;"><span style="font-size:17px;">$ '.$donation_amount.'</span></p>
		</div>
		</div>
		</td>
		</tr>
		<tr>
		<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
		<div style="font-family: Arial, sans-serif">
		<div class="" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #666666; line-height: 1.8;">
		<p style="margin: 0; mso-line-height-alt: 21.6px;"><span style="font-size:17px;">First Name</span></p>
		</div>
		</div>
		</td>
		<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
		<div style="font-family: Arial, sans-serif">
		<div class="" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #666666; line-height: 1.8;">
		<p style="margin: 0; mso-line-height-alt: 21.6px;"><span style="font-size:17px;">:</span></p>
		</div>
		</div>
		</td>
		<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
		<div style="font-family: Arial, sans-serif">
		<div class="" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;  mso-line-height-alt: 21.6px; color: #666666; line-height: 1.8;">
		<p style="margin: 0; mso-line-height-alt: 21.6px;"><span style="font-size:17px;">'.$recipient_name.'</span></p>
		</div>
		</div>
		</td>
		</tr>
		<tr>
		<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
		<div style="font-family: Arial, sans-serif">
		<div class="" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #666666; line-height: 1.8;">
		<p style="margin: 0; mso-line-height-alt: 21.6px;"><span style="font-size:17px;">Email</span></p>
		</div>
		</div>
		</td>
		<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
		<div style="font-family: Arial, sans-serif">
		<div class="" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #666666; line-height: 1.8;">
		<p style="margin: 0; mso-line-height-alt: 21.6px;"><span style="font-size:17px;">:</span></p>
		</div>
		</div>
		</td>
		<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
		<div style="font-family: Arial, sans-serif">
		<div class="" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;  mso-line-height-alt: 21.6px; color: #666666; line-height: 1.8;">
		<p style="margin: 0; mso-line-height-alt: 21.6px;"><span style="font-size:17px;">'.$recipient_email.'</span></p>
		</div>
		</div>
		</td>
		</tr>
		<tr>
		<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
		<div style="font-family: Arial, sans-serif">
		<div class="" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #666666; line-height: 1.8;">
		<p style="margin: 0; mso-line-height-alt: 21.6px;"><span style="font-size:17px;">Phone</span></p>
		</div>
		</div>
		</td>
		<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
		<div style="font-family: Arial, sans-serif">
		<div class="" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #666666; line-height: 1.8;">
		<p style="margin: 0; mso-line-height-alt: 21.6px;"><span style="font-size:17px;">:</span></p>
		</div>
		</div>
		</td>
		<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
		<div style="font-family: Arial, sans-serif">
		<div class="" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;  mso-line-height-alt: 21.6px; color: #666666; line-height: 1.8;">
		<p style="margin: 0; mso-line-height-alt: 21.6px;"><span style="font-size:17px;">'.$countrycode.' '.$phone_number.'</span></p>
		</div>
		</div>
		</td>
		</tr>
		</table>
			<div class="spacer_block block-2" style="height:10px;line-height:10px;font-size:1px;"> </div>
				<!-- <table border="0" cellpadding="10" cellspacing="0" class="button_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
				<tr>
				<td class="pad">
				<div align="center" class="alignment"><a href="#" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#475443;border-radius:4px;width:auto;border-top:1px solid #475443;font-weight:undefined;border-right:1px solid #475443;border-bottom:1px solid #475443;border-left:1px solid #475443;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;">Reset Password</span></span></a></div>
				</td>
				</tr>
				</table> -->
			<div class="spacer_block block-4" style="height:20px;line-height:20px;font-size:1px;"> </div>
			</td>
			
			</tr>
			
			</tbody>
			</table>
			</td>
			</tr>
			</tbody>
			</table>



			<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
			<tbody>
			<tr>
			<td>
			<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
			<tbody>
			<tr>
			<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
			<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
			<tr>
			<td class="pad" style="width:100%;">
			<div align="center" class="alignment" style="line-height:10px"><img alt="Bottom round corners" src='.$corner.' style="display: block; height: auto; border: 0; max-width: 680px; width: 100%;" title="Bottom round corners" width="680"/></div>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			</tbody>
			</table>
			</td>
			</tr>
			</tbody>
			</table>
			</div>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			</tbody>
			</table>
			</td>
			</tr>
			</tbody>
			</table>
			<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
				<tbody>
				<tr>
				<td>
				<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
				<tbody>
				<tr>
				<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
				<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"></div>
				<table border="0" cellpadding="0" cellspacing="0" class="menu_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
				<tr>
				<td class="pad" style="color:#101010;font-family:inherit;font-size:14px;text-align:center;">
				<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
				<tr>
				<td class="alignment" style="text-align:center;font-size:0px;"><!--[if !mso]><!--><input class="menu-checkbox" id="memu-r7c0m1" style="display:none !important;max-height:0;visibility:hidden;" type="checkbox"/><!--<![endif]-->
				<div class="menu-trigger" style="display:none;max-height:0px;max-width:0px;font-size:0px;overflow:hidden;"><label class="menu-label" for="memu-r7c0m1" style="height: 36px; width: 36px; display: inline-block; cursor: pointer; mso-hide: all; user-select: none; align: center; text-align: center; color: #ffffff; text-decoration: none; background-color: #000000; border-radius: 0;"><span class="menu-open" style="mso-hide:all;font-size:26px;line-height:31.5px;">☰</span><span class="menu-close" style="display:none;mso-hide:all;font-size:26px;line-height:36px;">✕</span></label></div>
				<div class="menu-links"><!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]-->
				<a href="https://nanbanmfmn.org/" target="_blank" style="text-decoration: none; color: #1a1f8e">nanbanmfmn.org</a><!--[if mso]></td><![endif]--><!--[if mso]></tr></table><![endif]--></div>
				</td>
				</tr>
				</table>
				</td>
				</tr>
				</table>
				</td>
				</tr>
				</tbody>
				</table>
				</td>
				</tr>
				</tbody>
				</table>
			<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
			<tbody>
			<tr>
			<td>
			<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
			<tbody>
			<tr>
			<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
			<div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
			</td>
			<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
			<div class="spacer_block block-1" style="height:35px;line-height:35px;font-size:1px;"> </div>
			</td>
			<td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
			<div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
			</td>
			</tr>
			</tbody>
			</table>
			</td>
			</tr>
			</tbody>
			</table>
			</td>
			</tr>
			<tr>
				<td height="30" style="font-size:0px">&nbsp;</td>
			 </tr>
			</tbody>
			</table><!-- End -->
			</body>
			</html>'); 
        // Send the email
        if ($this->email->send()) {
			$response = array('status' => 'success', 'message' => 'Donation success email sent successfully.');
        } else {
			$response = array('status' => 'success', 'message' => 'Error sending donation success email.');

        }
    } else {
		$response = array('status' => 'success', 'message' => 'Donation not found.');

    }
	echo json_encode($response);
	exit();
}



private function get_customer_id($data) {
    
   $customer_id =  $this->customer_model->checkExistingCustomer($data['email_address']);
    
	
	
      $customer_data =  array(
        'username' => $data['first_name'],
        'firstname' => $data['first_name'],
        'lastname' => $data['last_name'],
        'email' =>$data['email_address'],
        'code' => $data['code'],
        'mobile_no' => $data['mobile_no'],
        'pan_number' => $data['pan_number'],
        'password' =>password_hash(time(), PASSWORD_BCRYPT),
        'address' => $data['address'],
        'country_id' => $data['country'],
        'state_id' => $data['state'],
        'city_id' =>  $data['city'],
        'pincode' => $data['pincode'],
        'role' => 3,
        'is_active' => 0,
        'is_verify' => 0,
        'created_at' => date('Y-m-d H:i:s'));
        
        if($customer_id>0) {
            return $customer_id;
        } else {
             return $this->customer_model->add_customer($customer_data);
        }
        
}
 

}

?>