  <!-- Content Wrapper. Contains page content -->  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>  <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.css" rel="stylesheet">  <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.js"></script>
    <style>

    .img_view {
		
		width: 300px !important;
		height: 300px;
		object-fit: cover;
	}
	  </style>

  <div class="content-wrapper">
    <!-- Main content -->
    <section class="content">
		<div class="card card-default color-palette-bo">
			<div class="card-header">
			  <div class="d-inline-block">
				  <h3 class="card-title"> <i class="fa fa-eye"></i>
				  <?= trans('view_slider') ?> </h3>
			  </div>
			  <div class="d-inline-block float-right">
				<a href="<?= base_url('admin/slider'); ?>" class="btn btn-success"><i class="fa fa-list"></i> <?= trans('slider_list') ?></a>
			  </div>
			</div>
			<div class="row">
				<div class="col-md-12">   
					<div class="card-body table-responsive">
					  <table id="example1" class="table table-bordered" style="border:1px;">
						<thead>
						<tr>
						  <th style="width:200px"><?= trans('slider_title') ?></th>
						  <td><?= $slider_model['slider_title']; ?></td>
						</tr>
						<tr>
						  <th style="width:200px"><?= trans('slider_description') ?></th>
						  <td><?= $slider_model['slider_description']; ?></td>
						</tr>
						<?php if ($slider_model['slider_image'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('slider_image') ?></th>
						  <td><img src="<?= base_url($slider_model['slider_image']); ?>" class="favicon img_view" style="width:30%"></td>
						</tr>
						<?php } ?>
						<?php if ($slider_model['slider_button_text'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('slider_button_text') ?></th>
						  <td><a href="<?= $slider_model['slider_button_link']; ?>" target=_blank><?= $slider_model['slider_button_text']; ?></td>
						</tr>
						<?php } ?>
						<?php /*if ($slider_model['slider_button_link'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('slider_button_link') ?></th>
						  <td><a href="<?= $slider_model['slider_button_link']; ?>" ><?= $slider_model['slider_button_link']; ?></td>
						</tr>
						<?php } */?>
						<tr>
						  <th style="width:200px"> <?= trans('status') ?></th>
						  <td> <?php if($slider_model['is_active'] == 0) { echo "Not Active"; } else { echo "Active"; } ?></td>
						</tr>
						</thead>
					  </table>
					</div>			
				</div>			               
			</div>          
		</div>          
    </section>
</div>     