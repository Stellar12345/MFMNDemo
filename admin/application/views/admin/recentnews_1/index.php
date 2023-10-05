<!-- DataTables -->
<link rel="stylesheet" href="<?= base_url() ?>assets/plugins/datatables/dataTables.bootstrap4.css"> 
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <section class="content">
         <!-- For Messages -->
        <?php $this->load->view('admin/includes/_messages.php') ?>
        <div class="card">
            <div class="card-body">
                <div class="d-inline-block">
                  <h3 class="card-title">
                    <i class="fa fa-list"></i>
                    <?= trans('news_list') ?>
                  </h3>
              </div>
			  <div class="d-inline-block float-right">
				<a href="<?= base_url('admin/news/add'); ?>" class="btn btn-success"><i class="fa fa-plus"></i> <?= trans('add news') ?></a>
			  </div>
            </div>
            <div class="card-body">
                <?php echo form_open("/",'class="filterdata"') ?>    
                <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                            <select name="status" class="form-control" onchange="filter_data()" >
                                <option value=""><?= trans('all_status') ?></option>
                                <option value="1"><?= trans('active') ?></option>
                                <option value="0"><?= trans('inactive') ?></option>
                            </select>
                        </div>
                    </div>
                    <!--div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="keyword" class="form-control"  placeholder="<?= trans('search_from_here') ?>..." onkeyup="filter_data()" />
                        </div>
                    </div-->
                </div>
                <?php echo form_close(); ?> 
            </div> 			    		<div class="row">    		<div class="col-md-12">               <!-- Load Admin list (json request)-->               <div class="data_container"></div>           </div>           </div>
        </div>
    </section>
</div>

<!-- DataTables -->
<script src="<?= base_url() ?>assets/plugins/datatables/jquery.dataTables.js"></script>
<script src="<?= base_url() ?>assets/plugins/datatables/dataTables.bootstrap4.js"></script>
<script>
  $(function () {
    $("#example1").DataTable();
  });

</script> 

<script>
//------------------------------------------------------------------
function filter_data()
{
$('.data_container').html('<div class="text-center"><img src="<?=base_url('assets/dist/img')?>/loading.png"/></div>');
$.post('<?=base_url('admin/news/filterdata')?>',$('.filterdata').serialize(),function(){
	$('.data_container').load('<?=base_url('admin/news/list_data')?>');
});
}
//------------------------------------------------------------------
function load_records()
{
$('.data_container').html('<div class="text-center"><img src="<?=base_url('assets/dist/img')?>/loading.png"/></div>');
$('.data_container').load('<?=base_url('admin/news/list_data')?>');
}
load_records();

//---------------------------------------------------------------------
$("body").on("change",".tgl_checkbox",function(){
$.post('<?=base_url("admin/news/change_status")?>',
{
    '<?php echo $this->security->get_csrf_token_name(); ?>' : '<?php echo $this->security->get_csrf_hash(); ?>',
	id : $(this).data('id'),
	status : $(this).is(':checked')==true?1:0
},
function(data){
	$.notify("Status Changed Successfully", "success");
});
});
</script>
