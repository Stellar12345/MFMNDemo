  <!-- Content Wrapper. Contains page content -->  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>  <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.css" rel="stylesheet">  <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.js"></script>
  <div class="content-wrapper">
    <!-- Main content -->
    <section class="content">
		<div class="card card-default color-palette-bo">
			<div class="card-header">
			  <div class="d-inline-block">
				  <h3 class="card-title"> <i class="fa fa-eye"></i>
				  <?= trans('view_news') ?> </h3>
			  </div>
			  <div class="d-inline-block float-right">
				<a href="<?= base_url('admin/news'); ?>" class="btn btn-success"><i class="fa fa-list"></i> <?= trans('news_list') ?></a>
			  </div>
			</div>
			<div class="row">
				<div class="col-md-12">   
					<div class="card-body table-responsive">
					  <table id="example1" class="table table-bordered" style="border:1px;">
						<thead>
						<tr>
						  <th style="width:200px"><?= trans('post_title') ?></th>
						  <td><?= $news_model['post_title']; ?></td>
						</tr>
						<tr>
						  <th style="width:200px"><?= trans('post_description') ?></th>
						  <td><?= $news_model['post_description']; ?></td>
						</tr>
						<?php if ($news_model['post_image'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('post_image') ?></th>
						  <td><img src="<?= base_url($news_model['post_image']); ?>" class="favicon" style="width:30%"></td>
						</tr>
						<?php } ?>
						<?php if ($news_model['post_link'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('post_link') ?></th>
						  <td><a href="<?= $news_model['post_link']; ?>" ><?= $news_model['post_link']; ?></td>
						</tr>
						<?php } ?>
						<tr>
						  <th style="width:200px"> <?= trans('status') ?></th>
						  <td> <?php if($news_model['is_active'] == 0) { echo "Not Active"; } else { echo "Active"; } ?></td>
						</tr>
						</thead>
					  </table>
					</div>			
				</div>			               
			</div>          
		</div>          
    </section>
</div>     