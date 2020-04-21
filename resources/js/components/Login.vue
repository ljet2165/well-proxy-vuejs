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
                      <p>Not a member? <a href="#">Create Account</a></p>
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

<style scoped>
.contact-container {
  padding: 2.2rem 3rem;
  border-radius: 1.25rem;
  position: relative;
  width: 100%;
  box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1);
  z-index: 9999;
  margin-top: -14rem;
  background-color: #fff;
  border-bottom: 0.3rem solid var(--cyan);
}
.card-heading {
  font-size: 1.2rem;
  font-weight: 600;
}
.card-description {
  font-size: 0.8rem;
  margin-left: -3rem;
  margin-right: -3rem;
  color: #a9a9a9;
}
.guarantee-image {
  margin-top: -5rem;
}
.forget-text a {
  border-left: 1px solid #a9a9a9;
}
.text-muted-color {
  color: #a9a9a9;
  font-size: 1rem;
}
.text-muted {
  font-size: 12px;
}
.input-group {
  flex-direction: row-reverse;
}
.input-group input {
  border-left: none;
  padding: 1.5rem 0.75rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group-text {
  background: transparent;
  color: var(--blue);
  font-size: 1.3rem;
}
.input-group-text i {
  border-right: 1px solid var(--blue);
  padding-right: 1rem;
}
input[type="checkbox"] {
  width: 0.8rem;
}
.btn-contact {
  border-bottom: 0.3rem solid var(--blue);
  padding: 0.75rem 0.95rem;
}
.form-control:focus {
  border-color: transparent;
  box-shadow: none;
  border: 2px solid var(--blue);
  border-left: none;
}
.form-control:focus + .input-group-prepend .input-group-text {
  border: 2px solid var(--blue);
  border-right: none;
}
</style>

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
