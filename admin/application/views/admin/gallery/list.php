  <link data-require="sweet-alert@*" data-semver="0.4.2" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css" />
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<div class="card-body">
    <table id="example1" class="table table-bordered table-hover">
        <thead>
            <tr>
                <th width="50"><?= trans('id') ?></th>
             	<th><?= trans('gallery title') ?></th>               			    
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
					<?=$row['gallery_title']?>
                </td>
                <td>
					<input class='tgl tgl-ios tgl_checkbox' 
                    data-id="<?=$row['id']?>" 
                    id='cb_<?=$row['id']?>' 
                    type='checkbox' <?php echo ($row['is_active'] == 1)? "checked" : ""; ?> />
                    <label class='tgl-btn' for='cb_<?=$row['id']?>'></label>
                </td>
                <td>				   
				<a href="<?= base_url("admin/gallery/view/".$row['id']); ?>" class="btn btn-primary btn-xs mr5" >         
				<i class="fa fa-eye"></i>            
				</a>				
				<?php //if($row['website_name'] == 'nanban.com') {?>
                    <a href="<?= base_url("admin/gallery/edit/".$row['id']); ?>" class="btn btn-warning btn-xs mr5" >
                    <i class="fa fa-edit"></i>
                    </a>					
                    <a href="<?= base_url("admin/gallery/delete/".$row['id']); ?>" onclick="return confirm('Are you sure you want to delete ?')" class="btn btn-danger btn-xs"><i class="fa fa-remove"></i></a>				
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