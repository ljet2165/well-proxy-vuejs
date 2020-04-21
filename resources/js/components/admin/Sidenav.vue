<template>
  <!-- sidenav start -->
  <div class="col-md-3">
    <div class="row sidenav ml-auto mr-auto p-4">
      <div
        :class="[currentPage.name == 'dashboard' ? activeClass : 'col-md-6 icon-container text-center' ]"
      >
        <router-link :to="{name: 'dashboard'}" class="menu">
          <div class="menu-icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <div class="menu-title">Dashboard</div>
        </router-link>
      </div>

      <div
        :class="[currentPage.name == 'customer-management' ? activeClass : 'col-md-6 icon-container text-center' ]"
      >
        <router-link :to="{name: 'customer-management'}" class="menu">
          <div class="menu-icon">
            <i class="fas fa-users-cog"></i>
          </div>
          <div class="menu-title">Customer Management</div>
        </router-link>
      </div>

      <div
        :class="[currentPage.name == 'pricing-management' ? activeClass : 'col-md-6 icon-container text-center' ]"
      >
        <router-link :to="{name: 'pricing-management'}" class="menu">
          <div class="menu-icon">
            <i class="fas fa-tags fa-flip-horizontal"></i>
          </div>
          <div class="menu-title">Pricing Management</div>
        </router-link>
      </div>

      <div
        :class="[currentPage.name == 'customer-accounts' ? activeClass : 'col-md-6 icon-container text-center' ]"
      >
        <router-link :to="{name: 'customer-accounts'}" class="menu">
          <div class="menu-icon">
            <i class="fas fa-user-friends"></i>
          </div>
          <div class="menu-title">Customer Accounts</div>
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
      return this.$route;
    }
  },
  data() {
    return {
      activeClass: "active col-md-6 icon-container text-center"
    };
  }
};
</script>