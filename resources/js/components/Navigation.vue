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

<style scoped>
.navbar-brand {
  padding-top: 0rem;
  padding-bottom: 0rem;
  color: var(--blue) !important;
  font-size: 42px;
  font-weight: 700;
  text-transform: uppercase;
}
li.nav-item {
  padding: 0.52rem 0.5rem;
}

.navbar-light .navbar-nav .nav-link {
  color: var(--blue);
  font-weight: 500;
  padding: 0;
}

.header .router-link-active.router-link-exact-active:not(.btn) {
  padding-bottom: 0;
  border-bottom: 0.1rem solid var(--blue);
}
</style>

<script>
export default {
  mounted() {
    console.log("nav mounted");
  }
};
</script>