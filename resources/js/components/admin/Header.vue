<template>
  <div class="header">
    <div class="container-fluid pl-0 pr-0">
      <!-- navbar start -->
      <nav class="navbar navbar-expand-lg navbar-light pl-5 pr-5">
        <a class="navbar-brand text-white" href="#">
          <span style="color: var(--secondary-text-color);">Well</span> Proxies
        </a>
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
          <ul class="navbar-nav profileNav ml-auto mr-4">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="profileDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-cogs"></i>
              </a>
              <div class="dropdown-menu" aria-labelledby="profileDropdown">
                <a class="dropdown-item" href="#" v-b-modal.bv-modal-example>Change Password</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="nav-link">
                <i class="fas fa-sign-out-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- navbar end -->
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 offset-lg-3">
          <h1 class="page-heading text-white" v-html="page_title"></h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2 col-md-4 col-sm-12 ml-5">
          <figure class="user-profile-avatar">
            <div class="img-circle d-inline-block">
              <img :src="user_avatar" :alt="user_avatar_alt" class="img-fluid rounded-circle" />
            </div>
            <figcaption>
              <span class="user-name">Ahmad Fraz</span>
              <span class="user-email">ahmadmti@gmail.com</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <ChangePassword></ChangePassword>
  </div>
</template>



<script>
import ChangePassword from "./ChangePassword";

export default {
  components: {
    ChangePassword
  },
  mounted() {
    // console.log(this.$route.meta);
  },
  data() {
    return {
      user_avatar: "/images/resources/user/users-vector.jpg",
      user_avatar_alt: "User Avatar",

      page_title: this.$route.meta.title ? this.$route.meta.title : "Dashboard"
    };
  }
};
</script>

<style src="../assets/Header.css" scoped></style>
