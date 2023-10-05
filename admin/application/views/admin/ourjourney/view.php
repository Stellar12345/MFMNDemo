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
				  <?= trans('view_ourjourney') ?> </h3>
			  </div>
			  <div class="d-inline-block float-right">
				<a href="<?= base_url('admin/ourjourney'); ?>" class="btn btn-success"><i class="fa fa-list"></i> <?= trans('ourjourney_list') ?></a>
			  </div>
			</div>
			<div class="row">
				<div class="col-md-6">   
					<div class="card-body table-responsive">
					  <table id="example1" class="table table-bordered" style="border:1px;">
						<thead>
						<tr>
						  <th style="width:200px"><?= trans('title') ?></th>
						  <td><?= $ourjourney_model['ourjourney_title']; ?></td>
						</tr>
						<tr>
						  <th style="width:200px"><?= trans('description') ?></th>
						  <td><?= $ourjourney_model['ourjourney_description']; ?></td>
						</tr>
						<?php /* if ($ourjourney_model['ourjourney_image'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('ourjourney_image') ?></th>
						  <td><img src="<?= base_url($ourjourney_model['ourjourney_image']); ?>" class="favicon img_view" style="width:30%"></td>
						</tr>
						<?php } */?>
						<?php if ($ourjourney_model['ourjourney_date'] != '') {
						$month = date("M", strtotime($ourjourney_model['ourjourney_date']));
						$year = date("Y", strtotime($ourjourney_model['ourjourney_date']));

							?>
						<tr>
						  <th style="width:200px"><?= trans('date') ?></th>
						  <td><?= $month. ' ' .$year; ?></td>
						</tr>
						<?php } ?>
						<?php /*if ($ourjourney_model['ourjourney_button_link'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('ourjourney_button_link') ?></th>
						  <td><a href="<?= $ourjourney_model['ourjourney_button_link']; ?>" ><?= $ourjourney_model['ourjourney_button_link']; ?></td>
						</tr>
						<?php } */?>
						<tr>
						  <th style="width:200px"> <?= trans('status') ?></th>
						  <td> <?php if($ourjourney_model['is_active'] == 0) { echo "Not Active"; } else { echo "Active"; } ?></td>
						</tr>
						</thead>
					  </table>
					</div>			
				</div>			               
			</div>          
		</div>          
    </section>
</div>     