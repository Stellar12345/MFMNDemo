 <!-- Datatable style -->
<link rel="stylesheet" href="<?= base_url() ?>assets/plugins/datatables/dataTables.bootstrap4.css"> 

<div class="content-wrapper">
 <section class="content">
  <!-- For Messages -->
  <?php $this->load->view('admin/includes/_messages.php') ?>
   <div class="card">
      <div class="card-header">
        <div class="d-inline-block">
          <h3 class="card-title"><i class="fa fa-list"></i>&nbsp; Countries List</h3>
        </div>
        <div class="d-inline-block float-right">
          <?php if($this->rbac->check_operation_permission('country_add')): ?>
            <a href="<?= base_url('admin/location/country/add'); ?>" class="btn btn-success"><i class="fa fa-plus"></i> Add New Country</a>
          <?php endif; ?>
        </div>
      </div>
      <div class="card-body">
        <table id="na_datatable" class="table table-bordered table-striped ">
          <thead>
          <tr>
            <th>No</th>			            <th>Latitude</th>			            <th>Longitude</th>			            <th>Name</th>			            <th>Country</th>			            <th>State</th>			            <th>City</th>			
            <th>Status</th> 
            <th style="width: 150px;" class="text-right">Action</th>
          </tr>
          </thead>
        </table>
      </div>
   </div>
  </section> 
</div> 


   <!-- DataTables -->
<script src="<?= base_url() ?>assets/plugins/datatables/jquery.dataTables.js"></script>
<script src="<?= base_url() ?>assets/plugins/datatables/dataTables.bootstrap4.js"></script>
  <script>
  //---------------------------------------------------
  var table = $('#na_datatable').DataTable( {
      "processing": true,
      "serverSide": true,
      "ajax": "<?=base_url('admin/location/country_datatable_json')?>",
      "order": [[1,'asc']],
      "columnDefs": [
        { "targets": 0, "name": "", 'searchable':false, 'orderable':true},
        { "targets": 1, "name": "name", 'searchable':true, 'orderable':true},
        { "targets": 2, "name": "status", 'searchable':true, 'orderable':true},
        { "targets": 3, "name": "action", 'searchable':false, 'orderable':false,'width':'100px'}
      ]
    });
  </script>
  <!-- Scripts for this page -->
  <script>
     $(document).ready(function(){
      $(".btn-delete").click(function(){
        if (!confirm("Do you want to delete")){
          return false;
        }
      });
    });
  </script>
  <script>
  $("#country").addClass('active');
  </script>

