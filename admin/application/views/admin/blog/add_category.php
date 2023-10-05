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
              <?= trans('add_blog_category') ?> </h3>
          </div>
          <div class="d-inline-block float-right">
            <a href="<?= base_url('admin/blog/category'); ?>" class="btn btn-success"><i class="fa fa-list"></i> <?= trans('blog_category_list') ?></a>
          </div>
        </div>
        <div class="card-body">

              <div class="box">
                <!-- form start -->
                <div class="box-body"> 

                  <!-- For Messages -->
                    <?php $this->load->view('admin/includes/_messages.php') ?>

                    <?php echo form_open_multipart(base_url('admin/blog/add_category'), 'class="form-horizontal" onsubmit="return checkMediaSize()"');  ?> 
					<div class="row">
					<div class="col-md-6">
                    <div class="form-group">
                        <label for="category_name" class="col-md-12 control-label"><?= trans('Category Name *') ?></label>
                        <div class="col-md-12">
                            <input type="text" name="category_name" class="form-control" id="category_name" required="true" placeholder="">
                        </div>
                    </div>
					 </div>
					</div>
                    <div class="form-group">
                        <div class="col-md-12">
                            <input type="submit" name="submit" value="<?= trans('add_blog_category') ?>" class="btn btn-primary pull-right">
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
$('textarea#summernote').summernote({     
   placeholder: 'Post Description',        tabsize: 2,        height: 200,  toolbar: [        ['style', ['style']],        ['font', ['bold', 'italic', 'underline', 'clear']],        ['color', ['color']],        ['para', ['ul', 'ol', 'paragraph']],        ['height', ['height']],        ['table', ['table']],        ['insert', ['link', 'picture', 'hr']],        ['help', ['help']]      ],      });
</script>
