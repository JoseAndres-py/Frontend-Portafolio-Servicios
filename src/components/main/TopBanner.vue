<template>
  <div>
    <top-menu></top-menu>
    <!-- Start Featured Slider -->
      <div id="mu-featured-slider" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-target="#mu-featured-slider"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#mu-featured-slider" data-slide-to="1"></li>
          <li data-target="#mu-featured-slider" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner" role="listbox">
          <!-- Start Single slide -->
					<div class="item active mu-featured-slider-single">
						<img src="assets/images/slider-img-1.jpg">
						<div class="mu-featured-slider-content">
							<h1>BIENVENIDO A INNOVA</h1>
							<p>Nuestros expertos de Business Analytics proporcionan al usuario las herramientas que ayudan a aprovechar los datos empresariales para tomar mejores decisiones de negocio.</p>
							<a href="#mu-about" class="mu-primary-btn">NOSOTROS</a>
						</div>
					</div>
					<!-- End Single slide -->

					<!-- Start Single slide -->
					<div class="item mu-featured-slider-single">
						<img src="assets/images/slider-img-3.jpg">
						<div class="mu-featured-slider-content">
							<h1>BUSINESS INTELLIGENCE</h1>
							<p>Las herramientas y la tecnología de BI le brindan la capacidad de recolectar, organizar y analizar rápidamente sus datos. A partir de ahí, puede infundir las percepciones obtenidas de nuevo en su negocio y mejorar drásticamente sus resultados.</p>
							<a href="#mu-service" class="mu-primary-btn">SERVICIOS</a>
						</div>
					</div>
					<!-- End Single slide -->

					<!-- Start Single slide -->
					<div class="item mu-featured-slider-single">
						<img src="assets/images/slider-img-4.jpg">
						<div class="mu-featured-slider-content">
							<h1>ANALÍTICA DE NEGOCIO</h1>
							<p>Business Analytics ayuda a las organizaciones pequeñas y grandes a maximizar el valor de sus datos, descubrir insights, construir planes y responder en tiempo real a la demanda de los clientes.</p>
							<a href="#mu-contact" class="mu-primary-btn">CONTACTENOS</a>
						</div>
					</div>
					<!-- End Single slide -->
        </div>
        <a
          class="carousel-control"
          href="#mu-featured-slider"
          role="button"
          data-slide="prev"
        >
          <span
            class="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control"
          style="right: 0; left: auto;"
          href="#mu-featured-slider"
          role="button"
          data-slide="next"
        >
          <span
            class="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
  </div>
</template>

<script>
import TopMenu from "./TopMenu.vue";
export default {
  name: "TopBanner",
  components: {
    TopMenu,
  },
};
</script>

<style scoped>

.carousel-indicators{
	padding-left: 0px;
}
</style>