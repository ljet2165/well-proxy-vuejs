<template>
  <div class="col-md-9">
    <div class="content-card card-box bg-white">
      <div class="container-fluid chart-container">
        <!-- Top Card Section -->
        <div class="row filter-row mb-4">
          <div class="col-lg-4">
            <div class="card-box bg-white">
              <div class="row">
                <div class="col-lg-12 card-heading-row">
                  <h2 class="card-box-heading">Proxies</h2>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-lg-6">
                  <div class="card-icon d-inline-block">
                    <i class="fas fa-globe"></i>
                  </div>
                  <div class="d-inline-block card-box-desc">
                    <p class="card-box-description">1200</p>
                    <small class="d-block text-muted">Total Proxies</small>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="card-icon d-inline-block">
                    <i class="fas fa-exchange-alt"></i>
                  </div>
                  <div class="d-inline-block card-box-desc">
                    <p class="card-box-description">350</p>
                    <small class="d-block text-muted">Used Proxies</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card-box network-type-card bg-white">
              <div class="row">
                <div class="col-lg-12 card-heading-row">
                  <h2 class="card-box-heading">Network Types</h2>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-lg-3 pl-0 pr-0">
                  <div class="card-box-desc">
                    <p class="card-box-description">3</p>
                    <small class="d-block text-muted">Data Center</small>
                  </div>
                </div>

                <div class="col-lg-3 pl-0 pr-0">
                  <div class="card-box-desc">
                    <p class="card-box-description">2</p>
                    <small class="d-block text-muted">Static Residential</small>
                  </div>
                </div>

                <div class="col-lg-3 pl-0 pr-0">
                  <div class="card-box-desc">
                    <p class="card-box-description">5</p>
                    <small class="d-block text-muted">Residential</small>
                  </div>
                </div>

                <div class="col-lg-3 pl-0 pr-0">
                  <div class="card-box-desc">
                    <p class="card-box-description">7</p>
                    <small class="d-block text-muted">Mobile</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-2">
            <div class="card-box bg-white">
              <div class="row">
                <div class="col-lg-12 card-heading-row">
                  <h2 class="card-box-heading">Transferred</h2>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-lg-6">
                  <div class="card-box-desc">
                    <p class="card-box-description">
                      20
                      <span class="text-muted">GB</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-2">
            <div class="card-box bg-white">
              <div class="row">
                <div class="col-lg-12 card-heading-row">
                  <h2 class="card-box-heading">Balance</h2>
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-lg-12">
                  <div class="card-box-desc">
                    <p class="card-box-description">$23.34</p>
                    <small class="d-block text-muted">Total Amount</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Top Card Section End -->

        <div class="row">
          <div class="col-lg-8">
            <TrafficChart></TrafficChart>
          </div>
          <div class="col-lg-4">
            <div class="row">
              <div class="col-lg-12">
                <div class="card-box">
                  <div class="row">
                    <div class="col-lg-5 pr-0">
                      <b-form-checkbox
                        id="checkbox-1"
                        name="filter-checkbox"
                        value="data_center"
                        unchecked-value="not_accepted"
                      >Data Center</b-form-checkbox>
                    </div>
                    <div class="col-lg-7">
                      <b-form-checkbox
                        id="checkbox-2"
                        name="filter-checkbox"
                        value="static_residential"
                        unchecked-value="not_accepted"
                      >Static Residential</b-form-checkbox>
                    </div>
                    <div class="col-lg-5 pr-0">
                      <b-form-checkbox
                        id="checkbox-3"
                        name="checkbox-3"
                        value="residential"
                        unchecked-value="not_accepted"
                      >Residential</b-form-checkbox>
                    </div>
                    <div class="col-lg-7">
                      <b-form-checkbox
                        id="checkbox-4"
                        name="filter-checkbox"
                        value="mobile"
                        unchecked-value="not_accepted"
                      >Mobile</b-form-checkbox>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-12 p-4">
                <div class="card-box">
                  <b-form-select
                    label-field="sadad"
                    v-model="selected"
                    :options="bandwidth_options"
                  ></b-form-select>
                </div>
              </div>

              <div class="col-lg-12 p-4">
                <div class="card-box">
                  <b-form-select v-model="selected" :options="year_options"></b-form-select>
                </div>
              </div>

              <div class="col-lg-12 p-4">
                <div class="card-box">
                  <b-form-select v-model="selected" :options="data_options"></b-form-select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrafficChart from "./TrafficChart";

export default {
  components: {
    TrafficChart
  },
  data() {
    return {
      selected: null,
      bandwidth_options: [
        { value: null, text: "Bandwidth" },
        { value: "1mb", text: "1MB" },
        { value: "2mb", text: "2MB" },
        { value: "3mb", text: "3MB" }
      ],
      year_options: [
        { value: null, text: "Year" },
        { value: "1year", text: "1 Year" },
        { value: "2year", text: "2 Year" },
        { value: "3year", text: "3 Year" }
      ],
      data_options: [
        { value: null, text: "Bytes/day" },
        { value: "100", text: "100" },
        { value: "200", text: "200" },
        { value: "300", text: "300" }
      ]
    };
  }
};
</script>

<style src="../assets/admin/DashboardComponent.css" scoped></style>
