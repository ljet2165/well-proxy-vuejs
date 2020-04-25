<template>
  <!-- sidenav start -->
  <div class="col-md-3 side-nav-bg">
    <div class="sidenav">
      <div class="row ml-auto mr-auto p-4">
        <div
          :class="[currentPage.includes('order-proxy') ? activeClass : 'col-lg-6 icon-container text-center' ]"
        >
          <router-link :to="{name: 'order-proxy'}" class="menu">
            <div class="menu-icon">
              <i class="fas fa-bars"></i>
            </div>
            <div class="menu-title">Order Proxy</div>
          </router-link>
        </div>

        <div
          :class="[currentPage.includes('profile') ? activeClass : 'col-lg-6 icon-container text-center' ]"
        >
          <router-link :to="{name: 'user-profile'}" class="menu">
            <div class="menu-icon">
              <i class="fas fa-user-cog"></i>
            </div>
            <div class="menu-title">Account Detail</div>
          </router-link>
        </div>

        <div
          :class="[currentPage.includes('data-traffic') ? activeClass : 'col-lg-6 icon-container text-center' ]"
        >
          <router-link :to="{name: 'data-traffic'}" class="menu">
            <div class="menu-icon">
              <i class="fas fa-database"></i>
            </div>
            <div class="menu-title">Data Traffic</div>
          </router-link>
        </div>

        <div
          :class="[currentPage.includes('proxy-rule') ? activeClass : 'col-lg-6 icon-container text-center' ]"
        >
          <router-link :to="{name: 'proxy-rule'}" class="menu">
            <div class="menu-icon">
              <i class="fas fa-pencil-ruler"></i>
            </div>
            <div class="menu-title">Proxy Rule</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- sidenav end -->
</template>

<style scoped>

</style>

<script>
export default {
  computed: {
    currentPage() {
      return this.$route.path;
    }
  },
  data() {
    return {
      activeClass: "active col-lg-6 icon-container text-center"
    };
  }
};
</script>

<style src="../assets/Sidenav.css" scoped></style>