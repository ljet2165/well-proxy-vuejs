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

<style scoped>
.about-section {
  background-image: url('/images/resources/home-page/about-us-background.png');
  background-color: transparent;
  background-size: 100% 100%;
  /* box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1); */
  margin: 1rem 0;
  padding: 10rem 5rem;
  padding-bottom: 15rem;
  position: relative;
  /* margin-bottom: 5rem; */
}
.absolute-bg {
  position: absolute;
  top: 0;
  left: 0;
}
.absolute-bg img {
  width: 100%;
}
.about-section .secondary-heading {
  color: var(--secondary-text-color);
  margin-bottom: 0.1rem;
}
.text-muted {
  font-size: 12px;
  color: #a9a9a9;
}
.text-muted-color {
  color: #a9a9a9;
  font-size: 1rem;
}
.primary-heading {
  color: var(--blue);
  font-weight: 800;
  font-size: 3rem;
}
.about-section .primary-heading .b-bottom {
  border-bottom: 0.2rem solid var(--secondary-text-color);
  width: 4rem;
  /* height: 100px; */
  display: block;
}
.about-section .benefit-section {
  border: 0.2rem dashed #5793ce;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 9rem;
  background: #d4ecff;
  color: var(--seconday-color);
  font-size: 1.5rem;
  margin-top: 3rem;
}
.about-section .benefit-section .benefit-detail {
  margin-bottom: 0;
}
</style>

<script>
export default {
  data() {
    return {
      about_us_bg: "/images/resources/home-page/about-us-background.png"
    };
  }
};
</script>