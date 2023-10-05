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
				  <?= trans('view_our people') ?> </h3>
			  </div>
			  <div class="d-inline-block float-right">
				<a href="<?= base_url('admin/ourpeople'); ?>" class="btn btn-success"><i class="fa fa-list"></i> <?= trans('our people_list') ?></a>
			  </div>
			</div>
			<div class="row">
				<div class="col-md-12">   
					<div class="card-body table-responsive">
					  <table id="example1" class="table table-bordered" style="border:1px;">
						<thead>
						<tr>
						  <th style="width:200px"><?= trans('title') ?></th>
						  <td><?= $ourpeople_model['ourpeople_title']; ?></td>
						</tr>
						<tr>
						  <th style="width:200px"><?= trans('description') ?></th>
						  <td><?= $ourpeople_model['ourpeople_description']; ?></td>
						</tr>
						<?php if ($ourpeople_model['ourpeople_image'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('image') ?></th>
						  <td><img src="<?= base_url($ourpeople_model['ourpeople_image']); ?>" class="favicon img_view" style="width:30%"> </td>
						</tr>
						<?php } ?>
						<?php if ($ourpeople_model['ourpeople_popup_image'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('popup_image') ?></th>
						  <td><img src="<?= base_url($ourpeople_model['ourpeople_popup_image']); ?>" class="favicon img_view" style="width:30%"></td>
						</tr>
						<?php } ?>
						<?php if ($ourpeople_model['ourpeople_designation'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('designation') ?></th>
						  <td><?= $ourpeople_model['ourpeople_designation']; ?></td>
						</tr>
						<?php } ?>
						<?php if ($ourpeople_model['ourpeople_company_name'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('company_name') ?></th>
						  <td><?= $ourpeople_model['ourpeople_company_name']; ?></td>
						</tr>
						<?php } ?>
						<?php /*if ($ourpeople_model['ourpeople_company_name'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('ourpeople_company_name') ?></th>
						  <td><a href="<?= $ourpeople_model['ourpeople_company_name']; ?>" ><?= $ourpeople_model['ourpeople_company_name']; ?></td>
						</tr>
						<?php } */?>
						<tr>
						  <th style="width:200px"> <?= trans('status') ?></th>
						  <td> <?php if($ourpeople_model['is_active'] == 0) { echo "Not Active"; } else { echo "Active"; } ?></td>
						</tr>
						</thead>
					  </table>
					</div>			
				</div>			               
			</div>          
		</div>          
    </section>
</div>     