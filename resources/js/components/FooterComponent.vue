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

<style src="./assets/FooterComponent.css" scoped></style>