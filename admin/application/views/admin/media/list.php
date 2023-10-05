  <link data-require="sweet-alert@*" data-semver="0.4.2" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css" />
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<div class="card-body">
    <table id="example1" class="table table-bordered table-hover">
        <thead>
            <tr>
                <th width="50"><?= trans('id') ?></th>
             	<th><?= trans('title') ?></th>               			    
				<th><?= trans('date') ?></th>
                <th width="100"><?= trans('status') ?></th>
                <th width="120"><?= trans('action') ?></th>
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
					<?=$row['post_title']?>
                </td>
                <td>
					<?=$row['post_date']?>
                </td>
                <td>
					<input class='tgl tgl-ios tgl_checkbox' 
                    data-id="<?=$row['media_id']?>" 
                    id='cb_<?=$row['media_id']?>' 
                    type='checkbox' <?php echo ($row['is_active'] == 1)? "checked" : ""; ?> />
                    <label class='tgl-btn' for='cb_<?=$row['media_id']?>'></label>
                </td>
                <td>				   
				<a href="<?= base_url("admin/media/view/".$row['media_id']); ?>" class="btn btn-primary btn-xs mr5" >         
				<i class="fa fa-eye"></i>            
				</a>				
				<?php //if($row['website_name'] == 'nanban.com') {?>
                    <a href="<?= base_url("admin/media/edit/".$row['media_id']); ?>" class="btn btn-warning btn-xs mr5" >
                    <i class="fa fa-edit"></i>
                    </a>					
                    <a href="<?= base_url("admin/media/delete/".$row['media_id']); ?>" onclick="return confirm('Are you sure you want to delete ?')" class="btn btn-danger btn-xs"><i class="fa fa-remove"></i></a>				
					<?php //} ?>
                </td>
            </tr>
            <?php endforeach;?>
        </tbody>
    </table>
</div>

<script src="<?= base_url() ?>assets/plugins/datatables/jquery.dataTables.js"></script>
<script src="<?= base_url() ?>assets/plugins/datatables/dataTables.bootstrap4.js"></script>
<script>  $(function () {    $("#example1").DataTable();  })</script>