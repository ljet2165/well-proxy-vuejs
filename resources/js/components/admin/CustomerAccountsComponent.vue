<template>
  <div class="col-md-9">
    <div class="content-card card-box bg-white">
      <div class="container-fluid chart-container">
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
          <div class="col-lg-10 ml-auto mr-auto">
            <h4 class="chart-heading">Datacenter IP Stats</h4>
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
  },
};
</script>


<style src="../assets/admin/CustomerAccountsComponent.css" scoped></style>