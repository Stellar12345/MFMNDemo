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
              <?= trans('edit News / Events') ?> </h3>
          </div>
          <div class="d-inline-block float-right">
            <a href="<?= base_url('admin/news'); ?>" class="btn btn-success"><i class="fa fa-list"></i> <?= trans(' News / Events List') ?></a>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <div class="box">
                <!-- form start -->
                <div class="box-body">      
           <!-- For Messages -->
            <?php $this->load->view('admin/includes/_messages.php') ?>
              
            <?php echo form_open_multipart(base_url('admin/news/edit/'.$news_model['news_id']), 'class="form-horizontal" onsubmit="return checkMediaSize()"' )?> 			
			<div class="row">   			
				<div class="col-md-6">   
				  <div class="form-group">
					<label for="post_title" class="col-md-2 control-label"><?= trans('title *') ?></label>

					<div class="col-md-12">
					  <input type="text" name="post_title" value="<?= $news_model['post_title']; ?>" required="true" class="form-control" id="post_title" placeholder="">
					</div>
				  </div>
					<div class="form-group">
						<label for="post_description" class="col-md-12 control-label"><?= trans('description *') ?></label>
						 <div class="col-md-12">
								<textarea id="summernote" name="post_description" required="true" style="width: 100%;height: 200px;"><?= $news_model['post_description']; ?></textarea>
						</div>
					</div> 
					 <div class="form-group">
						<div class="col-md-12">
							<label for="post_type" class="col-md-2 control-label">Type</label><br>
							<label class="checkbox-inline">
								<input type="radio" name="post_type" value="1" <?= ($news_model['post_type'] == 1)?'checked': '' ?>><span class="smalls">News</span>
							</label>
							<label class="checkbox-inline">
								<input type="radio" name="post_type" value="2" <?= ($news_model['post_type'] == 2)?'checked': '' ?>><span class="smalls">Events</span>
							</label>
						</div>					
                    </div>					
         
                    <div class="form-group">
                        <label for="post_date" class="col-md-12 control-label"><?= trans('date *') ?></label>
                        <div class="col-md-12">
                            <input type="date" name="post_date" class="form-control" id="post_date"  value="<?= $news_model['post_date']; ?>" placeholder="">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="post_time" class="col-md-12 control-label"><?= trans('Time *') ?></label>
                        <div class="col-md-12">
                            <input type="time" name="post_time" class="form-control" id="post_time" value="<?= $news_model['post_time']; ?>"  placeholder="">
                        </div>
                    </div>	
                    <div class="form-group">
						<div class="col-md-12">
							<label class="checkbox-inline event">
								<input type="checkbox" name="display_home" id="display_home" value="1" class="diss" <?= ($news_model['display_home'] == 1)?'checked': '' ?>><span class="smalls">Do you want display this News / Events in home?</span>
							</label>
						</div>
					</div>					
					<?php if($news_model['post_event'] == 0) { $st = "display:none";} else {$st= "";}?>
					<div class="form-group" id='events' class="events" style="<?= $st; ?>">
						<div class="col-md-12">
							<label class="checkbox-inline event">
								<input type="checkbox" name="post_event" id="post_event" value="1" class="diss" onchange="valueChanged()" <?= ($news_model['post_event'] == 1)?'checked': '' ?>><span class="smalls">Do you want to add more event details?</span>
							</label>
						</div>
					</div>						
			   </div>			  
				   <div class="col-md-6 col-sm-12">   
				   <div class="form-group">
					  <label class="control-label"><?= trans('image') ?></label><br/>
					  <?php if(!empty($news_model['post_image'])): ?>
						  <p><img src="<?= base_url($news_model['post_image']); ?>" class="favicon img_view" style="width:45%"></p>
					  <?php endif; ?>
					  <input type="file" id="post_image" name="post_image" accept=".png, .jpg, .jpeg, .gif, .svg">
					  <p><small class="text-success"><?= trans('allowed_types') ?>: gif, jpg, png, jpeg</small></p>
					  <p><small class="text-danger hide"><?= trans('File size is more than 2MB') ?></small></p>
							<input type="hidden" id="mediafilesize" value="1">
					  <input type="hidden" name="old_image" value="<?php echo html_escape($news_model['post_image']); ?>">
				  </div>              <div class="form-group">                <label for="role" class="col-md-4 control-label"><?= trans('select_status') ?></label>                <div class="col-md-8">                
				  <select name="status" class="form-control">                 
					  <option value="" disabled><?= trans('select_status') ?></option>           
					  <option value="1" <?= ($news_model['is_active'] == 1)?'selected': '' ?> ><?= trans('active') ?></option>    
					  <option value="0" <?= ($news_model['is_active'] == 0)?'selected': '' ?>><?= trans('inactive') ?></option>  
				  </select>           
				  </div>          
				  </div>			           
				  </div> 
                    <div  class="col-md-12">
                     <div class="row dis" style="<?= $st; ?>">
					 <div class="col-md-6"  id='eventss' class="eventss">
                    <div class="form-group">
                        <label for="post_link" class="col-md-12 control-label"><?= trans('event link *') ?></label>
                        <div class="col-md-12">
                            <input type="url" name="post_link" class="form-control" id="post_link"  value="<?= $news_model['post_link']; ?>" placeholder="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="post_event_desc" class="col-md-12 control-label"><?= trans('Event Description *') ?></label>
                        <div class="col-md-12">
                            <textarea id="post_event_desc" name="post_event_desc" style="width: 100%;height: 100px;"><?= $news_model['post_event_desc']; ?></textarea>
                        </div>
                    </div>
                    </div>
					 </div>
					 </div>
			  </div>
              <div class="col-md-12">
              <div class="form-group">
                  <div class="col-md-12 text-center">
                    <input type="submit" name="submit" value="Update News / Events" class="btn btn-primary pull-right">
                  </div>

                <?php echo form_close(); ?>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
              <!-- /.box-body -->
    </section>
    <script>
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
  </div>
  <script>$('textarea#summernote').summernote({        placeholder: 'Post Description',        tabsize: 2,        height: 200,  toolbar: [        ['style', ['style']],        ['font', ['bold', 'italic', 'underline', 'clear']],        ['color', ['color']],        ['para', ['ul', 'ol', 'paragraph']],        ['height', ['height']],        ['table', ['table']],        ['insert', ['link', 'picture', 'hr']],        ['help', ['help']]      ],      });</script>
  
  <script type="text/javascript">
    function valueChanged()
    {
        if($('.diss').is(":checked"))   
            $(".dis").show();
        else
            $(".dis").hide();
    }
		$(document).ready(function() {
    $("input[name$='post_type']").click(function() {
        var test = $(this).val();
       if(test == '2') {
        $("#events").show();
        $("#eventss").show();

		
       }
       else {
            $("#events").hide(); 
            $("#eventss").hide(); 

       }
    });
	});
</script>