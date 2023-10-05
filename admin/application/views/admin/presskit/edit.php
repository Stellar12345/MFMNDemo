  <!-- Content Wrapper. Contains page content -->  
  <!--script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script--> 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script> 
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>  
  <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.css" rel="stylesheet">  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.js"></script>
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
              <h3 class="card-title"> <i class="fa fa-pencil"></i>
              <?= trans('edit_presskit') ?> </h3>
          </div>
          <div class="d-inline-block float-right">
            <a href="<?= base_url('admin/mediaresources/presskit'); ?>" class="btn btn-success"><i class="fa fa-list"></i> <?= trans('presskit_list') ?></a>
          </div>
        </div>
      
           <!-- For Messages -->
            <?php $this->load->view('admin/includes/_messages.php') ?>
              
            <?php echo form_open_multipart(base_url('admin/mediaresources/edit/'.$presskit_model['media_id']), 'class="form-horizontal" onsubmit="return checkMediaSize()"' )?> 			
            <div class="row">   			
                <div class="col-md-6">   
                    <div class="form-group">
                        <label for="post_title" class="col-md-2 control-label"><?= trans('title *') ?></label>
                        <div class="col-md-12">
                            <input type="text" name="media_title" value="<?= $presskit_model['media_title']; ?>" required="true" class="form-control" id="media_title" placeholder="">
                            <input type="hidden" name="media_type" class="form-control" id="media_type" value="presskit">
                        </div>
                    </div>
                </div>
            </div> 
            <div class="row">
                <div class="col-md-6 col-sm-12">   
                    
                    <div class="form-group">
                        <label class="col-md-2 control-label"><?= trans('File') ?></label><br/>
                        <?php if(!empty($presskit_model['file'])): ?>
                            <p><img class="col-md-2" src="<?= base_url("assets/img/pdf-logo.png"); ?>" class="favicon" style="width:30%"></p>
                        <?php endif; ?>
                        <input class="col-md-6" type="file" id="media_image" name="media_image" accept=".pdf">
                        <p class="col-md-6"><small class="text-success"><?= trans('allowed_types') ?>: PDF</small></p>
                        <p class="col-md-6"><small class="text-danger hide"><?= trans('File size is more than 2MB') ?></small></p>
						<input type="hidden" id="mediafilesize" value="1">
                        <input class="col-md-2" type="hidden" name="old_image" value="<?php echo html_escape($presskit_model['file']); ?>">
                    </div>    
                    
                </div>
            </div>
            <div class="row">
                <div class="form-group ">
                    <div class="col-md-6 text-center" style="margin-left:10px">
                        <input type="submit" name="submit" value="Update Media" class="btn btn-primary pull-center">
                    </div>
                </div>
            </div>
            <?php echo form_close(); ?>
              <!-- /.box-body -->
        </div>      
    </section>
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
  </div><script>//$('textarea#summernote').summernote({        placeholder: 'Post Description',        tabsize: 2,        height: 200,  toolbar: [        ['style', ['style']],        ['font', ['bold', 'italic', 'underline', 'clear']],        ['color', ['color']],        ['para', ['ul', 'ol', 'paragraph']],        ['height', ['height']],        ['table', ['table']],        ['insert', ['link', 'picture', 'hr']],        ['help', ['help']]      ],      });</script>