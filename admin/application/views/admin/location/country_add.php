<div class="content-wrapper">
  <section class="content">
    <!-- For Messages -->
    <?php $this->load->view('admin/includes/_messages.php') ?>
    <div class="card">
      <div class="card-header">
        <div class="d-inline-block">
          <h3 class="card-title"><i class="fa fa-list"></i>&nbsp; Add Location</h3>
        </div>
        <div class="d-inline-block float-right">
          <a href="<?= base_url('admin/location'); ?>" class="btn btn-success"><i class="fa fa-list"></i> Location List</a>
        </div>
      </div>
      <!-- /.card-header -->
      <div class="card-body">
          <?php echo validation_errors(); ?>           
          <?php echo form_open(base_url('admin/location/country/add'), 'class="form-horizontal"');  ?> 
            <div class="form-group">
			   <div class="col-sm-12">
				 <div class="form-group">
					<label class="control-label"><?= trans('Latitude *') ?></label> 
					<input type="text" name="latitude" class="form-control" id="latitude" required>
				</div>
              </div>
            </div>   
            <div class="form-group">
			   <div class="col-sm-12">
				 <div class="form-group">
					<label class="control-label"><?= trans('Longitude *') ?></label> 
					<input type="text" name="longitude" class="form-control" id="longitude" required>
				</div>
              </div>
            </div>   
            <div class="form-group">
			   <div class="col-sm-12">
				 <div class="form-group">
					<label class="control-label"><?= trans('Name *') ?></label> 
					<input type="text" name="name" class="form-control" id="name" required>
				</div>
              </div>
            </div>   
            <div class="form-group">
			   <div class="col-sm-12">
				 <div class="form-group">
					<label class="control-label"><?= trans('Info') ?></label> 
					<input type="text" name="info" class="form-control" id="info" placeholder="">
				</div>
              </div>
            </div>   
            <div class="form-group">
			   <div class="col-sm-12">
				 <div class="form-group">
					<label class="control-label"><?= trans('Country *') ?></label> 
					<?php 
						$options = array('' => 'Select Country') + array_column($countries, 'name','id');
						echo form_dropdown('country',$options,'','required class="select2 country" style="width: 100%;"');
					?>
				</div>
              </div>
            </div>         
			<div class="form-group">             
				<div class="col-sm-12">
					<label class="control-label"><?= trans('State *') ?></label> 
				<div class="states">
						<select class='select2' style="width: 100%;">
							<option> Select state</option>
						</select>
				</div>           
			</div>  
			</div>			
			<div class="form-group">            
				<div class="col-sm-12">   
				<label class="control-label"><?= trans('City *') ?></label> 
				<div class="citys">
						<select class='select2'  style="width: 100%;">
							<option> Select city</option>
						</select>
				</div> 
				</div>           
			</div>			
            <div class="form-group">
              <div class="col-md-12">
                <input type="submit" name="submit" value="Add Location" class="btn btn-primary pull-right">
              </div>
            </div>
          <?php echo form_close( ); ?>
      </div>
      <!-- /.box-body -->
    </div>
  </section>
</div> 

<script>
    $(function () {
      $('.select2').select2()
    });
</script>
<script>
  $("#location").addClass('active');
</script>
