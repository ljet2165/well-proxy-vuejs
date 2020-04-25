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

    <section class="center slider">
      <div>
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
      <div>
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
      <div>
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
      <div>
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
      <div>
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
      <div>
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
      <div>
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
    </section>
  </section>
  <!-- Customer quotes section end -->
</template>

<script>
export default {
  mounted() {
    $(".center").slick({
      dots: true,
      arrows: true,
      cssEase: "linear",
      infinite: true,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000
      //   prevArrow: '<i class="fas fa-chevron-left"></i>',
      // nextArrow: '<i class="fas fa-chevron-right"></i>',
    });
  }
};
</script>

<style src="./assets/CustomerQuotes.css" scoped></style>