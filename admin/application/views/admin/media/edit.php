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
              <?= trans('edit_media_coverage') ?> </h3>
          </div>
          <div class="d-inline-block float-right">
            <a href="<?= base_url('admin/media'); ?>" class="btn btn-success"><i class="fa fa-list"></i> <?= trans('media_coverage_list') ?></a>
          </div>
        </div>
      
           <!-- For Messages -->
            <?php $this->load->view('admin/includes/_messages.php') ?>
              
            <?php echo form_open_multipart(base_url('admin/media/edit/'.$media_model['media_id']), 'class="form-horizontal" onsubmit="return checkMediaSize()"' )?> 			
            <div class="row">   			
                <div class="col-md-6">   
                    <div class="form-group">
                <label for="post_title" class="col-md-2 control-label"><?= trans('title *') ?></label>

                <div class="col-md-12">
                  <input type="text" name="post_title" value="<?= $media_model['post_title']; ?>" required="true" class="form-control" id="post_title" placeholder="">
                </div>
              </div>
                    <div class="form-group">
                <label for="post_date" class="col-md-12 control-label"><?= trans('Date *') ?></label>
                <div class="col-md-12">
                    <?php $postdate = date('Y-m-d',strtotime($media_model['post_date'])); ?>
                    <input type="date" name="post_date" id="post_date" class="form-control" required="true" placeholder="Media Date" >
                </div>
            </div>
                    <div class="form-group">
                    <label for="post_description" class="col-md-12 control-label"><?= trans('description *') ?></label>
                     <div class="col-md-12">
                            <textarea id="summernote" name="post_description" required="true" style="width: 100%;height: 200px;"><?= $media_model['post_description']; ?></textarea>
                    </div>
               </div>
                    <div class="form-group">
                    <label for="post_title" class="col-md-12 control-label"><?= trans('link') ?></label>
                    <div class="col-md-12">
                        <input type="url" name="post_link" class="form-control" id="post_link" value="<?= $media_model['post_link']; ?>" placeholder="https://www.youtube.com/nanbanfdn">
                    </div>
                </div>
			        <div class="col-md-6 col-sm-12">   
               <div class="form-group">
                  <label class="control-label"><?= trans('External image') ?></label><br/>
                  <?php if(!empty($media_model['post_image'])): ?>
                      <p><img src="<?= base_url($media_model['post_image1']); ?>" class="favicon" style="width:45%"></p>
                  <?php endif; ?>
                  <input type="file" id="post_image1" name="post_image1" accept=".png, .jpg, .jpeg, .gif, .svg">
                  <p><small class="text-success"><?= trans('allowed_types') ?>: gif, jpg, png, jpeg</small></p>
                  <p><small class="text-danger hide"><?= trans('File size is more than 2MB') ?></small></p>
						<input type="hidden" id="mediafilesize" value="1">
                  <input type="hidden" name="old_image" value="<?php echo html_escape($media_model['post_image1']); ?>">
              </div>   	           
			  </div>
			        <div class="col-md-6 col-sm-12">   
               <div class="form-group">
                  <label class="control-label"><?= trans('image') ?></label><br/>
                  <?php if(!empty($media_model['post_image'])): ?>
                      <p><img src="<?= base_url($media_model['post_image']); ?>" class="favicon" style="width:45%"></p>
                  <?php endif; ?>
                  <input type="file" id="post_image" name="post_image" accept=".png, .jpg, .jpeg, .gif, .svg">
                  <p><small class="text-success"><?= trans('allowed_types') ?>: gif, jpg, png, jpeg</small></p>
                  <p><small class="text-danger hide"><?= trans('File size is more than 2MB') ?></small></p>
						<input type="hidden" id="mediafilesize" value="1">
                  <input type="hidden" name="old_image" value="<?php echo html_escape($media_model['post_image']); ?>">
              </div>              
              <div class="form-group hide">
                <label for="role" class="col-md-4 control-label"><?= trans('select_status') ?></label>
                <div class="col-md-8">
                    <select name="status" class="form-control">
                        <option value="" disabled><?= trans('select_status') ?></option>
                        <option value="1" <?= ($media_model['is_active'] == 1)?'selected': '' ?> ><?= trans('active') ?></option>
                        <option value="0" <?= ($media_model['is_active'] == 0)?'selected': '' ?>><?= trans('inactive') ?></option>
                    </select>
                </div>          
			  </div>	           
			  </div>
               
			<!--<div class="form-group ">
			  <div  class="col-md-12">
			    <!--<label for="post_title" class="col-md-2 control-label"><?= trans('Websites') ?></label><br>-->
			    <!--<?php $sitesArray = $media_model['website_name'];//explode(',', $news_model['website_name']); ?>
			    
				  <label class="checkbox-inline">
						    <input type="checkbox" name="websites[]" value="nanban" <?php if(strpos($sitesArray, "anban"))echo "checked";?>><span class="smalls">Nanban.com</span>
						</label>
                        <label class="checkbox-inline">
						    <input type="checkbox" name="websites[]" value="foundations" <?php if(strpos($sitesArray, "oundations"))echo "checked";?>><span class="smalls">Nanban Foundation</span>
						</label>
						<label class="checkbox-inline">
						    <input type="checkbox" name="websites[]" value="ventures" <?php if(strpos($sitesArray, "entures"))echo "checked";?>><span class="smalls">Nanban Ventures</span>
						</label>
						<label class="checkbox-inline">
						    <input type="checkbox" name="websites[]" value="chola" <?php if(strpos($sitesArray, "hola"))echo "checked";?>><span class="smalls">Nanban Chola</span>
						</label>
			  </div>
			  </div>-->
              <div class="form-group ">
                  <div class="col-md-12 text-center">
                    <input type="submit" name="submit" value="Update Media Coverage" class="btn btn-primary pull-center">
                  </div>

                <?php echo form_close(); ?>
              </div>
              <!-- /.box-body -->
    </section>
    <script>
        $(document).ready(function(){
            $('#post_date').val('<?php echo $postdate ?>');
        });
    
$("#post_image").on("change", function (e) {
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
  </div><script>//$('textarea#summernote').summernote({        placeholder: 'Post Description',        tabsize: 2,        height: 200,  toolbar: [        ['style', ['style']],        ['font', ['bold', 'italic', 'underline', 'clear']],        ['color', ['color']],        ['para', ['ul', 'ol', 'paragraph']],        ['height', ['height']],        ['table', ['table']],        ['insert', ['link', 'picture', 'hr']],        ['help', ['help']]      ],      });</script>