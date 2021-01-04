<template>
  <!-- Image and text -->
  <div class="limiter">
    <top-menu :name="user.name" v-on:cerrarSesion="logOut()"></top-menu>
    <div class="container-login100" style=" min-height: 90vh; background-image: url('/images/bg-02.jpg')">
      <div class="wrap-login100">
        <form class="login100-form validate-form">
          <span class="login100-form-logo">
            <i class="zmdi zmdi-assignment-account"></i>
          </span>

          <span class="login100-form-title p-b-15 p-t-27">
            {{ user.name }}
          </span>
          <p class="field100">{{ user.rol }}</p>

          <div class="wrap-input100 p-t-20">
            <p class="field100">{{ user.email }}</p>
          </div>

          <div class="row">
            <div class="col-6">
              <p class="field50">Usuario desde</p>
            </div>
            <div class="col-6">
              <p class="field50">{{ formatDate(user.createdAt) }}</p>
            </div>
          </div>

          <div class="container-login100-form-btn p-t-30">
            <button class="login100-form-btn" @click="logOut">
              Cerrar Sesion
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import TopMenu from "./TopMenu.vue";
import '@/assets/css/main.css';
import '@/assets/css/util.min.css';

export default {
  components: {
    TopMenu,
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUserDetails() {

      if (this.$store.state.token) {
        //Si hay algo en el local Storage lo guarda en user
        this.user = this.$store.state.user ; //desencripta el token;
      }
    },
    logOut() {
      //Al salir limpia el almacenamiento y lo regresa a la ruta de inicio
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      this.$router.push("/");
    },
    formatDate(date) {
      if (date) {
        return moment(String(date)).format("MM-DD-YYYY");
      }
    },
  },
  created() {
    this.getUserDetails(); //Al iniciar la vista obtiene los datos del usuario
  },
};
</script>
