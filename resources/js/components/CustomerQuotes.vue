<template>
  <!-- Customer quotes section start -->
  <section class="container-fluid customer-quotes-section">
    <div class="container mb-4">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1 class="primary-heading">Who Our Customer Say</h1>
          <h1
            class="primary-description text-muted-color"
          >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
        </div>
      </div>
    </div>

    <div class="row quotes-row">
      <div class="col-lg-3" style="margin-left: -4rem">
        <div class="quotes-slider left">
          <div class="customer-thumbnail">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt class="img-fluid" />
          </div>
          <div
            class="customer-quote"
          >Wall Proxy is an amazing Proxies has helped us get immediately organized with our needs. What I love about it is the ease of use.</div>
          <div class="break-column"></div>
          <div class="customer-name">Rebecca Mayer, Miann & Co</div>
        </div>
      </div>
      <div class="col-lg-6" style="margin-left: 4rem">
        <div class="quotes-slider">
          <div class="customer-thumbnail">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt class="img-fluid" />
          </div>
          <div
            class="customer-quote"
          >Wall Proxy is an amazing Proxies has helped us get immediately organized with our needs. What I love about it is the ease of use.</div>
          <div class="break-column"></div>
          <div class="customer-name">Rebecca Mayer, Miann & Co</div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="quotes-slider right">
          <div class="customer-thumbnail">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt class="img-fluid" />
          </div>
          <div
            class="customer-quote"
          >Wall Proxy is an amazing Proxies has helped us get immediately organized with our needs. What I love about it is the ease of use.</div>
          <div class="break-column"></div>
          <div class="customer-name">Rebecca Mayer, Miann & Co</div>
        </div>
      </div>
    </div>
  </section>
  <!-- Customer quotes section end -->
</template>

<style scoped>
.primary-heading {
  color: var(--blue);
  font-weight: 800;
  font-size: 3rem;
}
.quotes-row {
  overflow: visible;
}

.customer-quotes-section .primary-heading {
  font-size: 2.5rem;
}
.text-muted-color {
  color: #a9a9a9;
  font-size: 1rem;
}
.quotes-slider {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
}
.quotes-slider .customer-quote {
  background: url("/images/resources/home-page/testimonials-backgrond.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  padding: 5rem 9rem;
  color: var(--blue);
  font-size: 1rem;
}

.customer-thumbnail {
  position: absolute;
  top: 6rem;
  left: -5rem;
}
.customer-thumbnail img {
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  height: 12rem;
}
.customer-name {
  margin-left: 9rem;
}

.quotes-slider.left,
.quotes-slider.right {
  margin-top: 4rem;
}

.quotes-slider.left .customer-quote,
.quotes-slider.right .customer-quote {
  background: url("/images/resources/home-page/testimonials-backgrond_sm.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  padding: 3rem 5rem;
  color: var(--blue);
  font-size: 0.6rem;
}

.quotes-slider.left .customer-thumbnail,
.quotes-slider.right .customer-thumbnail {
  left: -3rem;
}
.quotes-slider.left .customer-thumbnail img,
.quotes-slider.right .customer-thumbnail img {
  height: 6rem;
}

.quotes-slider.left .customer-name,
.quotes-slider.right .customer-name {
  margin-left: 5.5rem;
}
.break-column {
  flex-basis: 100%;
  width: 0;
}
</style>

<script>
export default {};
</script>