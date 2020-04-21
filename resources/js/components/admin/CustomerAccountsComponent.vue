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

<style scoped>
.content-card {
  margin-top: -6rem;
}
.card-box {
  padding: 1rem 0.8rem;
}
h2.card-box-heading {
  font-size: 1.3rem;
  color: var(--secondary);
  margin-bottom: 0.1rem;
}
p.card-box-desc {
  font-size: 1.2rem;
  color: var(--cyan);
  font-weight: 500;
  margin-bottom: 0;
}
.chart-heading {
  color: var(--secondary-color);
}
.filter-row {
  margin-top: -2rem;
}
.filter-row .card-box {
  border-radius: 10px;
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
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
