  <!-- Content Wrapper. Contains page content -->  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>  <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.css" rel="stylesheet">  <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.js"></script>  
  <div class="content-wrapper">
  <style>
  .smalls {
	  margin-left: 10px;
	}
	label.checkbox-inline {
    padding-right: 2rem;
		margin-left: 2rem;

}
  </style>
    <!-- Main content -->
    <section class="content">
      <div class="card card-default color-palette-bo">
        <div class="card-header">
          <div class="d-inline-block">
              <h3 class="card-title"> <i class="fa fa-plus"></i>
              <?= trans('add_our people') ?> </h3>
          </div>
          <div class="d-inline-block float-right">
            <a href="<?= base_url('admin/ourpeople'); ?>" class="btn btn-success"><i class="fa fa-list"></i> <?= trans('our people_list') ?></a>
          </div>
        </div>
        <div class="card-body">

              <div class="box">
                <!-- form start -->
                <div class="box-body">

                  <!-- For Messages -->
                    <?php $this->load->view('admin/includes/_messages.php') ?>

                    <?php echo form_open_multipart(base_url('admin/ourpeople/add'), 'class="form-horizontal" onsubmit="return checkMediaSize()"');  ?> 
					<div class="row">
					<div class="col-md-6">
                    <div class="form-group">
                        <label for="ourpeople_title" class="col-md-12 control-label"><?= trans(' title *') ?></label>
                        <div class="col-md-12">
                            <input type="text" name="ourpeople_title" class="form-control" id="ourpeople_title" required="true" placeholder="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="ourpeople_designation" class="col-md-12 control-label"><?= trans('Designation name *') ?></label>
                        <div class="col-md-12">
                            <input type="text" name="ourpeople_designation" class="form-control" id="ourpeople_designation" required="true" placeholder="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="ourpeople_company_name" class="col-md-12 control-label"><?= trans('Company Name *') ?></label>
                        <div class="col-md-12">
                            <input type="text" name="ourpeople_company_name" class="form-control" id="ourpeople_company_name" required="true" placeholder="">
                        </div>
                    </div>					
                    <div class="form-group">
                        <label for="ourpeople_description" class="col-md-12 control-label"><?= trans(' description *') ?></label>
                        <div class="col-md-12">
                            <textarea id="summernote" name="ourpeople_description" required="true" style="width: 100%;height: 200px;"></textarea>
                        </div>
                    </div>

					 </div>
                    <div  class="col-md-6">
                        <label  class="control-label"><?= trans('ourpeople_image') ?></label><br/>
                        <input type="file" id="ourpeople_image" name="ourpeople_image" accept=".png, .jpg, .jpeg, .gif, .svg" >
                        <p><small class="text-success "><?= trans('allowed_types') ?>: gif, jpg, png, jpeg</small></p>
						<p><small class="text-danger hide"><?= trans('File size is more than 2MB') ?></small></p>
						<input type="hidden" id="mediafilesize" value="1">
						<br>
						<br>
						<label  class="control-label"><?= trans('ourpeople_popup_image') ?></label><br/>
						<input type="file" id="ourpeople_popup_image" name="ourpeople_popup_image" accept=".png, .jpg, .jpeg, .gif, .svg" >
						<p><small class="text-success "><?= trans('allowed_types') ?>: gif, jpg, png, jpeg</small></p>
						<p><small class="text-danger hide"><?= trans('File size is more than 2MB') ?></small></p>
						<input type="hidden" id="mediafilesize" value="1">
                    </div>
					
                    <div  class="col-md-12">
					    <label for="member_type" class="col-md-2 control-label"><?= trans('member type') ?></label><br>
                        <label class="checkbox-inline">
						    <input type="radio" name="member_type" value="1"><span class="smalls">Partners</span>
						</label>
						<label class="checkbox-inline">
						    <input type="radio" name="member_type" value="2"><span class="smalls">Advisors</span>
						</label>
                    </div>
					
					</div>
                    <div class="form-group">
                        <div class="col-md-12">
                            <input type="submit" name="submit" value="<?= trans('add_our people') ?>" class="btn btn-primary pull-right">
                        </div>
                    </div>
					
                  <?php echo form_close(); ?>
                </div>
                <!-- /.box-body -->
             
          </div>  
        </div>
    </div>
    </section> 
  </div> 
<script>
$("#ourpeople_image").on("change", function (e) {
    var count=0;
    var files = e.currentTarget.files; // puts all files into an array

    // call them as such; files[0].size will get you the file size of the 0th file
    for (var x in files) {
    
        var filesize = ((files[x].size/1024)/1024).toFixed(4); // MB
        if (files[x].name != "item" && typeof files[x].name != "undefined" && filesize <= 2) {
            count++;
        }
    }
    $('#mediafilesize').val(count);
    if(count == 0){ $('.text-danger').removeClass('hide'); }else{$('.text-danger').addClass('hide');}
});
function checkMediaSize(){
    var ret = false;
    if($('#mediafilesize').val() > 0){
        ret = true;
    }
    return ret;
}
</script>
<script>
$('textarea#summernote').summernote({        placeholder: 'Post Description',        tabsize: 2,        height: 200,  toolbar: [        ['style', ['style']],        ['font', ['bold', 'italic', 'underline', 'clear']],        ['color', ['color']],        ['para', ['ul', 'ol', 'paragraph']],        ['height', ['height']],        ['table', ['table']],        ['insert', ['link', 'picture', 'hr']],        ['help', ['help']]      ],      });
</script>
