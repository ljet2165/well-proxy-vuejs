<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: white">
      <a class="navbar-brand" href="#">Logo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav ml-auto">
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
        <form class="form-inline">
          <router-link :to="{name: 'login'}" class="btn btn-outline-primary my-2 mr-2 my-sm-0">Login</router-link>
          <button class="btn btn-primary my-2 my-sm-0" type="button">Register</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("nav mounted");
  }
};
</script>

<style src="./assets/Navigation.css" scoped></style>