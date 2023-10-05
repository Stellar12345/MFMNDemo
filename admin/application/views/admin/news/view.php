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
				  <?= trans('view News / Events') ?> </h3>
			  </div>
			  <div class="d-inline-block float-right">
				<a href="<?= base_url('admin/news'); ?>" class="btn btn-success"><i class="fa fa-list"></i> <?= trans('News / Events List') ?></a>
			  </div>
			</div>
			<div class="row">
				<div class="col-md-12">   
					<div class="card-body table-responsive">
					  <table id="example1" class="table table-bordered" style="border:1px;">
						<thead>
						<tr>
						  <th style="width:200px"><?= trans('title') ?></th>
						  <td><?= $news_model['post_title']; ?></td>
						</tr>
						<tr>
						  <th style="width:200px"><?= trans('description') ?></th>
						  <td><?= $news_model['post_description']; ?></td>
						</tr>
						<?php if ($news_model['post_type'] == '2') { ?>
						<?php if ($news_model['post_event'] != '') { 
						if ($news_model['post_event'] == "1"){ $event = "Events";} else { $event = "News"; }
						
						?>
						<tr>
						  <th style="width:200px"><?= trans('Type') ?></th>
						  <td><?= $event; ?></td>
						</tr>
						<?php } ?>
						<?php if ($news_model['post_date'] != '') { 
						$post_date = date('F d, Y',strtotime($news_model['post_time']));
						?>
						<tr>
						  <th style="width:200px"><?= trans('date') ?></th>
						  <td><?= $post_date; ?></td>
						</tr>
						<?php } ?>
						<?php if ($news_model['post_time'] != '') {
						$time_as =  intval($news_model['post_time']) < 12 ? 'am' : 'pm'; 		

							?>
						<tr>
						  <th style="width:200px"><?= trans('time') ?></th>
						  <td><?= $news_model['post_time']. ' ' .$time_as; ?></td>
						</tr>
						<?php } ?>
						<?php if ($news_model['post_event_desc'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('event_desc') ?></th>
						  <td><?= $news_model['post_event_desc']; ?></td>
						</tr>
						<?php } ?>
						<?php } ?>
						<?php if ($news_model['post_image'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('image') ?></th>
						  <td><img src="<?= base_url($news_model['post_image']); ?>" class="favicon img_view" style="width:30%"></td>
						</tr>
						<?php } ?>
						<?php if ($news_model['post_link'] != '') { ?>
						<tr>
						  <th style="width:200px"><?= trans('External link') ?></th>
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