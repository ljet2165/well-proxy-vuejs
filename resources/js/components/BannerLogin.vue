<template>
  <div class="container-fluid pl-0 pr-0">
    <div class="jumbotron banner-jumbotron">
      <div class="row pb-5">
        <div class="col-lg-12 text-center">
          <h1 class="text-white">Login</h1>
          <p class="main-slogan text-white">Private, Dedicated and anonymous proxies.</p>
        </div>
      </div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-sm-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.banner-jumbotron {
    background: var(--blue);
    background: url(/images/resources/services/Banner.png);
    border-radius: 0;
    color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
}
.banner-jumbotron h1 {
  font-weight: 700;
}
.banner-jumbotron p.main-slogan {
  font-weight: 300;
  font-size: initial;
  letter-spacing: 0.1rem;
}
.contact-container {
    padding: 1.5rem 3rem;
    border-radius: 1.25rem;
    position: absolute;
    width: 100%;
    box-shadow: 0 0 1rem 0.2rem rgba(0,0,0,0.1);
    z-index: 9999;
}

.form-control:focus {
    border-color: transparent;
    box-shadow: 0 0 0 0.1rem var(--blue);
}

@media (min-width: 576px) {
  .banner-jumbotron {
    height: 25rem;
    padding-bottom: 1rem;
  }
}
</style>

<script>
export default {};
</script>