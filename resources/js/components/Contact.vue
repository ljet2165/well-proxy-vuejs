<template>
  <div>
    <div class="container">
      <navigation></navigation>
    </div>
    <banner></banner>
    <main class="contact-main">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 offset-sm-1">
            <div class="row">
              <div class="col-lg-12">
                <div class="d-flex contact-info">
                  <div class="icon bg-info text-white mr-3">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="desc">
                    <div class="property">Email</div>
                    <div class="value">support@wellproxy.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="d-flex contact-info">
                  <div class="icon bg-info text-white mr-3">
                    <i class="fas fa-phone fa-flip-horizontal"></i>
                  </div>
                  <div class="desc">
                    <div class="property">Call us</div>
                    <div class="value">+9231549874</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="d-flex contact-info">
                  <div class="icon bg-info text-white mr-3">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="desc">
                    <div class="property">Address</div>
                    <div class="value">62, Bahria Orcahrd, Lahore</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-5">
            <div class="contact-container card">
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12 pb-0">
                      <strong class="float-right text-primary mb-2">Send Message</strong>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 pt-0">
                      <form>
                        <div class="form-group">
                          <input type="text" class="form-control" name="name" placeholder="Name" />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                        <div class="form-group">
                          <textarea class="form-control" rows="6" placeholder="Message"></textarea>
                        </div>
                        <button type="button" class="btn btn-info btn-block btn-contact">Send Now</button>
                      </form>
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
.contact-info {
  margin-bottom: 1rem;
}
.contact-info .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 53px;
  border-radius: 0.3rem;
  font-size: 1.4rem;
}
.contact-info .desc .property {
  font-size: 1.1rem;
  font-weight: 700;
}
.contact-info .desc .value {
  font-weight: 400;
  color: #a9a9a9 !important;
}
.contact-container {
  padding: 0.2rem 3rem;
  border-radius: 1.25rem;
  /* position: absolute; */
  width: 100%;
  box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1);
  z-index: 9999;
  margin-top: -18rem;
}
.btn-contact {
  border-bottom: 0.3rem solid var(--blue);
  padding: 0.75rem 0.95rem;
}
.form-control:focus {
  border-color: transparent;
  box-shadow: 0 0 0 0.1rem var(--blue);
}
</style>

<script>
import Navigation from "./Navigation";
import Banner from "./Banner";
import FooterComponent from "./FooterComponent";

export default {
  components: {
    Navigation,
    Banner,
    FooterComponent
  }
};
</script>
