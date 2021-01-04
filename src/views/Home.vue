<template>
  <div class="home">
    <top-banner></top-banner>
    <!-- Start main content -->
    <about-us></about-us>
    <counter-clients></counter-clients>
    <our-services></our-services>
    <our-portafolio></our-portafolio>
    <our-team></our-team>
    <start-testimonials></start-testimonials>
    <contact-us></contact-us>
    <content-footer></content-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import TopMenu from '@/components/main/TopMenu.vue'
import TopBanner from '@/components/main/TopBanner.vue'
import AboutUs from '../components/main/AboutUs.vue'
import CounterClients from '../components/main/CounterClients.vue'
import OurServices from '../components/main/OurServices.vue'
import OurPortafolio from '../components/main/OurPortafolio.vue'
import OurTeam from '../components/main/OurTeam.vue'
import StartTestimonials from '../components/main/StartTestimonials.vue'
import ContentFooter from '../components/main/ContentFooter.vue'
import ContactUs from '../components/main/ContactUs.vue'

import '@/assets/css/style.css';
import '@/assets/css/slick.css';
import '@/assets/css/theme-color/default-theme.css';


export default {
  name: 'Home',
  components: {
    TopMenu,
    TopBanner,
    AboutUs,
    CounterClients,
    OurServices,
    OurPortafolio,
    OurTeam,
    StartTestimonials,
    ContentFooter,
    ContactUs,
  }
}
</script>
