<template>
  <b-modal id="bv-modal-example" hide-header hide-footer>
    <template v-slot:modal-title></template>
    <div class="d-block">
      <div class="row">
        <div class="col-lg-12 text-center modal-title">
          <h3>Change Password</h3>
        </div>
      </div>

      <div class="row modal-body-row">
        <div class="col-lg-4 col-md-6">
          <label for>Customer Name:</label>
        </div>
        <div class="col-md-6" v-html="customer_name"></div>
      </div>
      <div class="row modal-body-row">
        <div class="col-lg-4 col-md-6">
          <label for>New Password</label>
        </div>
        <div class="col-md-6">
          <input type="password" class="form-control" />
        </div>
      </div>
    </div>
    <div class="row modal-footer-row">
      <div class="col-md-3">
        <b-button variant="light" block @click="$bvModal.hide('bv-modal-example')">Cancel</b-button>
      </div>
      <div class="col-md-6"></div>
      <div class="col-md-3">
        <b-button variant="primary" block @click="$bvModal.hide('bv-modal-example')">Save</b-button>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    customer_name:
      "<span style='color: var(--secondary-color); font-size: 1rem'>Ahmad Fraz</span>"
  })
};
</script>


<style scoped>
.modal-title {
  padding-left: 0;
  padding-right: 0;
}
.modal-title h3 {
  border-bottom: 1px solid var(--secondary-color);
  color: var(--primary-color);
  padding-bottom: 1rem;
}
.row.modal-footer-row {
  border-top: 1px solid var(--secondary-color);
  margin-top: 1rem;
}
.modal-body-row label{
  font-size: 1rem;
}
</style>