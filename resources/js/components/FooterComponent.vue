<template>
  <footer id="footer">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'services'}" class="nav-link">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'contact'}" class="nav-link">Contact Info</router-link>
            </li>
          </ul>
          <div class="footer-social-icons">
            <a href="#" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>

    <div class="container-fluid footer-end">
      <div class="container p-3">
        <div class="row">
          <div class="col-lg-8">
            <a class="navbar-brand" href="#">Logo</a>
          </div>
          <div class="col-lg-4">
            <p class="copyright-text">Copyright 2020 | Wallproxy.com</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<style scoped>
#footer {
  min-height: 300px;
  background: var(--blue);
  background: url('/images/resources/home-page/footer-background.png');
  background-repeat: no-repeat;
  /* background-size: 100% auto; */
  background-size: cover;
  background-position: top center;
  margin-top: 5rem;
}
#footer .container{
  padding-top: 25rem;
}
.navbar{
  padding: 0.5rem 0rem;
}
.navbar-nav li.nav-item:not(:last-child) {
  border-right: 0.1rem solid #fff;
}
.navbar-nav li.nav-item .nav-link {
  color: white;
}
.nav-link {
  padding: 0.3rem 1rem;
  font-weight: 600;
}
.footer-social-icons * {
  color: #fff !important;
}
.footer-social-icons i.fab {
  font-size: 1.4rem;
  padding-right: 1rem;
}
.navbar-brand {
  color: #fff !important;
}
.footer-end {
  border-top: 0.1rem solid #fff;
}

p.copyright-text {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  color: #fff;
}

@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.7rem;
    padding-left: 0.7rem;
  }
}
</style>
<script>
export default {
  data() {
    return {
      image_src: "/images/Contact info.pn"
    };
  },
  mounted() {
    console.log("nav mounted");
  }
};
</script>