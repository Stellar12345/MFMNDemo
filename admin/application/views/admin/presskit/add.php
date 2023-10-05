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
              <?= trans('Add Nanban press kit') ?> </h3>
          </div>
          <div class="d-inline-block float-right">
            <a href="<?= base_url('admin/mediaresources/presskit'); ?>" class="btn btn-success"><i class="fa fa-list"></i> </a>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="box">
                <!-- form start -->
                <div class="box-body">

                  <!-- For Messages -->
                    <?php $this->load->view('admin/includes/_messages.php') ?>

                    <?php echo form_open_multipart(base_url('admin/mediaresources/add'), 'class="form-horizontal" onsubmit="return checkMediaSize()"');  ?> 
                    <div class="form-group">
                        <label for="post_title" class="col-md-12 control-label"><?= trans('title *') ?></label>
                        <div class="col-md-12">
                            <input type="text" name="media_title" class="form-control" required="true" id="media_title" placeholder="Media Title">
                            <input type="hidden" name="media_type" class="form-control" id="media_type" value="presskit">
                        </div>
                    </div>
                    <div  class="col-md-12">
                        <label  class="control-label"><?= trans('Upload file') ?></label><br/>
                        <input type="file" id="media_image" name="media_image" accept=".pdf" >
                        <p><small class="text-success "><?= trans('allowed_types') ?>: PDF</small></p>
						<p><small class="text-danger hide"><?= trans('File size is more than 2MB') ?></small></p>
						<input type="hidden" id="mediafilesize" value="1">
						 <!--<div class="form-group">                
						 <label for="role" class="col-md-4 control-label"><?= trans('select_status') ?></label>                <div class="col-md-8">                
			  <select name="status" class="form-control">                 
				  <option value="" disabled><?= trans('select_status') ?></option>           
				  <option value="1"><?= trans('active') ?></option>    
				  <option value="0"><?= trans('inactive') ?></option>  
			  </select>           
			  </div>          
                    </div>-->
					
                    <!--<div  class="col-md-12">
					    <label for="websites" class="col-md-2 control-label"><?= trans('Websites') ?></label><br>
                        <label class="checkbox-inline">
						    <input type="checkbox" name="websites[]" value="nanban"><span class="smalls">Nanban.com</span>
						</label>
                        <label class="checkbox-inline">
						    <input type="checkbox" name="websites[]" value="foundations"><span class="smalls">Nanban Foundations</span>
						</label>
						<label class="checkbox-inline">
						    <input type="checkbox" name="websites[]" value="ventures"><span class="smalls">Nanban Ventures</span>
						</label>
						<label class="checkbox-inline">
						    <input type="checkbox" name="websites[]" value="chola"><span class="smalls">Nanban Chola</span>
						</label>
                    </div>-->
                    <div class="form-group">
                        <div class="col-md-12">
                            <input type="submit" name="submit" value="<?= trans('add file') ?>" class="btn btn-primary pull-right">
                        </div>
                    </div>
                  <?php echo form_close(); ?>
                </div>
                <!-- /.box-body -->
              </div>
            </div>
          </div>  
        </div>
    </div>
    </section> 
  </div>
 <script>
$("#media_image").on("change", function (e) {
    var fileSize=0;var fileFormat = 0; 
    var files = e.currentTarget.files; // puts all files into an array

    // call them as such; files[0].size will get you the file size of the 0th file
    for (var x in files) {
        
        var filesize = ((files[x].size/1024)/1024).toFixed(4); // MB
        if (files[x].name != "item" && typeof files[x].name != "undefined" && filesize <= 2) {
            fileSize = 1;
        }
        if(files[x].name != "item" && typeof files[x].name != "undefined"){
            var ext = files[x].name.split('.').pop().toLowerCase();
            if($.inArray(ext, ['pdf']) == -1) {
                if($('.pdf-file').length <= 0){
                    $('.text-danger').after('<br><small class="pdf-file" style="color: #dc3545">Please Upload PDF file.</small>');
                }
            }else{
                $('.pdf-file').remove();
                fileFormat = 1;
            }
        }
    }
    if(fileSize > 0 && fileFormat > 0){$('#mediafilesize').val(1);}else{$('#mediafilesize').val(0);}
    if(fileSize == 0){ $('.text-danger').removeClass('hide'); }else{$('.text-danger').addClass('hide');}
});
function checkMediaSize(){
    var ret = false;
    if($('#mediafilesize').val() > 0){
        ret = true;
    }
    return ret;
}
</script> 
<script>//$('textarea#summernote').summernote({        placeholder: 'Description',        tabsize: 2,        height: 200,  toolbar: [        ['style', ['style']],        ['font', ['bold', 'italic', 'underline', 'clear']],        ['color', ['color']],        ['para', ['ul', 'ol', 'paragraph']],        ['height', ['height']],        ['table', ['table']],        ['insert', ['link', 'picture', 'hr']],        ['help', ['help']]      ],      });</script>
