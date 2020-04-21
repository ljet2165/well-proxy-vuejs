<template>
  <div>
    <section class="container-fluid header-section pl-0 pr-0">
      <!-- navigation start -->
      <div class="container home">
        <navigation></navigation>
      </div>
      <!-- navigation end -->
      <!-- banner start -->
      <BannerHome></BannerHome>
      <!-- banner end -->
    </section>

    <!-- main start -->
    <main>
      <!-- card section start -->
      <section class="container cards">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 col-10 ml-auto mr-auto">
            <div class="contact-container card-1">
              <div class="row">
                <div class="col-lg-12 card-feature-image">
                  <img
                    :src="image_authentication_src"
                    :alt="image_authentication_alt"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <p
                        class="card-heading text-center text-primary mb-2"
                        v-html="image_authentication_alt"
                      ></p>
                      <p
                        class="text-center card-description"
                      >Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 col-10 ml-auto mr-auto">
            <div class="contact-container card-2">
              <div class="row">
                <div class="col-lg-12 card-feature-image">
                  <img :src="image_mobile_src" :alt="image_mobile_alt" class="img-fluid" />
                </div>
              </div>
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <p
                        class="card-heading text-center text-primary mb-2"
                        v-html="image_mobile_alt"
                      ></p>
                      <p
                        class="text-center card-description"
                      >Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 col-10 ml-auto mr-auto">
            <div class="contact-container card-3">
              <div class="row">
                <div class="col-lg-12 card-feature-image">
                  <img :src="image_high_conn_src" :alt="image_high_conn_alt" class="img-fluid" />
                </div>
              </div>
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <p
                        class="card-heading text-center text-primary mb-2"
                        v-html="image_high_conn_alt"
                      ></p>
                      <p
                        class="text-center card-description"
                      >Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 col-10 ml-auto mr-auto">
            <div class="contact-container card-4">
              <div class="row">
                <div class="col-lg-12 card-feature-image">
                  <img :src="image_anonymouse_src" :alt="image_anonymouse_alt" class="img-fluid" />
                </div>
              </div>
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <p
                        class="card-heading text-center text-primary mb-2"
                        v-html="image_anonymouse_alt"
                      ></p>
                      <p
                        class="text-center card-description"
                      >Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- card section end -->

      <!-- Advantages section-2 start -->
      <section class="container-fluid advantages-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-lg-6">
                  <div class="advantage-detail-head">
                    <span class="head-white-box"></span>
                    <h2 class="secondary-heading">Instant Activation</h2>
                  </div>
                  <p
                    class="detail-text"
                  >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="col-lg-6">
                  <div class="advantage-detail-head">
                    <span class="head-white-box"></span>
                    <h2 class="secondary-heading">Unlimited Bandwidth</h2>
                  </div>
                  <p
                    class="detail-text"
                  >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="advantage-detail-head">
                    <span class="head-white-box"></span>
                    <h2 class="secondary-heading">Money Back Guarantee</h2>
                  </div>
                  <p
                    class="detail-text"
                  >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="col-lg-6">
                  <div class="advantage-detail-head">
                    <span class="head-white-box"></span>
                    <h2 class="secondary-heading">24/7 Heroic Support</h2>
                  </div>
                  <p
                    class="detail-text"
                  >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 advantage-detail-section">
              <div class="row">
                <div class="col-lg-12">
                  <h2 class="secondary-advantage-heading secondary-text">Why Choose US</h2>
                  <h1 class="primary-heading">
                    Well Proxy
                    <span class="primary-advantage-small">Advantages</span>
                  </h1>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <p
                    class="advantages-detail text-muted"
                  >Our datacenters are spread across the globe and we're constantly refreshing our lists to ensure a rich set of countries and locations that you can chose from.</p>
                </div>
                <div class="col-lg-6">
                  <p
                    class="advantages-detail text-muted"
                  >Our datacenters are spread across the globe and we're constantly refreshing our lists to ensure a rich set of countries and locations that you can chose from.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Advantages section-2 end -->

      <!-- services section start -->
      <section class="container-fluid services-section mt-5 mb-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h1 class="primary-heading">Buy Anonymous IP and 4G Proxies</h1>
              <p
                class="text-muted-color"
              >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <span class="proxy-secondary-border"></span>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-lg-12 text-center">
              <div class="order-now-heading">
                <p class="ip-heading">IP</p>
                <p class="heading-4g">4G</p>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-4 ml-auto">
              <select
                name="ipv"
                id="ipv"
                class="form-control select2"
                data-placeholder="IPv4 or IPv6 ?"
              >
                <option value selected disabled>IPv4 or IPv6 ?</option>
                <option value="IPv4">IPv4</option>
                <option value="IPv6">IPv6</option>
              </select>
            </div>
            <div class="col-md-4 mr-auto">
              <select
                name="country"
                id="country"
                class="form-control select2"
                data-placeholder="Choose Country"
              >
                <option value selected disabled>Choose Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
                <option value="USA">USA</option>
                <option value="India">India</option>
              </select>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-4 ml-auto">
              <select
                name="rental_period"
                id="rental_period"
                class="form-control select2"
                data-placeholder="Choose Rental Period"
              >
                <option value selected disabled>Choose Rental Period</option>
                <option value="1 Month">1 Month</option>
                <option value="1 Year">1 Year</option>
              </select>
            </div>
            <div class="col-md-4 mr-auto">
              <select
                name="proxy_qty"
                id="proxy_qty"
                class="form-control select2"
                data-placeholder="Enter Quantity of Proxies"
              >
                <option value selected disabled>Enter Quantity of Proxies</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-4 ml-auto mr-auto">
              <button class="btn btn-info btn-block btn-contact">Order Now</button>
            </div>
          </div>
        </div>
      </section>
      <!-- services section end -->

      <!-- about section start -->
      <AboutUsSection></AboutUsSection>
      <!-- about section end -->

      <!-- Customer quotes section start -->
      <CustomerQuotes></CustomerQuotes>
      <!-- Customer quotes section end -->
    </main>
    <!-- main end -->
    <!-- footer start -->
    <div class="container-fluid pr-0 pl-0">
      <FooterComponent></FooterComponent>
    </div>
    <!-- footer end -->
  </div>
</template>

<style scoped>
.header-section {
  background: url(/images/resources/home-page/banner-image.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center top;
  min-height: 72rem;
}
>>>.home .header .navbar.navbar-light {
  background: transparent !important;
}
>>>.home .header .navbar.navbar-light .navbar-brand,
>>>.home .navbar.navbar-light .navbar-nav .nav-link {
  color: #fff !important;
}
>>>.home .header .router-link-active.router-link-exact-active:not(.btn) {
  border-bottom: 0.1rem solid #fff;
}
>>>.home .btn-outline-primary {
  color: #fff;
  border-color: #fff;
}
>>>.home .btn-primary {
  color: var(--blue);
  background-color: #fff;
  border-color: #fff;
}
.contact-container {
  padding: 1rem 1.5rem;
  padding-top: 0.8rem;
  border-radius: 1.25rem;
  position: relative;
  width: 100%;
  /* box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1); */
  z-index: 9999;
  margin-top: -2rem;
  /* background-color: #fafafa; */
  /* border-bottom: 0.3rem solid var(--cyan); */
}

.advantages-section {
  background: url(/images/resources/home-page/Advantages-background.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center top;
  padding: 8rem 5rem;
}

.advantage-detail-section {
  background: #fff;
  padding: 4rem 3rem;
  box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1);
}

.advantage-detail-head {
  display: flex;
  align-items: flex-end;
}

.advantage-detail-head .head-white-box {
  height: 5rem;
  width: 35%;
  background: white;
  margin-right: 1rem;
}

.order-now-heading {
  width: 70%;
  height: 100%;
  background: #fafafa;
  margin-left: auto;
  margin-right: auto;
}
.order-now-heading p {
  width: 50%;
  margin-bottom: 0;
  float: left;
  font-size: 2rem;
  font-weight: 600;
  padding: 0.5rem 1.8rem;
}
.order-now-heading .ip-heading {
  border: 0.1rem solid var(--blue);
  border-right: none;
  color: var(--blue);
  text-align: right;
}
.order-now-heading .heading-4g {
  color: var(--primary-text-color);
  text-align: left;
}

.secondary-heading {
  flex: 1;
  color: var(--blue);
  font-weight: 500;
  font-size: 1.4rem;
}
.text-muted-color {
  color: #a9a9a9;
  font-size: 1rem;
}
.text-muted {
  font-size: 12px;
}
.card-1 {
  margin-top: -6rem;
}
.card-2 {
  margin-top: -8rem;
}
.card-3 {
  margin-left: -2rem;
  margin-top: -6rem;
}
.card-4 {
  margin-top: -10rem;
  margin-left: -3rem;
}

.card-heading {
  font-size: 1.2rem;
  font-weight: 600;
}
.card-feature-image {
  background: url("/images/resources/home-page/feature-background.png");
  height: 12rem;
  background-position: top;
  background-size: cover;
  text-align: center;
  transition: all 0.3s;
}
.card-feature-image .img-fluid {
  padding: 3rem 4.5rem;
}
.card-feature-image:hover {
  background: url("/images/resources/home-page/feature-hover.png");
  background-position: top;
  background-size: cover;
}
.card-description {
  font-size: 0.8rem;
  margin-left: -1rem;
  margin-right: -1rem;
  color: #a9a9a9;
}
.services-section .primary-heading {
  font-size: 2.5rem;
  font-weight: 600;
}
.services-section .text-muted-color {
  font-size: 1.5rem;
}
.services-section .proxy-secondary-border {
  display: block;
  border-bottom: 2px solid var(--secondary-text-color);
  width: 20%;
  margin-left: auto;
  margin-right: auto;
}
.services-detail {
  margin-top: 8rem;
}
.service-name {
  display: flex;
  align-items: center;
  min-height: 50%;
}
.service-name .service-icon {
  max-width: 45px;
}
.service-name h3.service-heading {
  color: var(--blue);
  margin-left: 1rem;
}
.service-desc {
  font-size: 0.9rem;
}

.detail-text {
  font-size: 0.8rem;
  color: var(--primary-text-color);
}
.img-4g {
  margin-top: 3rem;
}

.primary-heading {
  color: var(--blue);
  font-weight: 800;
  font-size: 3rem;
}
.primary-heading .primary-advantage-small {
  font-size: 2rem;
  font-weight: 400;
  color: var(--seconday-color);
}

.customer-quotes-section .primary-heading {
  font-size: 2.5rem;
}

.forget-text a {
  border-left: 1px solid #a9a9a9;
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
@media (min-width: 768px) {
  .custom-offset-md-1 {
    margin-left: 13.333333%;
  }
}
@media only screen and (max-width: 768px) {
  .card-3 {
    margin-top: 1rem;
  }
}

@media only screen and (max-width: 576px) {
  .card {
    margin-top: 1rem;
  }
}
</style>

<script>
import Navigation from "./Navigation";
import BannerHome from "./BannerHome";
import AboutUsSection from "./AboutUsSection";
import CustomerQuotes from "./CustomerQuotes";
import FooterComponent from "./FooterComponent";

export default {
  components: {
    Navigation,
    BannerHome,
    AboutUsSection,
    CustomerQuotes,
    FooterComponent
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      image_authentication_src:
        "/images/resources/home-page/authentication.png",
      image_authentication_alt: "Authentication",

      image_mobile_src: "/images/resources/home-page/mobile-proxies.png",
      image_mobile_alt: "Mobile Proxies",

      image_high_conn_src: "/images/resources/home-page/High-Connections.png",
      image_high_conn_alt: "High Connections",

      image_anonymouse_src: "/images/resources/home-page/Anonymous.png",
      image_anonymouse_alt: "Fully Anonymouse",

      image_4g: "/images/resources/services/image_4G.png",
      image_4g_alt: "Access more than 2+ million unique IP & 4g Proxies",

      image_services_src: "/images/resources/services/img_services.png",
      image_services_alt: "Access more than 2+ million unique IP & 4g Proxies",

      image_service_rotation_src: "/images/resources/services/rotation.png",
      image_service_rotation_alt: "Rotation Proxies",

      image_service_unlimited_src:
        "/images/resources/services/unlimited-proxies.png",
      image_service_unlimited_alt: "Unlimited Proxies",

      image_service_multiple_src:
        "/images/resources/services/multiple-locations.png",
      image_service_multiple_alt: "Multiple Locations",

      image_service_easy_src: "/images/resources/services/easy-setup.png",
      image_service_easy_alt: "Easy Setup",

      image_service_support_src: "/images/resources/services/24-support.png",
      image_service_support_alt: "24/7 Heroic Support",

      image_service_guarantee_src: "/images/resources/services/money-back.png",
      image_service_guarantee_alt: "Money Back Guarantee"
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
