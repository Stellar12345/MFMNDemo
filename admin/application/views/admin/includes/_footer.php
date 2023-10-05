<?php if(!isset($footer)): ?>

  <footer class="main-footer">
    <strong><?= $this->general_settings['copyright']; ?></strong>
  </footer>

  <?php endif; ?>  

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->

  
</div>
<!-- ./wrapper -->


<!-- jQuery UI 1.11.4 -->
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>
<!-- Bootstrap 4 -->
<script src="<?= base_url() ?>assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

<!-- Slimscroll -->
<script src="<?= base_url() ?>assets/plugins/slimScroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="<?= base_url() ?>assets/plugins/fastclick/fastclick.js"></script>
<!-- AdminLTE App -->
<script src="<?= base_url() ?>assets/dist/js/adminlte.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="<?= base_url() ?>assets/dist/js/demo.js"></script>
<!-- Select2 -->
<script src="<?= base_url() ?>assets/plugins/select2/select2.full.min.js"></script>
<!-- Notify JS -->
<script src="<?= base_url() ?>assets/plugins/notify/notify.min.js"></script>
<!-- DROPZONE -->
<script src="<?= base_url() ?>assets/plugins/dropzone/dropzone.js" type="text/javascript"></script>

<script>

var csfr_token_name = '<?php echo $this->security->get_csrf_token_name(); ?>';

var csfr_token_value = '<?php echo $this->security->get_csrf_hash(); ?>';

$(function(){
//-------------------------------------------------------------------
// Country State & City Change

$(document).on('change','.country',function()
{
 $('.citys').html('<select name="status" class="select2" style="width:100%"> <option value="">Select Status</option></select>');
//alert(csfr_token_value);
  if(this.value == '')
  {
    $('.states').html('<option value="">Select State</option>');

    $('.citys').html('<option value="">Select City</option>');

    return false;
  }


  var data =  {

    country : this.value,

  }
//alert(this.value);
  data[csfr_token_name] = csfr_token_value;

  $.ajax({

    type: "POST",

    url: "<?= base_url('admin/auth/get_country_states') ?>",

    data: data,

    dataType: "json",

    success: function(obj) {
      $('.states').html(obj.msg);
	 
	  $('.select2').select2();
   },

  });
}); 

$(document).on('change','.state',function()
{
	
//alert(this.value);

  var data =  {

    state : this.value,

  }
	
  data[csfr_token_name] = csfr_token_value;

  $.ajax({

    type: "POST",

    url: "<?= base_url('admin/auth/get_state_cities') ?>",

    data: data,

    dataType: "json",

    success: function(obj) {

      $('.citys').html(obj.msg);
	  $('.select2').select2();

   },

  });
    });
  });
</script>

</body>
</html>
