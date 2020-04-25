<template>
  <!-- sidenav start -->
  <div class="col-md-3 side-nav-bg">
    <div class="sidenav">
      <div class="row ml-auto mr-auto p-4">
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
  </div>
  <!-- sidenav end -->
</template>

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

<style src="../assets/Sidenav.css" scoped></style>
