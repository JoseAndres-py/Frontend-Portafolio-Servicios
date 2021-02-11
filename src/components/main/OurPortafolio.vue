<template>
<!-- Start Portfolio -->
		<section id="mu-portfolio">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-portfolio-area">

							<div class="mu-portfolio-header">
								<h2 class="mu-heading-title">NUESTRO <span>PORTFOLIO</span></h2>
								<span class="mu-header-dot"></span>
								<p>Apartir de los indicadores se realizan
								estrategias enfocadas en los puntos más vulnerables de una empresa, sin embargo, el
								principal problema de muchas compañías es no saber analizar correctamente esta
								información y debido a eso, no tomar las decisiones indicadas para el mejoramiento de la
								misma. A raíz de esa problemática, ha ido surgiendo en la industria algo conocido como
								Business Intelligence (BI), que no es más que la habilidad para transformar los datos,
								brindados por los estudios de indicadores, en información, y la información en conocimiento.
								</p>
							</div>

							<!-- Start Portfolio Filter -->
							<div class="mu-portfolio-filter-area">
								<ul class="mu-simplefilter">
					                <li class="active"  :data-filter="categoria.id" v-for="categoria in categorias" :key="categoria.id">{{categoria.nombre}}</li>
					            </ul>
							</div>
							<!-- End Portfolio Filter -->

							<!-- Start Portfolio Content -->
							<div class="mu-portfolio-content">
								<div class="filtr-container">

					                <div class="col-xs-6 col-sm-4 col-md-4 filtr-item" :data-category="servicio.categoriaId"  v-for="servicio in servicios" :key="servicio.id">
					                   <a class="mu-imglink" title="Web Development">
						                   	<img class="img-responsive" :src="servicio.imgPath" alt="image">
						                   	<div class="mu-filter-item-content">
						                    	<h4 class="mu-filter-item-title">{{servicio.nombre}}</h4>
												<br>
												<p>{{servicio.descripcion}}</p>
						                    </div>
					                   </a>
					                </div>

					            </div>
							</div>
							<!-- End Portfolio Content -->

						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Portfolio -->
</template>

<script>



export default {
  name: "OurPortafolio",
  components: {
  },
  data: () => ({
    categorias: [],
    servicios: []
  }),
  created() {
    this.listCategories();
    this.listServices();
  },
  methods: {
    listCategories() {
      axios
        .get("/api/categoria/list")
        .then((response) => {
          this.categorias = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
	},
	
    listServices() {
      axios
        .get("/api/articulo/list")
        .then((response) => {
          this.servicios = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
	},
  }
};
</script>

<style scoped>
</style>