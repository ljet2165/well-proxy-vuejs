<template>
  <!-- sidenav start -->
  <div class="col-md-3">
    <div class="row sidenav ml-auto mr-auto p-4">
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
  <!-- sidenav end -->
</template>

<style scoped>
.sidenav {
  background: #f5f5f6;
}
.icon-container {
  padding: 1.6rem 0.5rem;
  background: white;
  margin: 4% 7%;
  border-radius: 10px;
  transition: all 0.3s;
}
.icon-container:hover {
  background: var(--blue);
  color: #fff;
  cursor: pointer;
}
.icon-container:hover a.menu {
  color: #fff;
}
.icon-container.active {
  background: var(--blue);
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
}
.icon-container.active a.menu {
  color: #fff;
}
.icon-container .menu .menu-icon {
  font-size: 1.5rem;
}
.icon-container .menu .menu-title {
  font-size: 0.8rem;
}
a.menu:hover {
  text-decoration: none !important;
}

@media (min-width: 768px) {
  .icon-container {
    max-width: 35%;
  }
}
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