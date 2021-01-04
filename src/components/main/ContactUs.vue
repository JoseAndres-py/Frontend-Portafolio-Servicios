<template>
	<div id="ContactUs">
		<!-- Start Clients -->
		<section id="mu-clients">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-clients-area">

							<div class="mu-clients-header">
								<h2 class="mu-heading-title">NUESTROS <span>CLIENTES</span></h2>
								<span class="mu-header-dot"></span>
								<p>Entendemos la gestión de los datos como un iceberg. Lo que se ve, los datos que aportan valor a tu negocio, son solo la punta del iceberg. Lo que hay detrás y no se ve es clave. Hemos construido herramientas que permiten activar nuestras soluciones de forma más rápida y eficiente. Condensan nuestra experiencia de años trabajando en clientes</p>
							</div>

							<!-- Start Clients Content -->
							<div class="mu-clients-content">
								<div class="row">

									<!-- Client Single Content -->
									<div class="col-sm-6 col-md-2">
										<div class="mu-clients-content-single">
											<img src="images/clients/orange.png" alt="Orange">
										</div>
									</div>
									<!-- / Client Single Content -->

									<!-- Client Single Content -->
									<div class="col-sm-6 col-md-2">
										<div class="mu-clients-content-single">
											<img src="images/clients/Scotiabank.png" alt="Scotiabank">
										</div>
									</div>
									<!-- / Client Single Content -->

									<!-- Client Single Content -->
									<div class="col-sm-6 col-md-2">
										<div class="mu-clients-content-single">
											<img src="images/clients/Walmart.png" alt="Walmart">
										</div>
									</div>
									<!-- / Client Single Content -->

									<!-- Client Single Content -->
									<div class="col-sm-6 col-md-2">
										<div class="mu-clients-content-single">
											<img src="images/clients/Axpo.png" alt="Axpo">
										</div>
									</div>
									<!-- / Client Single Content -->

									<!-- Client Single Content -->
									<div class="col-sm-6 col-md-2">
										<div class="mu-clients-content-single">
											<img src="images/clients/claro.png" alt="Claro Colombia">
										</div>
									</div>
									<!-- / Client Single Content -->

									<!-- Client Single Content -->
									<div class="col-sm-6 col-md-2">
										<div class="mu-clients-content-single">
											<img src="images/clients/Bankia.png" alt="Bankia">
										</div>
									</div>
									<!-- / Client Single Content -->

								</div>
							</div>
							<!-- End Clients Content -->

						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Clients -->

		<!-- Start Contact -->
		<section id="mu-contact">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-contact-area">

							<div class="mu-contact-header">
								<h2 class="mu-heading-title">CONTACTENOS <span>INNOVA</span></h2>
								<span class="mu-header-dot"></span>
								<p>Nuestra experiencia nos permite entregar soluciones integrales entorno a la inteligencia de negocios y la toma de decisiones, contacte a nuestro equipo de consultores. Agende una demostración gratuita o un workshop con sus usuarios para explorar las capacidades de una solución de Business Intelligence de la mano de especialistas.</p>
							</div>

							<!-- Start Contact Content -->
							<div class="mu-contact-content">
								<div class="row">

									<div class="col-md-8">
										<div class="mu-contact-left">
										<div id="form-messages"></div>
											<form id="ajax-contact" class="mu-contact-form">
												<div class="form-group">                
													<input type="text" class="form-control" placeholder="Nombre" id="name" name="name" required>
												</div>
												<div class="form-group">                
													<input type="email" class="form-control" placeholder="Ingrese Correo Electronico" id="email" name="email" required>
												</div>              
												<div class="form-group">
													<textarea class="form-control" placeholder="Mensaje" id="message" name="message" required></textarea>
												</div>
												<button type="submit" class="mu-send-msg-btn"><span>ENVIAR</span></button>
								            </form>
										</div>
									</div>	

									<div class="col-md-4">
										<div class="mu-contact-right">
											<h4>Innova Intelligence</h4>
											<br>
											<p>Nuestro equipo de consultores con experiencia en las mas importantes
												industrias y tecnologías podrán asesorarlo. Contactenos.
												</p>
											<address>
												<p><i class="icon-location-pin"></i>Calle 56 94 A 20, Bogota, Colombia</p>
												<p><i class="icon-envelope"></i>contacto@innova.com</p>
												<p><i class="icon-phone"></i>+54 313 897 4457</p>
											</address>
											<div class="mu-social-media">
												<a href="#"><i class="icon-social-facebook"></i></a>
												<a href="#"><i class="icon-social-twitter"></i></a>
												<a href="#"><i class="icon-social-google"></i></a>
												<a href="#"><i class="icon-social-linkedin"></i></a>
												<a href="#"><i class="icon-social-youtube"></i></a>
											</div>
										</div>
									</div>	

								</div>
							</div>
							<!-- End Contact Content -->

						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Contact -->

		<!-- Start Google Map -->
		<section id="mu-google-map">
			<iframe src="https://maps.google.com/maps?q=Edificio%20Mirador%20Del%20Cedro&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
		</section>
		<!-- End Google Map -->

	
	<!-- End main content -->	
			</div>
</template>

<script>
export default {
  name: "ContactUs",
  components: {
  },
};
</script>

<style scoped>

.mu-clients-content {
    margin-top: 50px;
}
</style>