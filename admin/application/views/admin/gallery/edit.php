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
    .img_view {
		
		width: 300px !important;
		height: 300px;
		object-fit: cover;
	}
  </style>
    <!-- Main content -->
    <section class="content">
      <div class="card card-default color-palette-bo">
        <div class="card-header">
          <div class="d-inline-block">
              <h3 class="card-title"> <i class="fa fa-pencil"></i>
              <?= trans('edit_gallery') ?> </h3>
          </div>
          <div class="d-inline-block float-right">
            <a href="<?= base_url('admin/gallery'); ?>" class="btn btn-success"><i class="fa fa-list"></i> <?= trans('gallery_list') ?></a>
          </div>
        </div>
	  <div class="card-body">

	  <div class="box">
		<!-- form start -->
		<div class="box-body">

           <!-- For Messages -->
            <?php $this->load->view('admin/includes/_messages.php') ?>
              
            <?php echo form_open_multipart(base_url('admin/gallery/edit/'.$gallery_model['id']), 'class="form-horizontal" onsubmit="return checkMediaSize()"' )?>
			<div class="row">   		
			<div class="col-md-6">   
              <div class="form-group">
                <label for="gallery_title" class="col-md-12 control-label"><?= trans('gallery_title *') ?></label>

                <div class="col-md-12">
                  <input type="text" name="gallery_title" value='<?= $gallery_model['gallery_title']; ?>' required="true" class="form-control" id="gallery_title" placeholder="">
                </div>
              </div>
			   </div>			  
			   <div class="col-md-6 col-sm-12">   
               <div class="form-group">
                  <label class="control-label"><?= trans('gallery_image') ?></label><br/>
                  <?php if(!empty($gallery_model['gallery_image'])): ?>
                      <p><img src="<?= base_url($gallery_model['gallery_image']); ?>" class="favicon img_view" style="width:45%"></p>
                  <?php endif; ?>
                  <input type="file" id="gallery_image" name="gallery_image" accept=".png, .jpg, .jpeg, .gif, .svg">
                  <p><small class="text-success"><?= trans('allowed_types') ?>: gif, jpg, png, jpeg</small></p>
                  <p><small class="text-danger hide"><?= trans('File size is more than 2MB') ?></small></p>
						<input type="hidden" id="mediafilesize" value="1">
                  <input type="hidden" name="old_image" value="<?php echo html_escape($gallery_model['gallery_image']); ?>">
              </div>
               <div class="form-group">
                  <label class="control-label"><?= trans('gallery_popupimage') ?></label><br/>
                  <?php if(!empty($gallery_model['gallery_popup_image'])): ?>
                      <p><img src="<?= base_url($gallery_model['gallery_popup_image']); ?>" class="favicon img_view" style="width:45%"></p>
                  <?php endif; ?>
                  <input type="file" id="gallery_popup_image" name="gallery_popup_image" accept=".png, .jpg, .jpeg, .gif, .svg">
                  <p><small class="text-success"><?= trans('allowed_types') ?>: gif, jpg, png, jpeg</small></p>
                  <p><small class="text-danger hide"><?= trans('File size is more than 2MB') ?></small></p>
						<input type="hidden" id="mediafilesize" value="1">
                  <input type="hidden" name="old_image" value="<?php echo html_escape($gallery_model['gallery_popup_image']); ?>">
              </div> 			  
			  </div> 
	
			  </div>
              <div class="form-group ">
                  <div class="col-md-12">
                    <input type="submit" name="submit" value="Update Gallery" class="btn btn-primary pull-right">
                  </div>
				</div>
                <?php echo form_close(); ?>
            </div>
                <!-- /.box-body -->
             
          </div>  
        </div>
    </div>    
              <!-- /.box-body -->
    </section>
    <script>
$("#gallery_image").on("change", function (e) {
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
$("#gallery_popup_image").on("change", function (e) {
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
  </div><script>
  $('textarea#summernote').summernote({        placeholder: 'Post Description',        tabsize: 2,        height: 200,  toolbar: [        ['style', ['style']],        ['font', ['bold', 'italic', 'underline', 'clear']],        ['color', ['color']],        ['para', ['ul', 'ol', 'paragraph']],        ['height', ['height']],        ['table', ['table']],        ['insert', ['link', 'picture', 'hr']],        ['help', ['help']]      ],      });
  </script>