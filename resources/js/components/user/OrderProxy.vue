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
          <OrderProxyComponent></OrderProxyComponent>
          <!-- profile data container end -->
        </div>
      </div>
    </main>
    <!-- main end -->
  </div>
</template>

<script>
import Header from "./Header";
import Sidenav from "./Sidenav";
import OrderProxyComponent from "./OrderProxyComponent";

export default {
  components: {
    Header,
    Sidenav,
    OrderProxyComponent
  },
  data() {
    return {};
  }
};
</script>

<style src="../assets/header-section.css" scoped></style>
