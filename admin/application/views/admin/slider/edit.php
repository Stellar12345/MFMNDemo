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
              <?= trans('edit_slider') ?> </h3>
          </div>
          <div class="d-inline-block float-right">
            <a href="<?= base_url('admin/slider'); ?>" class="btn btn-success"><i class="fa fa-list"></i> <?= trans('slider_list') ?></a>
          </div>
        </div>
	  <div class="card-body">

	  <div class="box">
		<!-- form start -->
		<div class="box-body">

           <!-- For Messages -->
            <?php $this->load->view('admin/includes/_messages.php') ?>
              
            <?php echo form_open_multipart(base_url('admin/slider/edit/'.$slider_model['id']), 'class="form-horizontal" onsubmit="return checkMediaSize()"' )?>
			<div class="row">   		
			<div class="col-md-6">   
              <div class="form-group">
                <label for="slider_title" class="col-md-2 control-label"><?= trans('title *') ?></label>

                <div class="col-md-12">
                  <input type="text" name="slider_title" value="<?= $slider_model['slider_title']; ?>" required="true" class="form-control" id="slider_title" placeholder="">
                </div>
              </div>
              <div class="form-group">
                    <label for="slider_description" class="col-md-12 control-label"><?= trans('description *') ?></label>
                     <div class="col-md-12">
                            <textarea id="summernote" name="slider_description" required="true" style="width: 100%;height: 200px;"><?= $slider_model['slider_description']; ?></textarea>
                    </div>
               </div>            
				<div class="form-group">
					<label for="slider_button_text" class="col-md-12 control-label"><?= trans('button title *') ?></label>
					<div class="col-md-12">
						<input type="text" name="slider_button_text" value="<?= $slider_model['slider_button_text']; ?>" class="form-control" id="slider_button_text" required="true" placeholder="">
					</div>
				</div>
				<div class="form-group">
					<label for="slider_button_link" class="col-md-12 control-label"><?= trans('button link *') ?></label>
					<div class="col-md-12">
						<input type="text" name="slider_button_link" value="<?= $slider_model['slider_button_link']; ?>" class="form-control" id="slider_button_link" required="true" placeholder="">
					</div>
				</div>
			   </div>			  
			   <div class="col-md-6 col-sm-12">   
               <div class="form-group">
                  <label class="control-label"><?= trans('image') ?></label><br/>
                  <?php if(!empty($slider_model['slider_image'])): ?>
                      <p><img src="<?= base_url($slider_model['slider_image']); ?>" class="favicon img_view" style="width:45%"></p>
                  <?php endif; ?>
                  <input type="file" id="slider_image" name="slider_image" accept=".png, .jpg, .jpeg, .gif, .svg">
                  <p><small class="text-success"><?= trans('allowed_types') ?>: gif, jpg, png, jpeg</small></p>
                  <p><small class="text-danger hide"><?= trans('File size is more than 2MB') ?></small></p>
						<input type="hidden" id="mediafilesize" value="1">
                  <input type="hidden" name="old_image" value="<?php echo html_escape($slider_model['slider_image']); ?>">
              </div>                       
			  </div> 
			  </div>
			    <div class="col-md-12">
              <div class="form-group ">
                  <div class="col-md-12">
                    <input type="submit" name="submit" value="Update Slider" class="btn btn-primary pull-right">
                  </div>
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
$("#slider_image").on("change", function (e) {
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