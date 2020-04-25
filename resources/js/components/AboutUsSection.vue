<template>
  <!-- about section start -->
  <section class="container-fluid about-section">
    <!-- <div class="absolute-bg">
      <img :src="about_us_bg" alt />
    </div> -->
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <h2 class="secondary-heading">About Us</h2>
          <h1 class="primary-heading">
            Who We
            <span>
              Are
              <span class="b-bottom"></span>
            </span>
          </h1>
        </div>
        <div class="col-lg-8 offset-lg-1 pt-5">
          <p
            class="about-detail text-muted-color"
          >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 benefit-section">
          <p
            class="benfit-detail text-center"
          >"When you buy our proxies, you can be sure that all of our proxies are exclusive, white listedand have no limits"</p>
        </div>
      </div>
    </div>
  </section>
  <!-- about section end -->
</template>

<script>
export default {
  data() {
    return {
      about_us_bg: "/images/resources/home-page/about-us-background.png"
    };
  }
};
</script>

<style src="./assets/About.css" scoped></style>