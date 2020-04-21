<template>
  <div class="col-md-9">
    <div class="content-card card-box bg-white">
      <div class="container-fluid chart-container">
        <div class="row filter-row-2 mb-4">
          <b-col sm="2">
            <label for="ip_filter">IP Filter</label>
          </b-col>
          <b-col sm="4">
            <b-form-input id="ip_filter" type="text"></b-form-input>
          </b-col>
          <b-col sm="2">
            <label for="url_filter">URL Filter</label>
          </b-col>
          <b-col sm="4">
            <b-form-input id="url_filter" type="url"></b-form-input>
          </b-col>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-card {
  margin-top: -6rem;
  min-height: 30rem;
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

.filter-row {
  margin-top: -2rem;
}
.filter-row .card-box {
  border-radius: 10px;
}

label {
  font-size: 1.2rem;
}

.form-control:focus {
  border-color: transparent;
  box-shadow: none;
  border: 2px solid var(--blue);
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

export default {};
</script>
