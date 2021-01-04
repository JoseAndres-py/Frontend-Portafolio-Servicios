<template>
<!-- Start Testimonials -->
<div>
	<section id="mu-testimonials">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-testimonials-area">
							<h2 class="mu-heading-title">Clientes <span>(Testimonios)</span></h2>
							
		<div id="mu-featured-slider-2" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-target="#mu-featured-slider-2"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#mu-featured-slider-2" data-slide-to="1"></li>
          <li data-target="#mu-featured-slider-2" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner" role="listbox">
          <!-- Start Single slide -->
					<div class="item active mu-testimonial-slide slick-track">
						<div class="mu-featured-slider-content">
							<p>"Principalmente en la toma de decisiones, nos podemos anticipar a tomar decisiones cuando tienes la información al día. El nivel de implicación que va más allá de lo que uno espera de un proveedor de servicios. Nos conocen bien y aportan ideas que suelen ser acertadas."</p>
							<h5 class="mu-ct-name"> - Jorge Tovar</h5>
							<span class="mu-ct-title">Director de Tecnologia, Scotiabank Colpatria.</span>
						</div>
					</div>
					<!-- End Single slide -->

					<!-- Start Single slide -->
					<div class="item mu-testimonial-slide">
						<div class="mu-featured-slider-content">
							<p>"Te da las herramientas para poder tomar decisiones por que ves todo, es una radiografía del negocio en términos de horarios, frecuencia de visitas, hábitos de consumo, género de los clientes y te das cuenta de muchas cosas que puedes implementar, cambiar o modificar."</p>
							<h5 class="mu-ct-name"> - Pablo Romo</h5>
							<span class="mu-ct-title">Gerente General, CHAI.</span>
						</div>
					</div>
					<!-- End Single slide -->

					<!-- Start Single slide -->
					<div class="item mu-testimonial-slide">
						<div class="mu-featured-slider-content">
							<p>"La implicación, y sobre todo que cuando hay que acelerar se acelera , un término poco docto pero muy usual en los proyectos de Business Intelligence. En nuestro caso además demostraron un buen conocimiento de Innova Intelligence."</p>
							<h5 class="mu-ct-name"> - Enrique Smith</h5>
							<span class="mu-ct-title">Responsable BI, Zyncro</span>
						</div>
					</div>
					<!-- End Single slide -->
        </div>
      </div>
						</div>
					</div>
				</div>
			</div>
		</section>
</div>
		
		<!-- End Testimonials -->
		
</template>

<script>
export default {
  name: "StartTestimonials",
  components: {
  },
};
</script>

<style scoped>

.carousel-caption{
    position:static;
}
.item{
    height:220px;
    width:100%;
}
.mu-featured-slider-content{
	width:90%; 
	left: 5%; 
	right: 5%;
}
.carousel-indicators{
	padding-left: 0px;
	bottom: -35%;
}
</style>