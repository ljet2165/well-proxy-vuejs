<template>
  <div class="col-md-9">
    <div class="content-card card-box bg-white">
      <div class="container-fluid chart-container">
        <!-- head row Section -->
        <div class="row header-row mb-2">
          <div class="col-md-4"></div>

          <div class="col-md-2">
            <h3>Data Center</h3>
          </div>

          <div class="col-md-2 pl-0">
            <h3>Static Residential</h3>
          </div>

          <div class="col-md-2">
            <h3>Residential</h3>
          </div>

          <div class="col-md-2">
            <h3>Mobile</h3>
          </div>
        </div>
        <!-- head row Section End -->

        <div class="row table-heading">
          <div class="col-md-4 p-0">
            <div class="table-heading-main">
              <h1>Plan Details</h1>
              <p class="text-muted text-small">All Prices in USD</p>
            </div>
          </div>
          <div class="col-md-2 p-0">
            <div class="table-heading-data">
              <h1>$75</h1>
              <p>Billed Monthly</p>
            </div>
          </div>
          <div class="col-md-2 p-0">
            <div class="table-heading-data">
              <h1>$75</h1>
              <p>Billed Monthly</p>
            </div>
          </div>
          <div class="col-md-2 p-0">
            <div class="table-heading-data">
              <h1>$75</h1>
              <p>Billed Monthly</p>
            </div>
          </div>
          <div class="col-md-2 p-0">
            <div class="table-heading-data">
              <h1>$75</h1>
              <p>Billed Monthly</p>
            </div>
          </div>
        </div>

        <!-- table data start -->
        <div class="row table-row">
          <div class="col-md-4 table-heading-main">
            <p class="table-data text-bold">Traffic Limit</p>
          </div>

          <div class="col-md-2">
            <a class="btn btn-sm mr-2" @click="changeValue('sub', 'data_center_value')">
              <i class="fas fa-minus"></i>
            </a>
            <p class="table-data">
              <span class="data_value" v-text="data_center_value">5</span>
              <span class="data_type">GB</span>
            </p>
            <a class="btn btn-sm ml-2" @click="changeValue('add', 'data_center_value')">
              <i class="fas fa-plus"></i>
            </a>
          </div>

          <div class="col-md-2">
            <a class="btn btn-sm mr-2" @click="changeValue('sub', 'static_residential_value')">
              <i class="fas fa-minus"></i>
            </a>
            <p class="table-data">
              <span class="data_value" v-text="static_residential_value">5</span>
              <span class="data_type">GB</span>
            </p>
            <a class="btn btn-sm ml-2" @click="changeValue('add', 'static_residential_value')">
              <i class="fas fa-plus"></i>
            </a>
          </div>

          <div class="col-md-2">
            <a class="btn btn-sm mr-2" @click="changeValue('sub', 'residential_value')">
              <i class="fas fa-minus"></i>
            </a>
            <p class="table-data">
              <span class="data_value" v-text="residential_value">5</span>
              <span class="data_type">GB</span>
            </p>
            <a class="btn btn-sm ml-2" @click="changeValue('add', 'residential_value')">
              <i class="fas fa-plus"></i>
            </a>
          </div>

          <div class="col-md-2">
            <a class="btn btn-sm mr-2" @click="changeValue('sub', 'mobile_value')">
              <i class="fas fa-minus"></i>
            </a>
            <p class="table-data">
              <span class="data_value" v-text="mobile_value">5</span>
              <span class="data_type">GB</span>
            </p>
            <a class="btn btn-sm ml-2" @click="changeValue('add', 'mobile_value')">
              <i class="fas fa-plus"></i>
            </a>
          </div>
        </div>

        <div class="row table-row">
          <div class="col-md-4 table-heading-main">
            <p class="table-data">Extra GB Price</p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">$15</span>
            </p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">$15</span>
            </p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">$15</span>
            </p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">$15</span>
            </p>
          </div>
        </div>

        <div class="row table-row">
          <div class="col-md-4 table-heading-main">
            <p class="table-data">Proxy User Limit</p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">1</span>
            </p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">3</span>
            </p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">5</span>
            </p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">10</span>
            </p>
          </div>
        </div>

        <div class="row table-row">
          <div class="col-md-4 table-heading-main">
            <p class="table-data">Whitelist Limit</p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">2</span>
            </p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">10</span>
            </p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">20</span>
            </p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">50</span>
            </p>
          </div>
        </div>

        <div class="row table-row">
          <div class="col-md-4 table-heading-main">
            <p class="table-data">Proxy Locations</p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">2</span>
            </p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">10</span>
            </p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">20</span>
            </p>
          </div>

          <div class="col-md-2">
            <p class="table-data">
              <span class="data_value">50</span>
            </p>
          </div>
        </div>
        <!-- table data end -->

        <div class="row table-footer-row">
          <div class="col-md-4">
            <p class="table-data"></p>
          </div>

          <div class="col-md-2">
            <button class="btn btn-primary">Save</button>
          </div>

          <div class="col-md-2">
            <button class="btn btn-primary">Save</button>
          </div>

          <div class="col-md-2">
            <button class="btn btn-primary">Save</button>
          </div>

          <div class="col-md-2">
            <button class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    changeValue(action, var_name) {
      this[var_name] =
        action === "add" ? this[var_name] + 1 : this[var_name] - 1;
      console.log(this[var_name]);
    }
  },

  data() {
    return {
      data_center_value: 5,
      static_residential_value: 5,
      residential_value: 5,
      mobile_value: 5
    };
  }
};
</script>

<style src="../assets/admin/PricingManagementComponent.css" scoped></style>