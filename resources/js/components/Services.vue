<template>
  <div>
    <div class="container">
      <navigation></navigation>
    </div>
    <!-- banner start -->
    <BannerServices></BannerServices>
    <!-- banner end -->

    <!-- main start -->
    <main>
      <!-- card section start -->
      <section class="container cards">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6 col-10 ml-auto mr-auto">
            <div class="contact-container card card-1">
              <div class="row">
                <div class="col-sm-4 col-6 ml-auto mr-auto">
                  <img
                    :src="image_instant_src"
                    :alt="image_instant_alt"
                    class="img-fluid card-image"
                  />
                </div>
              </div>
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <p
                        class="card-heading text-center text-primary mb-2"
                        v-html="image_instant_alt"
                      ></p>
                      <p
                        class="text-center card-description"
                      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6 col-10 ml-auto mr-auto">
            <div class="contact-container card card-2">
              <div class="row">
                <div class="col-sm-4 col-6 ml-auto mr-auto">
                  <img :src="image_fast_src" :alt="image_fast_alt" class="img-fluid card-image" />
                </div>
              </div>
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <p class="card-heading text-center text-primary mb-2" v-html="image_fast_alt"></p>
                      <p
                        class="text-center card-description"
                      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6 col-10 ml-auto mr-auto">
            <div class="contact-container card card-3">
              <div class="row">
                <div class="col-sm-4 col-6 ml-auto mr-auto">
                  <img
                    :src="image_dedicated_src"
                    :alt="image_dedicated_alt"
                    class="img-fluid card-image"
                  />
                </div>
              </div>
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <p
                        class="card-heading text-center text-primary mb-2"
                        v-html="image_dedicated_alt"
                      ></p>
                      <p
                        class="text-center card-description"
                      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- card section end -->

      <!-- section-2 start -->
      <section class="container-fluid mt-5">
        <div class="row mb-5">
          <div class="col-md-4 custom-offset-md-1">
            <div class="row">
              <div class="col-lg-12">
                <h2 class="secondary-heading" v-html="image_4g_alt"></h2>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-lg-6">
                <p
                  class="detail-text"
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div class="col-lg-6">
                <p
                  class="detail-text"
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <p
                  class="detail-text"
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div class="col-lg-6">
                <p
                  class="detail-text"
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img :src="image_4g" :alt="image_4g_alt" class="img-fluid img-4g" />
          </div>
        </div>
      </section>
      <!-- section-2 end -->

      <!-- services section start -->
      <section class="container-fluid services-section">
        <div class="row">
          <div class="col-lg-1 arrows">
            <div class="arrow arrow-left">
              <i class="fas fa-angle-left"></i>
            </div>
            <div class="arrow arrow-right">
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
          <div class="col-lg-3">
            <img :src="image_services_src" :alt="image_services_alt" />
          </div>
          <div class="col-lg-8 services-detail">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="service-name">
                    <img
                      :src="image_service_rotation_src"
                      :alt="image_service_rotation_alt"
                      class="img-fluid service-icon"
                    />
                    <h3 class="service-heading" v-html="image_service_rotation_alt"></h3>
                  </div>
                  <p
                    class="service-desc text-muted-color"
                  >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="service-name">
                    <img
                      :src="image_service_unlimited_src"
                      :alt="image_service_unlimited_alt"
                      class="img-fluid service-icon"
                    />
                    <h3 class="service-heading" v-html="image_service_unlimited_alt"></h3>
                  </div>
                  <p
                    class="service-desc text-muted-color"
                  >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="service-name">
                    <img
                      :src="image_service_multiple_src"
                      :alt="image_service_multiple_alt"
                      class="img-fluid service-icon"
                    />
                    <h3
                      class="service-heading"
                      v-html="image_service_multiple_alt"
                    >Multiple Locations</h3>
                  </div>
                  <p
                    class="service-desc text-muted-color"
                  >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="service-name">
                    <img
                      :src="image_service_easy_src"
                      :alt="image_service_easy_alt"
                      class="img-fluid service-icon"
                    />
                    <h3 class="service-heading" v-html="image_service_easy_alt"></h3>
                  </div>
                  <p
                    class="service-desc text-muted-color"
                  >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="service-name">
                    <img
                      :src="image_service_support_src"
                      :alt="image_service_support_alt"
                      class="img-fluid service-icon"
                    />
                    <h3 class="service-heading" v-html="image_service_support_alt"></h3>
                  </div>
                  <p
                    class="service-desc text-muted-color"
                  >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="service-name">
                    <img
                      :src="image_service_guarantee_src"
                      :alt="image_service_guarantee_alt"
                      class="img-fluid service-icon"
                    />
                    <h3 class="service-heading" v-html="image_service_guarantee_alt"></h3>
                  </div>
                  <p
                    class="service-desc text-muted-color"
                  >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
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
import BannerServices from "./BannerServices";
import AboutUsSection from "./AboutUsSection";
import CustomerQuotes from "./CustomerQuotes";
import FooterComponent from "./FooterComponent";

export default {
  components: {
    Navigation,
    BannerServices,
    AboutUsSection,
    CustomerQuotes,
    FooterComponent
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      image_instant_src: "/images/resources/services/instant-delivery.png",
      image_instant_alt: "Instant Delivery",

      image_fast_src: "/images/resources/services/fast-proxies.png",
      image_fast_alt: "Fast Proxies",

      image_dedicated_src:
        "/images/resources/services/dedicated-client-area.png",
      image_dedicated_alt: "Dedicated Client Area",

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
};
</script>

<style src="./assets/Services.css" scoped></style>
