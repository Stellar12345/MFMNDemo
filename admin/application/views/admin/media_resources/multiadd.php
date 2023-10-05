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
.img_view {
    width: 100px;
    height: 100px;
}
  </style>
    <!-- Main content -->
    <section class="content">
      <div class="card card-default color-palette-bo">
        <div class="card-header">
          <div class="d-inline-block">
              <h3 class="card-title"> <i class="fa fa-plus"></i>
              <?= trans('Add Photo Albums Images') ?> </h3>
          </div>
          <div class="d-inline-block float-right">
            <a href="<?= base_url('admin/mediaresources'); ?>" class="btn btn-success"><i class="fa fa-list"> Photo Albums List</i> </a>
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

                    <?php echo form_open_multipart(base_url('admin/mediaresources/multiadd'), 'class="form-horizontal" onsubmit="return checkMediaSize()"');?> 
					<input type="hidden" name="category_id" value="<?php echo  $mediaresources_model['media_id']; ?>">
					<span class="multiple_row"></span>

					<button type="button" class="btn btn-success append-row" onclick="add_row_fields();"><span class="glyphicon glyphicon-plus-sign"></span> Add Image</button>	
					<div class="form-group">
					<div class="col-md-12">
						<input type="submit" name="submit" value="<?= trans('add file') ?>" class="btn btn-primary pull-right">
					</div>
				</div>
				<?php echo form_close(); ?>
                <!-- /.box-body -->
				</div>
				</div>
			</div>  
			</div>
		</div>
		<div class="card-body">
    <table id="example1" class="table table-bordered table-hover">
        <thead>
            <tr>
                <th width="50"><?= trans('id') ?></th>
             	<th><?= trans('title') ?></th>               			    
             	<th><?= trans('Image') ?></th>               			    
				<!--<th><?= trans('date') ?></th>
                <th width="100"><?= trans('status') ?></th>-->
                <th width="200"><?= trans('action') ?></th>
            </tr>
        </thead>
        <tbody> 
            <?php 
            $i = 1;
            foreach($info as $row): ?>
            <tr>
            	<td>
					<?=$i++;?>
                </td>
                <td>
					<?=$row['media_title']?>
                </td>
                <td>
					<img src="<?= base_url('assets/img/media_resources/'.$row['file']) ?>" class='img-responsive img_view' width='200px'>
                </td>
                <td>						
					<?php //if($row['website_name'] == 'nanban.com') {?>				
                    <a href="<?= base_url("admin/mediaresources/delete_file/".$row['id'].'/'.$mediaresources_model['media_id']); ?>" onclick="return confirm('Are you sure you want to delete ?')" class="btn btn-danger btn-xs"><i class="fa fa-remove"></i></a>				
					<?php //} ?>
                </td>
            </tr>
            <?php endforeach;?>
        </tbody>
    </table>
</div>	
    </section> 
  </div>
<script>

  x=0;
   add_row_fields();
  function add_row_fields() {
	  var html='';
		html+='<div class="row" id="row_count_'+x+'">';
		html+='<div class="col-md-4">';
			html+='<div class="form-group">';
				html+='<label for="post_title" class="col-md-12 control-label">Title</label>';
				html+='<div class="col-md-12">';
					html+='<input type="text" name="media_title[]" class="form-control required" required="true" id="media_title" placeholder="Media Title">';
				html+='</div>';
			html+='</div>';
		html+='</div>';
		html+='<div  class="col-md-7">';
			html+='<label  class="control-label"><?= trans("Upload file") ?></label><br/>';
			html+='<input type="file" id="media_image" name="media_image[]" accept=".png, .jpg, .jpeg, .gif, .svg" >';
			html+='<p><small class="text-success "><?= trans("allowed_types") ?>: gif, jpg, png, jpeg</small></p>';
			html+='<p><small class="text-danger hide"><?= trans("File size is more than 2MB") ?></small></p>';
			html+='<input type="hidden" id="mediafilesize" value="0">';
		html+='</div>';
		html+='<div  class="col-md-1">';
			html+='<button type="button" class="btn btn-danger btn-xs" onclick="remove_row('+x+')"><i class="fa fa-remove"></i></button>';
		 
		html+='</div>';
	html+='</div>';

	$('.multiple_row').append(html); x++;
					
  }


function remove_row(x) {
	$('#row_count_'+x).remove();
}

$("#media_image").on("change", function (e) {
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
<script>//$('textarea#summernote').summernote({        placeholder: 'Description',        tabsize: 2,        height: 200,  toolbar: [        ['style', ['style']],        ['font', ['bold', 'italic', 'underline', 'clear']],        ['color', ['color']],        ['para', ['ul', 'ol', 'paragraph']],        ['height', ['height']],        ['table', ['table']],        ['insert', ['link', 'picture', 'hr']],        ['help', ['help']]      ],      });</script>

<script>

//------------------------------------------------------------------
function load_records()
{
$('.data_container').html('<div class="text-center"><img src="<?=base_url('assets/dist/img')?>/loading.png"/></div>');
$('.data_container').load('<?=base_url('admin/mediaresources/list_cat_li_data/'.$mediaresources_model["media_id"])?>');
}
load_records();


</script>
