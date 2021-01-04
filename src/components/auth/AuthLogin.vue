<template>
  <div class="limiter">
    <div
      class="container-login100"
      style="background-image: url('images/bg-02.jpg')"
    >
      <div class="wrap-login100">
        <form class="login100-form validate-form" @submit.prevent="loginUser">
          <span class="login100-form-logo">
            <i class="zmdi zmdi-assignment-account"></i>
          </span>

          <span class="login100-form-title p-b-34 p-t-27">
            Ingreso de Usuario
          </span>

          <div
            class="wrap-input100 validate-input"
            :class="{ 'alert-validate': login.email.isValid }"
            data-validate="Correo inválido"
            ref="email"
          >
            <input
              class="input100"
              name="username"
              type="email"
              placeholder="Correo electrónico"
              v-model="login.email.value"
              @click="setFocus('email')"
            />
            <span class="focus-input100" data-placeholder=""></span>
          </div>

          <div
            class="wrap-input100 validate-input"
            :class="{ 'alert-validate': login.password.isValid }"
            data-validate="Contraseña Invalida"
            ref="email"
          >
            <input
              class="input100"
              type="password"
              name="pass"
              placeholder="Contraseña"
              v-model="login.password.value"
              @click="setFocus('password')"
            />
            <span class="focus-input100" data-placeholder=""></span>
          </div>

          <!-- <div class="contact100-form-checkbox">
            <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
            <label class="label-checkbox100" for="ckb1"> Remember me </label>
          </div> -->

          <div class="container-login100-form-btn">
            <button class="login100-form-btn">Ingresar</button>
          </div>

          <div class="text-center p-t-90">
            <a class="txt1" href="#"> Olvido la Contraseña? </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import jwt_decode from "jwt-decode"; //Importar el desencriptador
export default {
  data() {
    return {
      login: {
        email: {
          value: "",
          isValid: false,
        },
        password: {
          value: "",
          isValid: false,
        },
      },
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
  },
  beforeCreate(){
    this.$store.dispatch('autoLogin');
    if(this.$store.state.user){
      this.$router.push({name:'User'});
    }
  },
  methods: {
    loginUser() {
      if (this.validateForm()) {
         // Add (POST)
        axios.post('http://localhost:3000/api/usuario/login',{
            'email': this.login.email.value,
            'password': this.login.password.value,
        })
        .then(response => {
          return response.data;
        })
        .then( data => {
            this.$store.dispatch('guardarToken',data.tokenReturn)
            swal("Login Correcto", "Los datos de ingreson son correctos, bienvenido!.", "success");
            this.$router.push({name: 'User'});
        })
        .catch(error => {
          swal("Oops...", "Datos de ingreso incorrectos", "error");
          return error
        })
        
      }
    },
    setFocus(element) {
      this.login[element].isValid = false;
    },
    validateForm() {
      //Change state email valid
      this.login.email.isValid = !this.isEmailValid(this.login.email.value);
      //Change state password valid
      this.login.password.isValid = this.login.password.value == "";

      return !(this.login.password.isValid && this.login.password.isValid);
    },
    isEmailValid(email) {
      return this.email == "" ? "" : this.reg.test(email);
    },
  },
};
</script>
