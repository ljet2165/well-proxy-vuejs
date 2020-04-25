<template>
  <div>
    <div class="container">
      <navigation></navigation>
    </div>
    <BannerLogin></BannerLogin>
    <main>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-7 col-sm-10 col-10 ml-auto mr-auto">
            <div class="contact-container card">
              <div class="row">
                <div class="col-sm-4 col-6 ml-auto mr-auto">
                  <img :src="image_src" alt="100% Guarantee" class="img-fluid guarantee-image" />
                </div>
              </div>
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <p class="card-heading text-center text-primary mb-2">Member Login</p>
                      <p
                        class="text-center card-description"
                      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <form action="/action_page.php">
                        <div class="input-group mb-3">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                          />
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">
                              <i class="fas fa-envelope"></i>
                            </span>
                          </div>
                        </div>
                        <div class="input-group mb-3">
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                          />
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">
                              <i class="fas fa-lock"></i>
                            </span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-5" style="margin-right: -1rem;">
                            <div class="form-group">
                              <label class="text-muted">
                                <input type="checkbox" class="mr-2" value />Remember Me
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-7 forget-text">
                            <a href="#" class="text-muted pl-4">Forgot your password</a>
                          </div>
                        </div>
                        <button class="btn btn-info btn-block btn-contact">Order Now</button>
                      </form>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-lg-12 text-center text-muted-color">
                      <p>
                        Not a member?
                        <a href="#">Create Account</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="container-fluid pr-0 pl-0">
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import BannerLogin from "./BannerLogin";
import FooterComponent from "./FooterComponent";

export default {
  components: {
    Navigation,
    BannerLogin,
    FooterComponent
  },
  data() {
    return {
      image_src: "/images/resources/login/login-guarantee.png"
    };
  }
};
</script>

<style src="./assets/Login.css" scoped></style>
