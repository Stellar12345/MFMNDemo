<?php 
//header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
defined('BASEPATH') OR exit('No direct script access allowed');


class Contact_api extends MY_Controller
{
    function __construct(){

        parent::__construct();
		//$this->load->model('admin/Contact_model', 'contact_model');
    }

/* Subscription Email */
public function subscribe_email(){

	//ob_clean();
        //$settings = get_general_settings();
        // Load the email library
		
		$data = json_decode(file_get_contents("php://input"), true);
		//$subcribe_email = $data['email'];		
		$subcribe_email = $data['email'];	
		
		//$subcribe_email = "boobathi@searchnscore.com";
		$title = "You have a new Subscribe from Mother's For Mother Nature";
		$to_mail = "boobathi@searchnscore.com";
		 
        //$from_email = $reply_to;
	    //$list = array('raghunath@stellarsolutions.org','divyathirumurugan@stellarsolutions.org');
		
       // $to_email = 'snstest123@mailinator.com';
        $subject  = "New user subscribed - MFMN";
        //Load email library 
        $this->load->library('email');
        $config=array(
			'charset'=>'utf-8',
			'wordwrap'=> TRUE,
			'mailtype' => 'html',
			'newline' => '\r\n'
			
        );  
		
        $this->email->initialize($config);
        $this->email->from($subcribe_email,''); 
        $this->email->to($to_mail);
		//$this->email->cc($list); 
        $this->email->subject($subject);
	    $logo_url = base_url('assets/img/logo.png');
	   
       $this->email->message('<!doctype html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /><title>Enquiry </title></head>
	<body style="margin: 0; padding: 0">
		<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; padding-top: 20px;">
			<tr>
				<td align="center">
					<div style="width: 100%; max-width: 650px; margin: 0 auto;">
						<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 650px; margin: 0 auto;">
							<tbody>						
								<tr>
									<td>
										<table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 620px; margin: 0 auto; background: #ffffff;">
											<tbody>
												<tr>
												<td align="center">
													<table class="col2" width="287" border="0" align="center" cellpadding="0" cellspacing="0">
													<tbody>
													<tr>
													<td height="15"></td>
													</tr>
													<tr>
													<td align="center" style="line-height:0px;">
													<img style="display:block; line-height:0px; font-size:0px; border:0px;" class="images_style" 
													src="'.$logo_url.'"/>
													</td>
													</tr>
													<tr>
													<td height="15"></td>
													</tr>
													</tbody>
													</table>
												</td>
												</tr>
												<tr>
													<td style="background-color: #f9f9f9; color: #000000;" height="100">
														<div style="color: #000000; font-size: 20px; font-family: Verdana, sans-serif; text-align: center;">
															'.$title.'
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border: 4px solid #f9f9f9;">
															<tbody>
																<tr>
																	<td width="600" style="padding-top: 70px; padding-bottom: 40px; padding-left: 70px; padding-right: 70px;">
																		<table width="100%" cellpadding="0" cellspacing="0" border="0">
																			<tbody>
																				<tr>
																					<td style="font-family: Verdana, sans-serif; color: #000000; text-align: left; padding-bottom: 15px;">
																						<label style="font-weight: bold; display: block; margin-bottom: 10px;">Email ID</label>
																						<div style="margin-bottom: 15px;">'.$subcribe_email.'</div>
																						<div style="border-bottom: 2px solid #f4f4f4;"></div>
																					</td>
																				</tr>
																				<tr>
																					<td height="20"></td>
																				</tr>
																			</tbody>
																		</table>
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
							</tbody>
						</table>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div style="width: 100%; max-width: 620px; margin: 0 auto;">
						<table width="100%" cellpadding="0" cellspacing="0" border="0" style="">
							<tr>
								<td style="font-family: Verdana, sans-serif; font-weight: normal; font-size: 14px; line-height: 24px; color: #3e3e3e; text-align: left; padding-bottom: 30px; padding-top: 15px;">
									Copyright © 2023 <a href="https://nanbanmfmn.org/" target="_blank" style="text-decoration: none; color: #1a1f8e">nanbanmfmn.org</a>
								</td>
							</tr>
						</table>
					</div>
				</td>
			</tr>
		</table>
	</body>
</html>'); 
        //$this->email->send();
		
		//Send mail 
        if($this->email->send()) {
         echo 'Email sent successfully'; 
         }else {
         echo  'Error in sending Email'; 
		 }
}

/* Contact Email */
public function send_email(){
	
	//ob_clean();
	//$settings = get_general_settings();
	// Load the email library
	
	$data = json_decode(file_get_contents("php://input"), true);
	$from_name = $data['from_name'];		
	$to_mail = "boobathi@searchnscore.com";
	$message = $data['message'];
	$mobile_number = $data['mobile_number'];
	$reply_to = $data['reply_to'];
	$to_name = $data['to_name'];
	$code = $data['code'];
	$from_email = $reply_to;
   // $list = array('raghunath@stellarsolutions.org','divyathirumurugan@stellarsolutions.org');
	
   // $to_email = 'snstest123@mailinator.com';
	$subject  = ' From ' . $from_name;
	//Load email library 
	$this->load->library('email');
	$config=array(
		'charset'=>'utf-8',
		'wordwrap'=> TRUE,
		'mailtype' => 'html',
		'newline' => '\r\n'
		
	); 
	
	$this->email->initialize($config);
	$this->email->from($from_email,''); 
	$this->email->to($to_mail);
	//$this->email->cc($list); 
	$this->email->subject($subject);
   $logo_url = base_url('assets/img/logo.png');
   
	$this->email->message('<!doctype html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /><title>Enquiry </title></head>
<body style="margin: 0; padding: 0">
	<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; padding-top: 20px;">
		<tr>
			<td align="center">
				<div style="width: 100%; max-width: 650px; margin: 0 auto;">
					<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 650px; margin: 0 auto;">
						<tbody>						
							<tr>
								<td>
									<table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 620px; margin: 0 auto; background: #ffffff;">
										<tbody>
											<tr>
											<td align="center">
												<table class="col2" width="287" border="0" align="center" cellpadding="0" cellspacing="0">
												<tbody>
												<tr>
												<td height="15"></td>
												</tr>
												<tr>
												<td align="center" style="line-height:0px;">
												<img style="display:block; line-height:0px; font-size:0px; border:0px;" class="images_style" 
												src="'.$logo_url.'"/>
												</td>
												</tr>
												<tr>
												<td height="15"></td>
												</tr>
												</tbody>
												</table>
											</td>
											</tr>
											<tr>
												<td style="background-color: #f9f9f9; color: #000000;" height="100">
													<div style="color: #000000; font-size: 20px; font-family: Verdana, sans-serif; text-align: center;">
														You have a new Message from MFMN
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border: 4px solid #f9f9f9;">
														<tbody>
															<tr>
																<td width="600" style="padding-top: 70px; padding-bottom: 40px; padding-left: 70px; padding-right: 70px;">
																	<table width="100%" cellpadding="0" cellspacing="0" border="0">
																		<tbody>
																			<tr>
																				<td style="font-family: Verdana, sans-serif; color: #000000; text-align: left; padding-bottom: 15px;">
																					<label style="font-weight: bold; display: block; margin-bottom: 10px;">Name</label>
																					<div style="margin-bottom: 15px;">'.$from_name.' '.$to_name.'</div>
																					<div style="border-bottom: 2px solid #f4f4f4;"></div>
																				</td>
																			</tr>
																			<tr>
																				<td style="font-family: Verdana, sans-serif; color: #000000; text-align: left; padding-bottom: 15px;">
																					<label style="font-weight: bold; display: block; margin-bottom: 10px;">Email</label>
																					<div style="margin-bottom: 15px;">
																						<a href="mailto:'.$reply_to.'" style="color:#000000;text-decoration: none;">'.$reply_to.'</a>
																					</div>
																					<div style="border-bottom: 2px solid #f4f4f4;"></div>
																				</td>
																			</tr>
																			<tr>
																				<td style="font-family: Verdana, sans-serif; color: #000000; text-align: left; padding-bottom: 15px;">
																					<label style="font-weight: bold; display: block; margin-bottom: 10px;">Mobile Number</label>
																					<div style="margin-bottom: 15px;">
																						<a href="tel:'.$mobile_number.'" style="color:#000000;text-decoration: none;">'.$code.' '.$mobile_number.'</a>
																					</div>
																					<div style="border-bottom: 2px solid #f4f4f4;"></div>
																				</td>
																			</tr>
																			<tr>
																				<td style="font-family: Verdana, sans-serif; color: #000000; text-align: left; padding-bottom: 15px; line-height: 25px;">
																					<label style="font-weight: bold; display: block; margin-bottom: 10px;">Message</label>
																					<div>'.$message.'</div>
																				</td>
																			</tr>
																			<tr>
																				<td height="20"></td>
																			</tr>
																		
																			
																		</tbody>
																	</table>
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
						</tbody>
					</table>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div style="width: 100%; max-width: 620px; margin: 0 auto;">
					<table width="100%" cellpadding="0" cellspacing="0" border="0" style="">
						<tr>
							<td style="font-family: Verdana, sans-serif; font-weight: normal; font-size: 14px; line-height: 24px; color: #3e3e3e; text-align: left; padding-bottom: 30px; padding-top: 15px;">
								Copyright © 2023 <a href="https://nanbanmfmn.org/" target="_blank" style="text-decoration: none; color: #1a1f8e">nanbanmfmn.org</a>
							</td>
						</tr>
					</table>
				</div>
			</td>
		</tr>
	</table>
</body>
</html>'); 
	//$this->email->send();
	
	//Send mail 
	if($this->email->send()) {
	 echo 'Thank you for contacting MFMN! A member of our team will get back to you soon.'; 
	 }else {
	 echo  'Error in sending Email'; 
	 }
}

}

?>