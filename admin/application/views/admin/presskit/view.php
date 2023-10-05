  <!-- Content Wrapper. Contains page content -->  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>  <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.css" rel="stylesheet">  <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.js"></script>
  <div class="content-wrapper">
    <!-- Main content -->
    <section class="content">
		<div class="card card-default color-palette-bo">
			<div class="card-header">
			  <div class="d-inline-block">
				  <h3 class="card-title"> <i class="fa fa-eye"></i>
				  <?= trans('view_Presskit') ?> </h3>
			  </div>
			  <div class="d-inline-block float-right">
				<a href="<?= base_url('admin/mediaresources/presskit'); ?>" class="btn btn-success"><i class="fa fa-list"></i> <?= trans('presskit_list') ?></a>
			  </div>
			</div>
			<div class="row">
				<div class="col-md-12">   
					<div class="card-body table-responsive">
					  <table id="example1" class="table table-bordered" style="border:1px;">
						<thead>
						<tr>
						  <th style="width:200px"><?= trans('media_title') ?></th>
						  <td><?= $presskit_model['media_title']; ?></td>
						</tr>
						<?php if ($presskit_model['file'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('file') ?></th>
						  <td><a href="<?= base_url($presskit_model['file']) ?>" download="<?php echo str_replace(" ", "-", $presskit_model['media_title']); ?>"><img src="<?= base_url("assets/img/pdf-logo.png"); ?>" class="favicon" style="width:50px"></a></td>
						</tr>
						<?php } ?>
						</thead>
					  </table>
					</div>			
				</div>			               
			</div>          
		</div>          
    </section>
</div>     