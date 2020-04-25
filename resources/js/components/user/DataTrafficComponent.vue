<template>
  <div class="col-md-9">
    <div class="content-card card-box bg-white">
      <div class="container-fluid chart-container">
        <div class="row filter-row mb-4">
          <div class="col-lg-4">
            <div class="card-box bg-white">
              <div class="row">
                <div class="col-lg-5 pr-0">
                  <b-form-checkbox
                    id="checkbox-1"
                    name="filter-checkbox"
                    value="data_center"
                    unchecked-value="not_accepted"
                  >Data Center</b-form-checkbox>
                </div>

                <div class="col-lg-7 pr-0">
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

          <div class="col-lg-2">
            <div class="card-box bg-white">
              <h2 class="card-box-heading">Proxies</h2>
              <p class="card-box-desc">2</p>
            </div>
          </div>

          <div class="col-lg-2">
            <div class="card-box bg-white">
              <h2 class="card-box-heading">Transferred</h2>
              <p class="card-box-desc">103MB</p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card-box bg-white">
              <h2 class="card-box-heading">Remaining Balance</h2>
              <p class="card-box-desc">$2</p>
            </div>
          </div>
        </div>

        <div class="row filter-row-2 mb-4">
          <div class="col-lg-3 offset-lg-3">
            <b-form-select v-model="selected" :options="bandwidth_options"></b-form-select>
          </div>
          <div class="col-lg-3">
            <b-form-select v-model="selected" :options="year_options"></b-form-select>
          </div>
          <div class="col-lg-3">
            <b-form-select v-model="selected" :options="data_options"></b-form-select>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <TrafficChart></TrafficChart>
          </div>
          <div class="col-lg-6">
            <TrafficChart></TrafficChart>
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

<style src="../assets/user/DataTrafficComponent.css" scoped></style>
