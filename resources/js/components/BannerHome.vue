<template>
  <div class="container-fluid pl-0 pr-0">
    <div class="jumbotron banner-jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1 class="text-white">
              <span class="secondary-text">Well</span> Proxy
            </h1>
            <p class="main-slogan text-white">Private, Dedicated and anonymous proxies.</p>
            <p class="main-slogan text-white">It is a long established fact that reader will be distracted by the readable content of a page when looking at its layout</p>
            <button class="btn btn-default btn-proxy">Buy Proxies</button>
            <p class="get-started-detail">
              <i class="fas fa-caret-right"></i> Get Started
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-jumbotron {
  background: transparent;
  border-radius: 0;
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}
.banner-jumbotron h1 {
  font-weight: 700;
}
.btn-proxy {
  padding: 0.5rem 3rem;
  background: #fff;
  border-radius: 0;
  color: var(--blue);
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}
.get-started-detail {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 200;
}
.get-started-detail i {
  color: var(--secondary-text-color);
  font-size: 3rem;
  margin-right: 3rem;
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
  box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1);
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