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
              <?= trans('add_ourjourney') ?> </h3>
          </div>
          <div class="d-inline-block float-right">
            <a href="<?= base_url('admin/ourjourney'); ?>" class="btn btn-success"><i class="fa fa-list"></i> <?= trans('ourjourney_list') ?></a>
          </div>
        </div>
        <div class="card-body">

              <div class="box">
                <!-- form start -->
                <div class="box-body">

                  <!-- For Messages -->
                    <?php $this->load->view('admin/includes/_messages.php') ?>

                    <?php echo form_open_multipart(base_url('admin/ourjourney/add'), 'class="form-horizontal" onsubmit="return checkMediaSize()"');  ?> 
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="ourjourney_title" class="col-md-12 control-label"><?= trans('title *') ?></label>
								<div class="col-md-12">
									<input type="text" name="ourjourney_title" class="form-control" id="ourjourney_title" required="true" placeholder="">
								</div>
							</div>
							<div class="form-group">
								<label for="ourjourney_description" class="col-md-12 control-label"><?= trans('description *') ?></label>
								<div class="col-md-12">
									<textarea id="summernote" name="ourjourney_description" required="true" style="width: 100%;height: 200px;"></textarea>
								</div>
							</div>
							<div class="form-group">
								<label for="ourjourney_date" class="col-md-12 control-label"><?= trans('date *') ?></label>
								<div class="col-md-12">
									<input type="date" name="ourjourney_date" class="form-control" id="ourjourney_date" required="true" placeholder="">
								</div>
							</div>
						</div>
						<?php /*<div  class="col-md-6">
							<label  class="control-label"><?= trans('post image') ?></label><br/>
							<input type="file" id="ourjourney_image" name="ourjourney_image" accept=".png, .jpg, .jpeg, .gif, .svg" >
							<p><small class="text-success "><?= trans('allowed_types') ?>: gif, jpg, png, jpeg</small></p>
							<p><small class="text-danger hide"><?= trans('File size is more than 2MB') ?></small></p>
							<input type="hidden" id="mediafilesize" value="1">
						</div>
						*/?>
					</div>
                    <div class="form-group">
                        <div class="col-md-12">
                            <input type="submit" name="submit" value="<?= trans('add_our journey') ?>" class="btn btn-primary pull-right">
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
<?php /*  
<script>
$("#ourjourney_image").on("change", function (e) {
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
*/ ?>
<script>
$('textarea#summernote').summernote({        placeholder: 'Post Description',        tabsize: 2,        height: 200,  toolbar: [        ['style', ['style']],        ['font', ['bold', 'italic', 'underline', 'clear']],        ['color', ['color']],        ['para', ['ul', 'ol', 'paragraph']],        ['height', ['height']],        ['table', ['table']],        ['insert', ['link', 'picture', 'hr']],        ['help', ['help']]      ],      });
</script>
