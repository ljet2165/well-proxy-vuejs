<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
      <div class="container">
        <ul class="navbar-nav">
          <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
          <router-link :to="{ name: 'services' }" class="nav-link">Services</router-link>
          <router-link :to="{ name: 'contact' }" class="nav-link">Contact Info</router-link>
        </ul>
      </div>
    </nav>
    <main>
      <div class="jumbotron">
        <h1 class="text-center">asdasd</h1>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
