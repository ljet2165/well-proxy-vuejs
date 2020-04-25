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
          <CustomerManagementComponent></CustomerManagementComponent>
          <!-- profile data container end -->

          <!-- Status Model -->
          <div class="modal fade" id="statusmodel" role="dialog">
            <div class="modal-dialog">
              <!-- Modal content-->
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title" style="color:var(--blue);text-align:center">PLease Confirm</h4>
                </div>
                <div class="modal-body">
                  <h4>Are You Sure you want to {{user}} acount?</h4>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- main end -->
  </div>
</template>

<script>
import Header from "./Header";
import Sidenav from "./Sidenav";
import CustomerManagementComponent from "./CustomerManagementComponent";

export default {
  components: {
    Header,
    Sidenav,
    CustomerManagementComponent
  },
  data() {
    return {};
  }
};
</script>

<style src="../assets/header-section.css" scoped></style>
