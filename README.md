# Vuetify

Este proyecto consta de una parte de investigación en donde se hace una suposición son una organización dedicada a una temática relacionado con el reto e identificar los productos o servicios que solucionan el problema planteado, esta tarea inicial de investigación puede ser consignada en diferentes documentos o anexos. Cada equipo debe encontrar un mínimo de 3 soluciones que se convertirán en los servicios, productos o herramientas que ofrecen a través de su portafolio de servicios.


<p align="center">
  <img src="https://iili.io/KSSeA7.png" width="700"/>
</p>

### Pagina Bienvenida Usuario

Al iniciar sesion correctamente, se redirije a una pagina de bienvenida, donde se muetsra el nombre, email, fecha de registro del usuario.

<p align="center">
  <img src="https://iili.io/KSS4Kx.png" width="700"/>
</p>

## Portafolio de servicios

Se genra un sitio web público (landing page) en donde se deben encontrar una sección superior con un menú, el menú debe contar con enlaces a las demás secciones del sitio (o páginas si han elegido crear este recurso) y contar con un botón de login. La sección superior también debe contar con un banner (con al menos 3 imágenes que cambien tipo carrusel) de temática acorde al tipo de soluciones que se ofrezca.

<p align="center">
  <img src="https://iili.io/KSSyKv.png" width="700"/>
</p>

Una sección siguiente donde, de acuerdo a la información de su reto, describan de manera general en qué sector y que tipo de soluciones ofrecen como empresa, un texto corto, infografía o imagen donde expresen el porqué las soluciones que ustedes ofrecen son de alta calidad.


<p align="center">
  <img src="https://iili.io/KSUFDX.png" width="700"/>
</p>

<p align="center">
  <img src="https://iili.io/KSUfxn.png" width="700"/>
</p>

La siguiente sección deberá contar con los servicios que la empresa ofrece, estos servicios deben ser gestionados desde el backend del proyecto y deberán contar con un nombre o título, imagen acorde al tipo de servicio o producto y una descripción del mismo. Se recomienda crear una página independiente donde puedan detallar la investigación que se hizo acerca del producto y una mejor descripción de lo que ofrecerían o de la tecnología que utilizan en el servicio o producto ofertado.

<p align="center">
  <img src="https://iili.io/KSUqVs.png" width="700"/>
</p>

Se deberá implementar una sección inferior donde creen algunos casos de éxito o testimonios de las soluciones que ustedes ofrecen, donde con una foto, un texto y el nombre de la persona y/o empresa, van a referenciar porque su solución fue exitosa.
Finalmente debe contar con un footer donde deberá estar toda la información de contacto, que podrían ser un par de correos electrónicos, las diferentes ciudades donde trabajan, un teléfono y celular (no utilizar números telefónicos reales), también contener un enlace al repositorio del proyecto final de github, el repositorio debe ser público.

El desarrollo de la landing page se implementa apartir de la plantilla Biziness encontrada en <https://plantillashtmlgratis.com/todas-las-plantillas/plantilla/plantilla-web-gratis-biziness/>

## Zona de Gestión
El backend o la zona de gestión, deberá contar con la administración de los servicios que se van a visualizar en el sitio web principal o Portafolio de Servicios, Los nombres de las rutas, componentes y demás aspectos técnicos están definidos en la sección requisitos obligatorios estructura backend.
El backend implementará el módulo de autenticación realizado en la semana 3 para validar los usuarios y sus roles, la zona de administración debe contar inicialmente con la gestión o CRUD de Artículos y Categorías (como dos elementos de nombre genérico independiente del servicios que se vaya a implementar) y posteriormente se implementará la gestión de usuarios allí mismo. Para el manejo de rutas, se debe implementar el router-view con el fin de sacar provecho del poder de Vue y su característica de SPA. El back deberá proveer una API que permitirá realizar las diferentes peticiones a sus componentes desde el landing page





