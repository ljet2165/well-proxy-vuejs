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
      this[var_name] = (action === 'add') ? this[var_name] + 1 : this[var_name] - 1;
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


<style scoped>
.content-card {
  margin-top: -6rem;
}
/* heading row */
.row.header-row {
  margin-top: -4rem;
  color: #fff;
  text-align: center;
}
.header-row h3 {
  font-size: 1.2rem;
}
.table-heading h1 {
  color: var(--blue);
  font-size: 1.6rem;
  font-weight: 600;
}
.table-heading p.text-small {
  font-size: 0.9rem;
  color: var(--primary-text-color);
}
.table-heading .table-heading-main {
  padding: 2rem 2rem;
}
.table-heading .table-heading-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  border-left: 1px solid var(--primary-text-color);
}
.table-heading p {
  color: var(--primary-color);
  font-weight: 600;
}
/* heading row */

/* table-data */
.row.table-row {
  font-size: 1rem;
  color: #6f6f6f;
}
.row.table-row:not(:last-child) {
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
}
.row.table-row div:not(:first-child) {
  text-align: center;
}
.row.table-row a.btn,
.row.table-row p.table-data {
  display: inline-block;
}
.row.table-row a.btn {
  background: #f5f5f5;
  padding: 0.275rem 0.7rem;
}

/* table-data */

/* table footer */
.table-footer-row {
  text-align: center;
}
/* table footer end */

.text-bold {
  font-weight: bold;
}

.card-box {
  padding: 1rem 0rem;
}
.card-icon {
  font-size: 1.8rem;
  vertical-align: top;
  color: var(--secondary-color);
  margin-right: 0.3rem;
}
.card-heading-row {
  border-bottom: 1px solid var(--secondary-text-color);
  padding: 0.2rem 1rem;
}
h2.card-box-heading {
  font-size: 1.3rem;
  color: var(--secondary);
  margin-bottom: 0.1rem;
}
p.card-box-description {
  font-size: 1.2rem;
  margin-bottom: -5px;
}
.card-box-desc .text-muted {
  font-size: 12px;
  color: #8c8c8c !important;
}
.network-type-card .card-box-desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--secondary-color);
}
.network-type-card .card-box-description {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
}
.network-type-card .text-muted {
  font-size: 9px;
}
p.card-box-desc {
  /* font-size: 1.2rem;
  color: var(--cyan);
  font-weight: 500;
  margin-bottom: 0; */
}
.filter-row {
  margin-top: -2rem;
}
.filter-row .card-box {
  border-radius: 10px;
  min-height: 8rem;
}

select.custom-select {
  border: none;
  border-bottom: 1px solid #ced4da;
  border-radius: 0;
}

.secondary-heading {
  flex: 1;
  color: var(--blue);
  font-weight: 500;
  font-size: 1.4rem;
}
.text-muted-color {
  color: #a9a9a9;
  font-size: 1rem;
}
.text-muted {
  font-size: 12px;
}

.form-control:focus {
  border-color: transparent;
  box-shadow: none;
  border: 2px solid var(--blue);
  border-left: none;
}
.form-control:focus + .input-group-prepend .input-group-text {
  border: 2px solid var(--blue);
  border-right: none;
}

.nav.nav-pills li.nav-item {
  padding-bottom: 0;
}
.nav-pills .nav-link {
  color: white;
  font-weight: 500;
  font-size: 1rem;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: var(--blue);
  background-color: #fff;
}
.tab-content {
  background: #fff;
}
@media (min-width: 768px) {
  .custom-offset-md-1 {
    margin-left: 13.333333%;
  }
}
@media only screen and (max-width: 768px) {
  .card-3 {
    margin-top: 1rem;
  }
}

@media only screen and (max-width: 576px) {
  .card {
    margin-top: 1rem;
  }
}
</style>
