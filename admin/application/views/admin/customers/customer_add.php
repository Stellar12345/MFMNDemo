  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Main content -->
    <section class="content">
      <div class="card card-default">
        <div class="card-header">
          <div class="d-inline-block">
              <h3 class="card-title"> <i class="fa fa-plus"></i>
             <?= trans('add_new_customer') ?> </h3>
          </div>
          <div class="d-inline-block float-right">
            <a href="<?= base_url('admin/customers'); ?>" class="btn btn-success"><i class="fa fa-list"></i>  <?= trans('customers_list') ?></a>
          </div>
        </div>
        <div class="card-body">
   
           <!-- For Messages -->
            <?php $this->load->view('admin/includes/_messages.php') ?>

            <?php echo form_open(base_url('admin/customers/add'), 'class="form-horizontal"');  ?> 
              <!--div class="form-group">
                <label for="customername" class="col-md-2 control-label"><?= trans('customer name') ?></label>

                <div class="col-md-12">
                  <input type="text" name="customername" class="form-control" id="customername" placeholder="">
                </div>
              </div-->
              <div class="row">
              <div class="col-md-6">
				  <div class="form-group">
					<label for="firstname" class="col-md-2 control-label"><?= trans('first name *') ?></label>

					<div class="col-md-12">
					  <input type="text" name="firstname" class="form-control" id="firstname" placeholder="" required>
					</div>
				  </div>
              </div>
              <div class="col-md-6">
				  <div class="form-group">
					<label for="lastname" class="col-md-2 control-label"><?= trans('last name *') ?></label>
					<div class="col-md-12">
					  <input type="text" name="lastname" class="form-control" id="lastname" placeholder="" required>
					</div>
				  </div>
              </div>
              <div class="col-md-6">
				   <div class="form-group">
					<label for="email" class="col-md-2 control-label"><?= trans('email *') ?></label>

					<div class="col-md-12">
					  <input type="email" name="email" class="form-control" id="email" placeholder="" autocomplete="off" required>
					</div>
				  </div> 
              </div>
              <div class="col-md-6">
				  <div class="form-group">
					<label for="mobile_no" class="col-md-2 control-label"><?= trans('mobile_no *') ?></label>
					<div class="col-md-12">
					<div class="input-group mb-3">
					<div class="input-group-prepend">
					<span class="input-group-text"> <input type="text" name="code" class="form-control" id="code" placeholder="+ 91"></span>
					</div>
					  <input type="number" name="mobile_no" class="form-control" id="mobile_no" placeholder="" required>
					</div>				
				  </div>			  
				  </div>
              </div>
              <div class="col-md-6">
				   <div class="form-group">
					<label for="mobile_no" class="col-md-2 control-label"><?= trans('Country *') ?></label>
						<div class="col-sm-12">
							<div class="form-group">
							<?php 
								$options = array('' => 'Select Country') + array_column($countries, 'name','id');
								echo form_dropdown('country',$options,'','required class="select2 country" style="width: 100%;" required');
							?>
							</div>
						</div>		
					</div>
              </div>
			  
			  <div class="col-md-6">
				<div class="col-sm-12">
					<label class="control-label"><?= trans('State *') ?></label> 
					<div class="states">
							<select class='select2' name="state" style="width: 100%;">
								<option> Select state</option>
							</select>
					</div>           
				</div>	
              </div>
			  
              <div class="col-md-6">
                <div class="form-group">
					<div class="col-sm-12">   
						<label class="control-label"><?= trans('City *') ?></label> 
						<div class="citys">
							<select class='select2'  name="city" style="width: 100%;" required>
								<option> Select city</option>
							</select>
						</div> 
					</div>  		
				</div>	
              </div>
			  
              <div class="col-md-6">
				<div class="form-group">
					<label for="password" class="col-md-2 control-label"><?= trans('password *') ?></label>
					<div class="col-md-12">
					  <input type="password" name="password" class="form-control" id="password" placeholder="" autocomplete="off" required>
					</div>
				</div>
              </div>
			  
              <div class="col-md-6">
				<div class="form-group mb-4">
					<label for="lastname" class="col-md-2 control-label"><?= trans('Address') ?></label>
					<div class="col-md-12">
					  <input type="text" name="address" class="form-control" id="address" placeholder="">
					</div>
				</div>
              </div>
			  
              <div class="col-md-6">
				  <div class="form-group">
					<label for="pan_number" class="col-md-2 control-label"><?= trans('pan_number *') ?></label>
					<div class="col-md-12">
					  <input type="text" name="pan_number" class="form-control" id="pan_number" placeholder="" required>
					</div>
				  </div>
              </div>
			  

              <div class="col-md-6">
				  <div class="form-group">
					<label for="pincode" class="col-md-2 control-label"><?= trans('pincode *') ?></label>

					<div class="col-md-12">
					  <input type="text" name="pincode" class="form-control" id="pincode" placeholder="" autocomplete="off">
					</div>
				  </div>
              </div>
			  
              </div>
              <div class="form-group">
                <div class="col-md-12">
                  <input type="submit" name="submit" value="<?= trans('add_customer') ?>" class="btn btn-primary pull-right">
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
    //Initialize Select2 Elements
    $('.select2').select2()
  })
 
</script>  