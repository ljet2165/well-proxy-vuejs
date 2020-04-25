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

<script>
import Navigation from "./Navigation";
import BannerHome from "./BannerHome";
import AboutUsSection from "./AboutUsSection";
import CustomerQuotes from "./CustomerQuotes";
import FooterComponent from "./FooterComponent";
import Slick from "vue-slick";
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


<style src="./assets/Home.css" scoped></style>