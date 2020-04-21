<template>
  <div class="profile">
    <section class="container-fluid profile-header-section pl-0 pr-0">
      <!-- navigation start -->
      <Header></Header>
      <!-- navigation end -->
    </section>

    <!-- main start -->
    <main>
      <div class="container-fluid">
        <div class="row mt-4">
          <!-- side navbar start -->
          <Sidenav></Sidenav>
          <!-- side navbar end -->

          <!-- profile data container -->
          <DataTrafficComponent></DataTrafficComponent>
          <!-- profile data container end -->
        </div>
      </div>
    </main>
    <!-- main end -->
  </div>
</template>

<style scoped>
.profile-header-section {
  background: url(/images/resources/admin/banner-image.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top left;
  /* min-height: 20rem; */
}
.profile-header-section .navbar.navbar-light {
  background: transparent !important;
}
.profile-header-section .navbar.navbar-light .navbar-brand,
.profile-header-section .navbar.navbar-light .navbar-nav .nav-link {
  color: #fff !important;
}
.profile-header-section .router-link-active.router-link-exact-active:not(.btn) {
  border-bottom: 0.1rem solid #fff;
}
.profile-header-section .btn-outline-primary {
  color: #fff;
  border-color: #fff;
}
.profile-header-section .btn-primary {
  color: var(--blue);
  background-color: #fff;
  border-color: #fff;
}
.profile-header-section .contact-container {
  padding: 1rem 1.5rem;
  padding-top: 0.8rem;
  border-radius: 1.25rem;
  position: relative;
  width: 100%;
  /* box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1); */
  z-index: 9999;
  margin-top: -2rem;
  /* background-color: #fafafa; */
  /* border-bottom: 0.3rem solid var(--cyan); */
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

.tabs-container {
  margin-top: -6rem;
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
</style>

<script>
import Header from "./Header";
import Sidenav from "./Sidenav";
import DataTrafficComponent from "./DataTrafficComponent";

export default {
  components: {
    Header,
    Sidenav,
    DataTrafficComponent
  },
  data() {
    return {};
  }
};
</script>
