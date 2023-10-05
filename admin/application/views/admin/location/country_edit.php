<div class="content-wrapper">
	<section class="content">
		<!-- For Messages -->
		<?php $this->load->view('admin/includes/_messages.php') ?>
		<div class="card">
			<div class="card-header">
				<div class="d-inline-block">
					<h3 class="card-title"><i class="fa fa-pencil"></i>&nbsp; Edit Country</h3>
				</div>
				<div class="d-inline-block float-right">
					<a href="<?= base_url('admin/location'); ?>" class="btn btn-success"><i class="fa fa-list"></i>  Country List</a>
					<?php if($this->rbac->check_operation_permission('add')): ?>
					<a href="<?= base_url('admin/location/country/add'); ?>" class="btn btn-success"><i class="fa fa-plus"></i>Add Country</a>
					<?php endif; ?>
				</div>
			</div>
			<div class="card-body">
				<?php validation_errors(); ?>
				<?php echo form_open(base_url('admin/location/country/edit/'.$locations['id']), 'class="form-horizontal"' )?>             
				<div class="form-group">
					<div class="col-sm-12">
						<div class="form-group">					<label class="control-label"><?= trans('Latitude *') ?></label> 			
						<input type="text" name="latitude" class="form-control" id="latitude" value='<?php echo $locations['latitude'] ?>' required>		
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-12">
						<div class="form-group">					<label class="control-label"><?= trans('Longitude *') ?></label> 			
						<input type="text" name="longitude" class="form-control" id="longitude" value='<?php echo $locations['longitude'] ?>'  required>				</div>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-12">
						<div class="form-group">					<label class="control-label"><?= trans('Name *') ?></label> 				
						<input type="text" name="name" class="form-control" id="name" value='<?php echo $locations['name'] ?>'  required>				</div>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-12">
						<div class="form-group">					<label class="control-label"><?= trans('Info') ?></label> 				
						<input type="text" name="info" class="form-control" id="info" value='<?php echo $locations['info'] ?>'  placeholder="">				</div>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-12">
						<div class="form-group">					<label class="control-label"><?= trans('Country *') ?></label> 					
						<?php 						$options = array('' => 'Select Country') + array_column($countries, 'name','id');				
						echo form_dropdown('country',$options,$locations['country_id'],'required class="select2 country" style="width: 100%;"');	
						?>				</div>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-12">
						<label class="control-label"><?= trans('State *') ?></label> 				
						<div class="states">									</div>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-12">
						<label class="control-label"><?= trans('City *') ?></label> 				
						<div class="citys">										</div>
					</div>
				</div>
				<!--   <div class="form-group">
					<label for="country_name" class="col-sm-2 control-label">Country Name</label>
					
					<div class="col-sm-12">
					  <input type="text" name="country" value="<?= $country['name']; ?>" class="form-control" id="country" placeholder="">
					</div>
					</div>
					<div class="form-group">
					<label for="status" class="col-sm-2 control-label">Status</label>
					
					<div class="col-sm-12">
					  <select name="status" class="form-control">
					    <option value="">Select Status</option>
					    <option value="1" <?= ($country['status'] == 1)?'selected': '' ?> >Active</option>
					    <option value="0" <?= ($country['status'] == 0)?'selected': '' ?>>Inactive</option>
					  </select>
					</div>
					</div> -->
				<div class="form-group">
					<div class="col-md-12">
						<input type="submit" name="submit" value="Update country" class="btn btn-primary pull-right">
					</div>
				</div>
				<?php echo form_close(); ?>
			</div>
			<!-- /.box-body -->
		</div>
	</section>
</div>
<script>    $(function () {      $('.select2').select2()    });</script>
<script>  $("#location").addClass('active');</script>
<script>
	var csfr_token_name = '<?php echo $this->security->get_csrf_token_name(); ?>';
	var csfr_token_value = '<?php echo $this->security->get_csrf_hash(); ?>';
	state_feth();
	city_feth();
	
	function state_feth(){  
	if(this.value == '')  {   
	 $('.state').html('<option value="">Select Option</option>'); 
	 $('.city').html('<option value="">Select Option</option>');  
	 return false;  } 
	 var data =  {  
		country : <?php echo $locations['country_id']; ?>,
		state_id : <?php echo $locations['state_id']; ?>,
	 } 
	  
	 data[csfr_token_name] = csfr_token_value; 
	 $.ajax({ 
	 type: "POST",    
	 url: "<?= base_url('admin/auth/get_country_states') ?>",   
	 data: data,    
	 dataType: "json",    
	 success: function(obj) {
	console.log(obj);		 
	 $('.states').html(obj.msg);	
	 
	 $('.select2').select2();  
	 },  
	 });
	 }
	 
	function city_feth(){  


  var data =  {

    state : <?php echo $locations['state_id']; ?>,
    city_id : <?php echo $locations['city_id']; ?>,

  }
	
  data[csfr_token_name] = csfr_token_value;

  $.ajax({

    type: "POST",

    url: "<?= base_url('admin/auth/get_state_cities') ?>",

    data: data,

    dataType: "json",

    success: function(obj) {

      $('.citys').html(obj.msg);
	  $('.select2').select2();

   },

  });
  }
</script>